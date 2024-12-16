import React from 'react';

const Overview: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Lease */}
            <div className="bg-white border rounded-lg p-4 shadow">
                <h2 className="text-lg font-semibold mb-3">Current Lease</h2>
                <p>Rent Amount: <span >$750.00</span></p>
                <p>Lease Start: <span >08/01/2024</span></p>
                <p>Lease End: <span >07/31/2025</span></p>
                <button className="mt-4 bg-[#2eaef0] text-white px-3 py-1 rounded hover:bg-[#2eaef0]">
                    Delete Lease
                </button>
            </div>

            {/* Premium Maintenance */}
            <div className="bg-white border rounded-lg p-4 shadow">
                <h2 className="text-lg font-semibold mb-3 flex items-center">
                    Premium Maintenance <span className="ml-2 bg-green-100 text-green-600 px-2 rounded text-xs">ENABLED</span>
                </h2>
                <p>You're covered by 24/7 Maintenance coordination!</p>
                <p>Provider: <span >Latchel</span></p>
                <p>Plan: <span >Full</span></p>
                <button className="mt-4 bg-[#2eaef0] text-white px-3 py-1 rounded hover:bg-[#2eaef0]">
                    Manage Plan
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
