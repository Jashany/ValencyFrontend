import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const DoubleBarChart = ({ data, xKey, yKey1, yKey2, heading }) => {
  const gradientId1 = "colorGradient1";
  const gradientId2 = "colorGradient2";

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#1e1e1e",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      {heading && (
        <h3
          style={{
            textAlign: "left",
            color: "#fff",
            marginBottom: "10px",
            fontSize: "1.75rem",
            fontWeight: "600",
            marginLeft: "20px",
            marginTop: "0px",
          }}
        >
          {heading}
        </h3>
      )}
      <ResponsiveContainer width="100%" height="85%">
        <RechartsBarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <defs>
            <linearGradient id={gradientId1} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFEB6" stopOpacity={1} />
              <stop offset="100%" stopColor="rgba(255, 254, 197, 0)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id={gradientId2} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#85C1E9" stopOpacity={1} />
              <stop offset="100%" stopColor="rgba(133, 193, 233, 0)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis
            dataKey={xKey}
            tick={{ fill: "#fff" }}
            padding={{ left: 30, right: 30 }}
          />
          <YAxis tick={{ fill: "#fff" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#333",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
            }}
            itemStyle={{ color: "#fff" }}
          />
          {/* <Legend wrapperStyle={{ color: "#fff" }} /> */}
          <Bar
            dataKey={yKey1}
            fill={`#FFFEA0`}
            radius={[5, 5, 0, 0]}
            name="Dataset 1"
          />
          <Bar
            dataKey={yKey2}
            fill={`#333333`}
            radius={[5, 5, 0, 0]}
            name="Dataset 2"
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DoubleBarChart;
