import React from 'react';

const Overview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Current Lease */}
      <div className="bg-white border rounded-lg p-4 shadow">
        <h2 className="text-lg font-semibold mb-3">Current Lease</h2>
        <p>Rent Amount: <span className="font-medium">$750.00</span></p>
        <p>Lease Start: <span className="font-medium">08/01/2024</span></p>
        <p>Lease End: <span className="font-medium">07/31/2025</span></p>
        <button className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          Delete Lease
        </button>
      </div>

      {/* Premium Maintenance */}
      <div className="bg-white border rounded-lg p-4 shadow">
        <h2 className="text-lg font-semibold mb-3 flex items-center">
          Premium Maintenance <span className="ml-2 bg-green-100 text-green-600 px-2 rounded text-xs">ENABLED</span>
        </h2>
        <p>You're covered by 24/7 Maintenance coordination!</p>
        <p>Provider: <span className="font-medium">Latchel</span></p>
        <p>Plan: <span className="font-medium">Full</span></p>
        <button className="mt-4 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
          Manage Plan
        </button>
      </div>

      {/* Unit Unlisted */}
      <div className="bg-white border rounded-lg p-4 shadow col-span-1 md:col-span-2">
        <h2 className="text-lg font-semibold mb-3">Unit Unlisted</h2>
        <p>Get your listing in front of 10 million more tenants!</p>
        <div className="flex items-center my-3">
          <img src="https://via.placeholder.com/120x40" alt="Partners" />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Create Listing
        </button>
      </div>

      {/* Tenants */}
      <div className="bg-white border rounded-lg p-4 shadow">
        <h2 className="text-lg font-semibold mb-3">Tenants</h2>
        <p>Ed Barone</p>
        <p className="text-sm text-gray-500">team@rentredi.com</p>
      </div>

      {/* Notes */}
      <div className="bg-white border rounded-lg p-4 shadow">
        <h2 className="text-lg font-semibold mb-3">Notes</h2>
        <p className="text-gray-500">No notes available.</p>
        <button className="mt-3 bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Overview;
