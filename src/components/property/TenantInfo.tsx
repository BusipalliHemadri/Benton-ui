import React, { useState } from 'react';
import Overview from './Overview';
import Charges from './Charges';
import { properties } from '../../data/properties';
import { useParams } from 'react-router-dom';

export const UnitDetails: React.FC = () => {
    const { id } = useParams();

    const [activeTab, setActiveTab] = useState<'overview' | 'charges'>('overview');

    return (

        <div className="min-h-screen p-5">
            <div className="bg-[#2eaef0] rounded-t-lg text-white p-6 flex items-center">
                <img
                    src="https://via.placeholder.com/80"
                    alt="Property"
                    className="rounded-full w-20 h-20 mr-4"
                />
                <h2 className="text-xl text-white">
                    {properties.find((data) => data.id === Number(id))?.name || 'Property Details'}
                </h2>
                <div className="ml-auto">
                    <button className="bg-white text-[#2eaef0] text-sm px-4 py-2 rounded hover:bg-gray-200">
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
