import React from "react";
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaChart = ({ data, xKey, yKey, heading }) => {
  const gradientId = "colorGradient";
  console.log(data);
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#1e1e1e", borderRadius: "10px", padding: "10px" }}>
      {heading && <h3 style={{ textAlign: "left", color: "#fff", marginBottom: "20px",fontSize:"1.75rem",fontWeight:"600",marginLeft:"20px",marginTop:"10px" }}>{heading}</h3>}
      <ResponsiveContainer width="95%" height="80%">
        <RechartsAreaChart data={data} margin={{ top: 20, right: 10, left: 10, bottom: 10 }}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFEB6" stopOpacity={1} />
              <stop offset="100%" stopColor="rgba(255, 254, 197, 0)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey={xKey} tick={{ fill: "#aaa" }} padding={{ left: 30, right: 30 }} />
          <YAxis tick={{ fill: "#aaa" }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#333", border: "none", borderRadius: "8px", color: "#fff" }}
            itemStyle={{ color: "#fff" }}
          />
          <Area
            type="monotone"
            dataKey={yKey}
            stroke="#FFFEB6"
            strokeWidth={2}
            fill={`url(#${gradientId})`}
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChart;
