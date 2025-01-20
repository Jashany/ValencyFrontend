import React from "react";

const ActiveAlerts = ({ alerts }) => {
  // Map alert types to background colors
  const alertStyles = {
    Critical: "bg-[#F46D6C12]",
    Warning: "bg-[#FFFEA012]",
    Info: "bg-[#96E36312]",
  };

  return (
    <div className="bg-[#1e1e1e] text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-[#D2D2D2] text-2xl font-semibold mb-5">Active Alerts</h2>
      <div className="space-y-3">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg flex justify-between items-center ${alertStyles[alert.type]}`}
          >
            <span>{alert.message}</span>
            <span className="text-gray-400 text-sm">{alert.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveAlerts;
