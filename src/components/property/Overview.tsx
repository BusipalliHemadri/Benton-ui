import React from 'react';

const Overview: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Lease */}
            <div className="bg-white border rounded-lg p-4 shadow">
                <h2 className="text-xl mb-3">Current Lease</h2>
                <div className="flex justify-between text-sm text-gray-500">
                    <p>Rent Amount</p>
                    <span>$750.00</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                    <p>Lease Start</p>
                    <span>12/17/2024</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                    <p>Lease End</p>
                    <span>12/24/2024</span>
                </div>
                <button className="mt-4 bg-[#2eaef0] text-sm text-white px-3 py-1 rounded hover:bg-[#1c8bce]">
                    Delete Lease
                </button>
            </div>

            <div className="bg-white border rounded-lg p-4 shadow">
                <h2 className="text-xl mb-3 flex items-center">
                    Premium Maintenance{" "}
                    <span className="ml-2 bg-green-100 text-green-600 px-2 rounded text-xs">
                        ENABLED
                    </span>
                </h2>
                <p className="text-sm text-gray-500">
                    You're covered by 24/7 Maintenance coordination!
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                    <p>Provider</p>
                    <span>Latchel</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                    <p>Plan</p>
                    <span>Full</span>
                </div>
                <button className="mt-4 bg-[#2eaef0] text-sm text-white px-3 py-1 rounded hover:bg-[#1d94d8]">
                    Manage Plan
                </button>
            </div>

            {/* Tenants */}
            <div className="bg-white  border rounded-lg p-4 shadow">
                <h2 className="text-lg flex justify-between items-center mb-3">Tenants
                    <button className="bg-[#2eaef0] text-white text-sm px-3 mt-3 py-1 rounded hover:bg-[#1d94d8]">
                        Add New Tenant
                    </button>
                </h2><span>


                </span>
                <p className='text-sm text-gray-500'>Ed Barone</p>
                <p className="text-sm text-gray-500">team@Mackeco.com</p>
            </div>

            {/* Notes */}
            <div className="bg-white border rounded-lg p-4 shadow">
                <h2 className="text-lg  mb-3">Notes</h2>
                <p className="text-gray-500 text-sm">No notes available.</p>
                <button className="mt-3 bg-[#2eaef0] text-white px-3  text-sm py-1 rounded hover:bg-[#1d94d8]">
                    Edit
                </button>
            </div>
        </div>
    );
};

export default Overview;
