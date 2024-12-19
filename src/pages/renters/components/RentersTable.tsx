import React from 'react';

export const RentersTable: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Renters Table</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Contact</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">John Doe</td>
            <td className="border border-gray-300 p-2">123-456-7890</td>
            <td className="border border-gray-300 p-2">john@example.com</td>
            <td className="border border-gray-300 p-2">
              <button className="bg-blue-500 text-white px-4 py-1 rounded">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
