import React from "react";
import { useNavigate } from "react-router-dom";
import DataGrid, {
  Column,
  Paging,
  Pager,
  SearchPanel,
  ColumnChooser,
} from "devextreme-react/data-grid";
import { useFrappeGetDocList } from "frappe-react-sdk";
import "devextreme/dist/css/dx.light.css";

interface Customer {
  name: string;
  // customer_group: string;
  // owner: string;
}

const PropertyTable: React.FC = () => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useFrappeGetDocList<Customer>("Customer", {
    fields: ["name"],
  });

  const onRowClick = (e: any) => {
    // Navigate to detailed view
    navigate(`/property/${e.data.name}`);
  };

  return (
    <div className="bg-card p-6 rounded-lg shadow-lg">
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error loading data: {error.message}</p>}

      {data && (
        <DataGrid
          dataSource={data}
          showBorders={true}
          columnAutoWidth={true}
          rowAlternationEnabled={true}
          allowColumnReordering={true}
          onRowClick={onRowClick}
          hoverStateEnabled={true}
          showColumnLines={false}
          showRowLines={true}
          wordWrapEnabled={true}
          allowColumnResizing={true}
          style={{
            textTransform: "capitalize",
            height: "74vh",
          }}
        >
          <ColumnChooser enabled={true} />
          <SearchPanel width={240} visible={true} placeholder="Search..." />

          <Column dataField="name" caption="Customer Name" alignment="left" />
          {/* <Column dataField="customer_group" caption="Customer Group" alignment="left" />
          <Column dataField="owner" caption="Owner" alignment="left" /> */}
          <Paging defaultPageSize={10} />
          <Pager
            visible={true}
            allowedPageSizes={[10, 20, 50]}
            showPageSizeSelector={true}
            showNavigationButtons={true}
            showInfo={true}
            infoText="Page {0} of {1} ({2} Customers)"
          />
        </DataGrid>
      )}
    </div>
  );
};

export default PropertyTable;
