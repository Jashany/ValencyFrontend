import React, { useState, useEffect } from "react";
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DoubleAreaChart = ({ data: initialData, xKey, yKeys, heading }) => {
  const [data, setData] = useState(initialData || []);
  const gradientIds = ["colorGradient1", "colorGradient2"]; // Gradient IDs for both areas

  useEffect(() => {
    const addRandomData = () => {
      setData((prevData) => {
        const nextIndex = prevData.length + 1;
        const lastValues = yKeys.map(
          (yKey) => prevData[prevData.length - 1]?.[yKey] || 50
        ); // Default to 50 if no data exists

        const newValues = lastValues.map(
          (lastValue) =>
            Math.max(0, Math.min(1000, lastValue + (Math.random() * 200 - 100))) // Change by ±100, keeping within 0-1000
        );

        const newEntry = { [xKey]: nextIndex };
        yKeys.forEach((yKey, i) => (newEntry[yKey] = newValues[i]));

        // Delete the oldest data point
        if (prevData.length > 10) prevData.shift();
        return [...prevData, newEntry];
      });
    };

    // Add random data every 2 seconds
    const intervalId = setInterval(addRandomData, 2000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [xKey, yKeys]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#1e1e1e",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      {heading && (
        <h3
          style={{
            textAlign: "left",
            color: "#fff",
            marginBottom: "20px",
            fontSize: "1.75rem",
            fontWeight: "600",
            marginLeft: "20px",
            marginTop: "10px",
          }}
        >
          {heading}
        </h3>
      )}
      <ResponsiveContainer width="95%" height="80%">
        <RechartsAreaChart
          data={data}
          margin={{ top: 20, right: 10, left: 10, bottom: 10 }}
        >
          <defs>
            <defs>
              <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFEB6" stopOpacity={1} />
                <stop
                  offset="100%"
                  stopColor="rgba(255, 254, 197, 0)"
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="rgba(51, 51, 51, 01)"
                  stopOpacity={1}
                />
                <stop
                  offset="100%"
                  stopColor="rgba(62, 62, 62, 0.5)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis
            dataKey={xKey}
            tick={{ fill: "#aaa" }}
            padding={{ left: 30, right: 30 }}
          />
          <YAxis tick={{ fill: "#aaa" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#333",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
            }}
            itemStyle={{ color: "#fff" }}
          />
          {/* First Area */}
          <Area
            type="monotone"
            dataKey="value1"
            stroke="#FFFEB6"
            strokeWidth={2}
            fill="url(#gradient1)"
          />
          <Area
            type="monotone"
            dataKey="value2"
            stroke="#FFF"
            strokeWidth={2}
            fill="url(#gradient2)"
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DoubleAreaChart;
