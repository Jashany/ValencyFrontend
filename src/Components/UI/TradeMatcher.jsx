import React from "react";

const TradeMatcher = ({ data }) => {
  return (
    <div className="bg-[#1D1D1D] text-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Trade Matcher</h1>
        <select
          className="bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700"
          defaultValue="Today"
        >
          <option value="Today">Today</option>
          <option value="Yesterday">Yesterday</option>
          <option value="This Week">This Week</option>
        </select>
      </div>
      <table className="table-auto w-full text-left">
        <thead>
          <tr className="border-b text-[#717171] font-thin border-gray-700">
            <th className="py-2">Prosumer Id</th>
            <th className="py-2">Type</th>
            <th className="py-2">Amount (kWh)</th>
            <th className="py-2">Price (₹)</th>
            <th className="py-2">Location</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((trade, index) => (
            <tr
              key={index}
              className="border-b border-gray-700 hover:bg-gray-800"
            >
              <td className="py-2">{trade.prosumerId}</td>
              <td
                className={`py-2 ${
                  trade.type === "Buy" ? "text-[#96E363]" : "text-[#E36262]"
                }`}
              >
                {trade.type}
              </td>
              <td className="py-2">{trade.amount}</td>
              <td className="py-2">{trade.price}</td>
              <td className="py-2">{trade.location}</td>
              <td
                className={`py-2 ${
                  trade.status === "Matched"
                    ? "text-[#96E363]"
                    : "text-[#A8AAA5]"
                }`}
              >
                {trade.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeMatcher;
