import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link, useNavigate } from 'react-router-dom';
import { Download } from 'lucide-react';

const incomeData = [
  { date: '1st Jan', income: 11000 },
  { date: '4th Jan', income: 8500 },
  { date: '6th Jan', income: 8200 },
  { date: '7th Jan', income: 13500 },
  { date: '8th Jan', income: 1000 },
  { date: '9th Jan', income: 7200 },
  { date: '10th Jan', income: 9500 },
  { date: '11th Jan', income: 8900 },
  { date: '13th Jan', income: 8400 },
  { date: '12th Feb', income: 9700 },
];

const Income = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "User";

  const totalIncome = incomeData.reduce((sum, item) => sum + item.income, 0);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 shadow-md">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center text-xl">👤</div>
          <h2 className="mt-4 font-semibold text-lg">{userName}</h2>
        </div>
        <nav className="mt-8 space-y-4">
          <button onClick={() => navigate("/dashboard")} className="block text-gray-700 hover:text-purple-600">Dashboard</button>
          <button className="block text-white bg-purple-600 py-2 px-4 rounded">Income</button>
          <button onClick={() => navigate("/expense")} className="block text-gray-700 hover:text-purple-600">Expense</button>
          <button onClick={() => {
            localStorage.clear();
            navigate("/login");
          }} className="block text-gray-700 hover:text-purple-600">Logout</button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Income Overview</h2>
            <p className="text-gray-500 text-sm">Hello {userName}, track your earnings over time and analyze your income trends.</p>
          </div>
          <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded hover:bg-purple-200">
            + Add Income
          </button>
        </div>

        {/* Chart */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={incomeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="income" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-center mt-4 text-xl font-bold text-green-600">Total Income: ${totalIncome.toLocaleString()}</p>
        </div>

        {/* Income Sources */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-4">Income Sources</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <div className="flex items-center gap-4">
                <img src="https://img.icons8.com/ios-filled/50/briefcase.png" className="w-6 h-6" alt="Salary" />
                <div>
                  <p className="font-medium">Salary</p>
                  <p className="text-gray-500 text-sm">12th Feb 2025</p>
                </div>
              </div>
              <div className="text-green-500 font-bold">+ $12000</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src="https://img.icons8.com/ios-filled/50/bank.png" className="w-6 h-6" alt="Interest" />
                <div>
                  <p className="font-medium">Interest from Savings</p>
                  <p className="text-gray-500 text-sm">13th Jan 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-green-500 font-bold">
                + $9600 <Download className="w-4 h-4 cursor-pointer" />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src="https://img.icons8.com/ios-filled/50/bank.png" className="w-6 h-6" alt="Interest" />
                <div>
                  <p className="font-medium">Rental Income</p>
                  <p className="text-gray-500 text-sm">17th march 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-green-500 font-bold">
                + $7420 <Download className="w-4 h-4 cursor-pointer" />
              </div>
            </div>


            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src="https://img.icons8.com/ios-filled/50/bank.png" className="w-6 h-6" alt="Interest" />
                <div>
                  <p className="font-medium">Software Developer</p>
                  <p className="text-gray-500 text-sm">26th july 2000</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-green-500 font-bold">
                + $9600 <Download className="w-4 h-4 cursor-pointer" />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src="https://img.icons8.com/ios-filled/50/bank.png" className="w-6 h-6" alt="Interest" />
                <div>
                  <p className="font-medium">YouTube Revenue</p>
                  <p className="text-gray-500 text-sm">20th sept 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-green-500 font-bold">
                + $7800 <Download className="w-4 h-4 cursor-pointer" />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src="https://img.icons8.com/ios-filled/50/bank.png" className="w-6 h-6" alt="Interest" />
                <div>
                  <p className="font-medium">Stock Market</p>
                  <p className="text-gray-500 text-sm">27th feb  2012</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-green-500 font-bold">
                + $3600 <Download className="w-4 h-4 cursor-pointer" />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src="https://img.icons8.com/ios-filled/50/bank.png" className="w-6 h-6" alt="Interest" />
                <div>
                  <p className="font-medium">Graphic Designer</p>
                  <p className="text-gray-500 text-sm">13th March 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-green-500 font-bold">
                + $14000 <Download className="w-4 h-4 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income;
