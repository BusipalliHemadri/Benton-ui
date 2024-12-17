import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Charge {
  type: string;
  amount: number;
  fromDate: string;
  toDate: string;
  status: "Paid" | "Overdue";
}

const formatDate = (date: string | Date | null | undefined): string => {
  if (!date) return "";
  const d = new Date(date);
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const day = d.getDate().toString().padStart(2, "0");
  const year = d.getFullYear();
  return `${month}/${day}/${year}`;
};

const Charges: React.FC = () => {
  const [charges] = useState<Charge[]>([
    { type: "Rent", amount: 1000, fromDate: "2024-05-01", toDate: "2024-06-01", status: "Overdue" },
    { type: "Utilities", amount: 150, fromDate: "2024-05-01", toDate: "2024-06-01", status: "Overdue" },
    { type: "Rent", amount: 800, fromDate: "2024-04-01", toDate: "2024-05-01", status: "Paid" },
    { type: "Rent", amount: 750, fromDate: "2024-03-01", toDate: "2024-04-01", status: "Paid" },
  ]);

  const [dateRange, setDateRange] = useState<{ from: Date | null; to: Date | null }>({
    from: null,
    to: null,
  });

  const [filterType, setFilterType] = useState("all");
  const [showCurrentLease, setShowCurrentLease] = useState(false);

  const clearDateFilters = () => {
    setDateRange({ from: null, to: null });
  };

  const filteredCharges = charges.filter((charge) => {
    const fromDateValid =
      !dateRange.from || new Date(charge.fromDate) >= dateRange.from;
    const toDateValid =
      !dateRange.to || new Date(charge.toDate) <= dateRange.to;
    const typeFilter = filterType === "all" || charge.type === "Rent";
    const leaseFilter = showCurrentLease ? charge.type === "Rent" : true;

    return fromDateValid && toDateValid && typeFilter && leaseFilter;
  });

  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl">Charges</h2>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="flex items-center space-x-2">
          <label>From</label>
          <DatePicker
            selected={dateRange.from}
            onChange={(date) => setDateRange({ ...dateRange, from: date })}
            dateFormat="MM/dd/yyyy"
            className="border rounded px-3 py-2"
            placeholderText="MM/DD/YYYY"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label>To</label>
          <DatePicker
            selected={dateRange.to}
            onChange={(date) => setDateRange({ ...dateRange, to: date })}
            dateFormat="MM/dd/yyyy"
            className="border rounded px-3 py-2"
            placeholderText="MM/DD/YYYY"
          />
        </div>
        <button
          onClick={clearDateFilters}
          className="bg-[#2eaef0] text-white px-4  text-sm py-2 rounded hover:bg-[#1c8bce]"
        >
          Clear Dates
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={showCurrentLease}
          onChange={() => setShowCurrentLease(!showCurrentLease)}
          className="cursor-pointer"
        />
        <label className="text-gray-500 text-sm">
          Only show charges for the current lease
        </label>
      </div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            name="filterType"
            value="all"
            checked={filterType === "all"}
            onChange={() => setFilterType("all")}
          />
          <label className="text-gray-500 text-sm">Show All Charges</label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            name="filterType"
            value="rent"
            checked={filterType === "rent"}
            onChange={() => setFilterType("rent")}
          />
          <label className="text-gray-500 text-sm">Show Only Rent Charges</label>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {filteredCharges.length > 0 ? (
          filteredCharges.map((charge, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 shadow">
              <h3 className="font-semibold text-gray-700">{charge.type}</h3>

              <div className="flex justify-between text-sm text-gray-500">
                <p>From</p>
                <span>{formatDate(charge.fromDate)}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-500">
                <p>To</p>
                <span>{formatDate(charge.toDate)}</span>
              </div>

              <p className="mt-2">
                Amount :{" "}
                <span className="text-sm">${charge.amount.toFixed(2)}</span>
              </p>

              <p
                className={`mt-1 font-medium ${charge.status === "Paid" ? "text-green-500" : "text-red-500"
                  }`}
              >
                {charge.status}
              </p>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-gray-500">
            No charges found for the selected filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default Charges;
