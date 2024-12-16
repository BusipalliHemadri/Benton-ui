import React, { useState } from "react";

interface Charge {
  type: string;
  amount: number;
  fromDate: string;
  toDate: string;
  status: "Paid" | "Overdue";
}

const Charges: React.FC = () => {
  const [charges] = useState<Charge[]>([
    { type: "Rent", amount: 750, fromDate: "2024-05-01", toDate: "2024-06-01", status: "Paid" },
    { type: "Utilities", amount: 150, fromDate: "2024-05-05", toDate: "2024-06-05", status: "Overdue" },
    { type: "Rent", amount: 750, fromDate: "2024-04-01", toDate: "2024-05-01", status: "Paid" },
    { type: "Rent", amount: 750, fromDate: "2024-03-01", toDate: "2024-04-01", status: "Overdue" },
  ]);

  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [filterType, setFilterType] = useState("all");
  const [showCurrentLease, setShowCurrentLease] = useState(false);

  // Filtered Data Logic
  const filteredCharges = charges.filter((charge) => {
    // Check date range
    const fromDateValid =
      !dateRange.from || new Date(charge.fromDate) >= new Date(dateRange.from);
    const toDateValid =
      !dateRange.to || new Date(charge.toDate) <= new Date(dateRange.to);

    // Check type filter
    const typeFilter = filterType === "all" || charge.type === "Rent";

    // For current lease checkbox logic (Placeholder for demo)
    const leaseFilter = showCurrentLease ? charge.type === "Rent" : true;

    return fromDateValid && toDateValid && typeFilter && leaseFilter;
  });

  return (
    <div className="w-full p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Charges</h2>
        <span className="px-2 py-1 bg-gray-100 border rounded text-sm font-medium">
          DUE (+30 DAYS): <span className="text-black">$4500.00</span>
        </span>
      </div>

      {/* Filters UI */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex items-center space-x-2">
          <label>From</label>
          <input
            type="date"
            className="border rounded px-3 py-2"
            value={dateRange.from}
            onChange={(e) =>
              setDateRange({ ...dateRange, from: e.target.value })
            }
          />
        </div>
        <div className="flex items-center space-x-2">
          <label>To</label>
          <input
            type="date"
            className="border rounded px-3 py-2"
            value={dateRange.to}
            onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showCurrentLease}
            onChange={() => setShowCurrentLease(!showCurrentLease)}
            className="cursor-pointer"
          />
          <label>Only show charges for the current lease</label>
        </div>
      </div>

      {/* Radio Buttons for Filter Type */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            name="filterType"
            value="all"
            checked={filterType === "all"}
            onChange={() => setFilterType("all")}
          />
          <label>Show All Charges</label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            name="filterType"
            value="rent"
            checked={filterType === "rent"}
            onChange={() => setFilterType("rent")}
          />
          <label>Show Only Rent Charges</label>
        </div>
      </div>

      {/* Charges Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {filteredCharges.length > 0 ? (
          filteredCharges.map((charge, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 shadow">
              <h3 className="font-semibold text-gray-700">{charge.type}</h3>
              <p className="text-sm text-gray-500">{`From: ${charge.fromDate}`}</p>
              <p className="text-sm text-gray-500">{`To: ${charge.toDate}`}</p>
              <p className="mt-2">
                Amount: <span className="font-medium">${charge.amount.toFixed(2)}</span>
              </p>
              <p
                className={`mt-1 font-medium ${
                  charge.status === "Paid" ? "text-green-500" : "text-red-500"
                }`}
              >
                {charge.status}
              </p>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-gray-500">No charges found for the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default Charges;