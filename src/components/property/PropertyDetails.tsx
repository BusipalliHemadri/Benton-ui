import React, { useEffect, useState, useRef, act } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DataGrid, {
  Column,
  Paging,
  Pager,
  Selection,
  SearchPanel,
  ColumnChooser,
  ColumnFixing,
  Toolbar,
  Item,
  Export as DataGridExport,
} from 'devextreme-react/data-grid';
import * as ExcelJS from 'exceljs';
import saveAs from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { mockFlats } from '../../data/mockFlats';
import { StatusCell } from '../table/cells/StatusCell';
import { MoneyCell } from '../table/cells/MoneyCell';
import 'devextreme/dist/css/dx.light.css';
import { usePropertyStore } from '../../store/propertyStore';
import { TABLE_PAGE_SIZES } from '../../config/constants';
import { Breadcrumbs } from '../breadCrumbs';
import StatsSection from '../stats/StatsSection';
import { PropertyStatus } from '../../types/property';
// import { Breadcrumbs } from '../breadcrumbs';

export const PropertyDetails: React.FC = () => {
  const { id } = useParams();
  const properties = usePropertyStore((state) => state.properties);
  const dataGridRef = useRef(null);
  const navigate = useNavigate();


  const [isWindowSizeSmall, setIsWindowSizeSmall] = useState(false);
  // const property = mockFlats.find((data) => data.buildingId === Number(id)) || null;
  const [activeFilter, setActiveFilter] = React.useState<PropertyStatus>('all');


  console.log(activeFilter)
  const handleRowClick = (e) => {
    const selectedRoomId = e.data.roomId; 
    navigate(`/property/${id}/unit/${selectedRoomId}`)
  };

  useEffect(() => {
    const checkWindowSize = () => {
      setIsWindowSizeSmall(window.innerWidth <= 1813);
    };
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize, { passive: true });
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  const exportData = (type, allData) => {
    const dataSource = allData
      ? mockFlats.filter((data) => data.buildingId === Number(id))
      : dataGridRef.current.instance.getVisibleRows().map((row) => row.data);

    if (type === 'excel') {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Property Details');

      worksheet.columns = [
        { header: 'Room Number', key: 'roomNumber', width: 15 },
        { header: 'Weekly Rent', key: 'rentAmount', width: 15 },
        { header: 'Lease End', key: 'leaseEnd', width: 15 },
        { header: 'Status', key: 'status', width: 15 },
      ];

      dataSource.forEach((row) => {
        worksheet.addRow(row);
      });

      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), allData ? 'AllData_PropertyDetails.xlsx' : 'CurrentPage_PropertyDetails.xlsx');
      });
    } else if (type === 'pdf') {
      const doc = new jsPDF({ orientation: 'landscape' });
      doc.text('Property Details', 14, 16);

      doc.autoTable({
        head: [['Room Number', 'Weekly Rent', 'Status']],
        body: dataSource.map((row) => [
          row.roomNumber,
          row.rentAmount,
          row.leaseEnd,
          row.status,
        ]),
        styles: { fontSize: 10, halign: 'left' },
        margin: { top: 20 },
      });

      doc.save(allData ? 'AllData_PropertyDetails.pdf' : 'CurrentPage_PropertyDetails.pdf');
    }
  };

  const handleExport = (type, allData = true) => {
    exportData(type, allData);
  };

  return (
    <div className="space-y-6">


      <div className="flex items-center gap-4">
        <h5 className="text-sm text-black">
          <Breadcrumbs />
        </h5>
      </div>

      <h2 className="text-xl text-black">
        {properties.find((data) => data.id === Number(id))?.name || 'Property Details'}
      </h2>


      <StatsSection
        propertyId={id}
        properties={mockFlats}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <div className="bg-card p-6 rounded-lg shadow-lg overflow-hidden">
        <DataGrid
          ref={dataGridRef}
          dataSource={activeFilter === 'all' ? mockFlats.filter((data) => (data.buildingId === Number(id))) : mockFlats.filter((data) => (data.buildingId === Number(id) && data.status === activeFilter))}
          showBorders={true}
          columnAutoWidth={true}
          onRowClick={handleRowClick}
          rowAlternationEnabled={true}
          hoverStateEnabled={true}
          allowColumnReordering={true}
          showColumnLines={false}
          showRowLines={true}
          wordWrapEnabled={true}
          allowColumnResizing={true}
          style={{
            textTransform: 'capitalize',
            height: isWindowSizeSmall ? '52vh' : '74vh',
          }}
          remoteOperations={{
            filtering: true,
            sorting: true,
            paging: true,
            grouping: true,
            groupPaging: true,
            summary: true,
          }}
        >
          <Toolbar>
            <Item
              locateInMenu="auto"
              location="after"
              widget="dxButton"
              options={{
                icon: 'exportxlsx',
                text: 'Export to Excel',
                onClick: () => handleExport('excel'),
              }}
            />
            <Item
              locateInMenu="auto"
              location="after"
              widget="dxButton"
              options={{
                icon: 'exportpdf',
                text: 'Export to PDF',
                onClick: () => handleExport('pdf'),
              }}
            />
            <Item name="columnChooserButton" />
            <Item name="searchPanel" />
          </Toolbar>

          <DataGridExport enabled={true} />
          <Selection mode="single" />
          <ColumnChooser enabled={true} />
          <ColumnFixing enabled={true} />
          <SearchPanel width={240} visible={true} placeholder="Search..." />
          <Column
            dataField="roomNumber"
            caption="Room Number"
            width={250}
            alignment="center"
          />
          <Column
            dataField="rentAmount"
            caption="Weekly Rent"
            minWidth={100}
            cellRender={MoneyCell}
            alignment="center"
          />

          <Column
            dataField="status"
            caption="Status"
            cellRender={StatusCell}
            alignment="left"
          />
          <Column
            dataField="leaseEnd"
            caption="Lease End"
            alignment="left"
          />
          <Pager
            visible={true}
            allowedPageSizes={TABLE_PAGE_SIZES}
            showPageSizeSelector={true}
            showNavigationButtons={true}
            showInfo={true}
            infoText="Page {0} of {1} ({2} Flats)"
          />
          <Paging defaultPageSize={10} />
        </DataGrid>
      </div>
    </div>
  );
};
