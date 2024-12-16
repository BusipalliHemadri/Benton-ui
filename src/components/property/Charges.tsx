import React from 'react';

const Charges: React.FC = () => {
  return (
    <div>
      {/* Charges Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Charges</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Add Charge
        </button>
      </div>

      {/* Charges List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Charge Card */}
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white border rounded-lg p-4 shadow">
            <h3 className="font-medium text-gray-700">Rent</h3>
            <p className="text-sm text-gray-500">November 30, 2024</p>
            <div className="mt-2">
              <p>
                Total: <span className="font-medium">$750.00</span>
              </p>
              <p>
                Paid: <span className="font-medium">$700.00</span>
              </p>
              <p>
                Balance: <span className="font-medium text-red-500">$50.00</span>
              </p>
            </div>
            <p className="mt-3 text-sm text-red-500">Overdue</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Charges;
