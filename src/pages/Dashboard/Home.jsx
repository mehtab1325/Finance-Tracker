import React from "react";
import { useNavigate } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { FaSignOutAlt } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const userName = localStorage.getItem("userName") || "User";

  const totalIncome = 86200;
  const totalExpenses = 7100;
  const totalBalance = totalIncome - totalExpenses;

  const transactions = [
    { name: "Shopping", date: "17th Feb 2025", amount: 430 },
    { name: "Travel", date: "13th Feb 2025", amount: 670 },
    { name: "Electricity Bill", date: "11th Feb 2025", amount: 200 },
    { name: "Loan Repayment", date: "10th Feb 2025", amount: 600 },
    { name: "Transport", date: "14th Jan 2025", amount: 300 },
  ];

  const chartData = {
    labels: ["Total Balance", "Total Expenses", "Total Income"],
    datasets: [
      {
        data: [totalBalance, totalExpenses, totalIncome],
        backgroundColor: ["#7C3AED", "#EF4444", "#F97316"],
        hoverOffset: 4,
      },
    ],
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="flex h-screen font-sans bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 border-r shadow-sm">
        <h1 className="text-xl font-bold mb-8">Expense Tracker</h1>
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full bg-purple-200 flex items-center justify-center text-3xl">👤</div>
          <p className="mt-3 font-semibold">{userName}</p>
        </div>
        <nav className="flex flex-col gap-3">
          <button className="bg-purple-600 text-white py-2 px-4 rounded text-left">Dashboard</button>
          <button onClick={() => navigate("/income")} className="hover:bg-gray-100 py-2 px-4 text-left">Income</button>
          <button onClick={() => navigate("/expense")} className="hover:bg-gray-100 py-2 px-4 text-left">Expense</button>
          <button onClick={logout} className="text-red-600 hover:bg-red-100 py-2 px-4 rounded text-left">
            <FaSignOutAlt className="inline-block mr-2" />
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Top Cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-5 rounded shadow">
            <p className="text-gray-500 text-sm">Total Balance</p>
            <p className="text-2xl font-bold">${totalBalance.toLocaleString()}</p>
          </div>
          <div className="bg-white p-5 rounded shadow">
            <p className="text-gray-500 text-sm">Total Income</p>
            <p className="text-2xl font-bold">${totalIncome.toLocaleString()}</p>
          </div>
          <div className="bg-white p-5 rounded shadow">
            <p className="text-gray-500 text-sm">Total Expenses</p>
            <p className="text-2xl font-bold">${totalExpenses.toLocaleString()}</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-6">
          {/* Recent Transactions */}
          <div className="bg-white p-6 rounded shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Recent Transactions</h2>
              <button className="text-sm text-gray-600 hover:text-black">See All →</button>
            </div>
            <ul className="space-y-4">
              {transactions.map((tx, idx) => (
                <li key={idx} className="flex justify-between text-sm">
                  <div>
                    <p className="font-medium">{tx.name}</p>
                    <p className="text-gray-400">{tx.date}</p>
                  </div>
                  <span className="text-red-500">- ${tx.amount}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Chart Overview */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Financial Overview</h2>
            <Pie data={chartData} />
            <p className="text-center mt-4 text-xl font-bold">${totalBalance}</p>
            <div className="flex justify-around mt-4 text-xs text-gray-600">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-500 inline-block rounded-full"></span>
                Total Balance
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 inline-block rounded-full"></span>
                Total Expenses
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-orange-400 inline-block rounded-full"></span>
                Total Income
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
