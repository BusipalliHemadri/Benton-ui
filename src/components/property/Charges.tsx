import React, { useState } from 'react';

interface Charge {
    type: string;
    amount: number;
    date: string;
    status: 'Paid' | 'Overdue';
}

const Charges: React.FC = () => {
    const [charges, setCharges] = useState<Charge[]>([
        { type: 'Rent', amount: 750, date: '2024-06-01', status: 'Paid' },
        { type: 'Utilities', amount: 150, date: '2024-06-02', status: 'Overdue' },
        { type: 'Rent', amount: 750, date: '2024-05-01', status: 'Paid' },
        { type: 'Rent', amount: 750, date: '2024-04-01', status: 'Overdue' },
    ]);

    const [showOnlyRent, setShowOnlyRent] = useState(false);

    const filteredCharges = showOnlyRent
        ? charges.filter((charge) => charge.type === 'Rent')
        : charges;

    // State for adding new charge
    const [newCharge, setNewCharge] = useState({
        type: '',
        amount: '',
        date: '',
        status: 'Paid',
    });

    const handleAddCharge = () => {
        const charge: Charge = {
            type: newCharge.type,
            amount: parseFloat(newCharge.amount),
            date: newCharge.date,
            status: newCharge.status as 'Paid' | 'Overdue',
        };
        setCharges([...charges, charge]);
        setNewCharge({ type: '', amount: '', date: '', status: 'Paid' });
    };

    return (
        <div className="w-full">
            {/* Header and Filter */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Charges</h2>
                <div className="flex space-x-4">
                    <button
                        className={`px-4 py-2 rounded ${showOnlyRent ? 'bg-[#f3f4f6] text-gray-700' : 'bg-blue-600 text-white'
                            }`}
                        onClick={() => setShowOnlyRent(false)}
                    >
                        Show All Charges
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${showOnlyRent ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                            }`}
                        onClick={() => setShowOnlyRent(true)}
                    >
                        Show Only Rent Charges
                    </button>
                </div>
            </div>

            {/* Charges Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                {/* Paid Rent Card */}
                <div className="bg-green-100 border border-green-300 rounded-lg p-4 shadow">
                    <h3 className="text-lg font-semibold text-green-700">Paid Rent</h3>
                    <p className="text-sm mt-2">Rent payments made on time.</p>
                    <p className="text-lg mt-2 font-bold">$2250</p>
                </div>

                {/* Dynamic Charge Cards */}
                {filteredCharges.map((charge, index) => (
                    <div key={index} className="bg-white border rounded-lg p-4 shadow">
                        <h3 className="font-semibold text-gray-700">{charge.type}</h3>
                        <p className="text-sm text-gray-500">{`Due Date: ${charge.date}`}</p>
                        <p className="mt-2">
                            Amount: <span className="font-medium">${charge.amount.toFixed(2)}</span>
                        </p>
                        <p
                            className={`mt-1 font-medium ${charge.status === 'Paid' ? 'text-green-500' : 'text-red-500'
                                }`}
                        >
                            {charge.status}
                        </p>
                    </div>
                ))}
            </div>

            {/* Add New Charge Form */}
            <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Add New Charge</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                        <label className="block text-gray-700">Charge Type</label>
                        <input
                            type="text"
                            placeholder="e.g., Rent"
                            className="w-full border rounded px-3 py-2"
                            value={newCharge.type}
                            onChange={(e) => setNewCharge({ ...newCharge, type: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Amount</label>
                        <input
                            type="number"
                            placeholder="e.g., 750"
                            className="w-full border rounded px-3 py-2"
                            value={newCharge.amount}
                            onChange={(e) => setNewCharge({ ...newCharge, amount: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Due Date</label>
                        <input
                            type="date"
                            className="w-full border rounded px-3 py-2"
                            value={newCharge.date}
                            onChange={(e) => setNewCharge({ ...newCharge, date: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Status</label>
                        <select
                            className="w-full border rounded px-3 py-2"
                            value={newCharge.status}
                            onChange={(e) => setNewCharge({ ...newCharge, status: e.target.value })}
                        >
                            <option value="Paid">Paid</option>
                            <option value="Overdue">Overdue</option>
                        </select>
                    </div>
                </div>
                <button
                    onClick={handleAddCharge}
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Add Charge
                </button>
            </div>
        </div>
    );
};

export default Charges;
