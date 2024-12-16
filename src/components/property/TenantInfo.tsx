import React, { useState } from 'react';
import Overview from './Overview';
import Charges from './Charges';
import { Breadcrumbs } from '../breadCrumbs';
// import Overview from './Overview';
// import Charges from './Charges';

export const UnitDetails: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'overview' | 'charges'>('overview');

    return (

        <div className="bg-gray-50 min-h-screen p-5">
            <div className="flex items-center gap-4">
                <h2 className="text-sm text-white">
                    <Breadcrumbs />
                </h2>
            </div>
            <div className="bg-[#2eaef0] rounded-t-lg text-white p-6 flex items-center">
                <img
                    src="https://via.placeholder.com/80"
                    alt="Property"
                    className="rounded-full w-20 h-20 mr-4"
                />
                <div>
                    <h1 className="text-2xl font-bold">Miami Hotel, Main</h1>
                    {/* <p>4 beds | 1 bath | 0 sqft | Unlisted | Shareable Unit Code: PWN-868</p>
                    <p className="mt-1 underline cursor-pointer">Copy Link to Apply</p> */}
                </div>
                <div className="ml-auto">
                    <button className="bg-white text-[#2eaef0] px-4 py-2 rounded hover:bg-gray-200">
                        Edit Unit Info
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="border-b bg-white shadow-sm">
                <nav className="flex space-x-4 px-6">
                    <button
                        className={`py-3 text-sm font-medium ${activeTab === 'overview'
                            ? 'text-blue-600 border-b-2 border-[#2eaef0]'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}
                        onClick={() => setActiveTab('overview')}
                    >
                        Overview
                    </button>
                    <button
                        className={`py-3 text-sm font-medium ${activeTab === 'charges'
                            ? 'text-blue-600 border-b-2 border-[#2eaef0]'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}
                        onClick={() => setActiveTab('charges')}
                    >
                        Charges
                    </button>
                </nav>
            </div>

            {/* Content */}
            <div className="p-6 bg-white rounded-b-lg shadow-md">
                {activeTab === 'overview' && <Overview />}
                {activeTab === 'charges' && <Charges />}
            </div>
        </div>
    );
};
