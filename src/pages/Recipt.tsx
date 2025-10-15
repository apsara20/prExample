import React from "react";

const Recipt: React.FC = () => {
  return (
    <div className="flex h-screen w-screen bg-gray-100 mt-0">
      {/* ===== SIDEBAR ===== */}
      <aside className="w-64 bg-blue-800 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-blue-700">
          Company Dashboard
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-3">
            <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">🏠 Dashboard</li>
            <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">👥 Employees</li>
            <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">📦 Projects</li>
            <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">📊 Reports</li>
            <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">⚙️ Settings</li>
          </ul>
        </nav>
        <div className="p-4 border-t border-blue-700 text-sm text-center">
          © 2025 Company Inc.
        </div>
      </aside>

      {/* ===== MAIN SECTION ===== */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md h-16 flex items-center justify-between px-6">
          <h2 className="text-xl font-semibold text-gray-700">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-500">Hello, Admin 👋</span>
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Body */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Buttons */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Company Records</h3>
<div className="flex justify-end gap-4">
  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
    Import
  </button>
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
   Add New
  </button>
</div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-blue-100 text-blue-900">
                <tr>
                  <th className="px-6 py-3 font-semibold">ID</th>
                  <th className="px-6 py-3 font-semibold">Name</th>
                  <th className="px-6 py-3 font-semibold">Email</th>
                  <th className="px-6 py-3 font-semibold">Role</th>
                  <th className="px-6 py-3 font-semibold text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-3">1</td>
                  <td className="px-6 py-3">Apsara P</td>
                  <td className="px-6 py-3">apsara@company.com</td>
                  <td className="px-6 py-3">Tester</td>
                  <td className="px-6 py-3 text-center space-x-4">
                      <button className="text-blue-600 hover:underline">Edit</button>
                      <button className="text-red-600 hover:underline ms-3">Delete</button>
  
               </td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-3">2</td>
                  <td className="px-6 py-3">John Doe</td>
                  <td className="px-6 py-3">john@company.com</td>
                  <td className="px-6 py-3">Developer</td>
                  <td className="px-6 py-3 text-center space-x-2">
                    <button className="text-blue-600 hover:underline ">Edit</button>
                    <button className="text-red-600 hover:underline ms-3">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Recipt;
