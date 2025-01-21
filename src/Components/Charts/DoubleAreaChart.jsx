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

const DoubleAreaChart = ({
  xKey = "time",
  yKeys,
  heading,
  generateData, // Function to generate real-time data
}) => {
  const [data, setData] = useState([]);

  // Function to calculate dynamic Y-axis domain and ticks
  const calculateYAxisDomainAndTicks = (data) => {
    if (data.length === 0) return { domain: [0, 12], ticks: [10, 11, 12] }; // Default for no data

    // Collect all y-values from the provided yKeys
    const yValues = data.flatMap((item) => yKeys.map((key) => item[key]));
    const min = Math.min(...yValues);
    const max = Math.max(...yValues);

    // Calculate domain with a small margin
    let domain = [Math.floor(min - 1), Math.ceil(max + 1)];

    // Generate ticks as whole numbers based on the min and max
    let ticks = Array.from(
      { length: domain[1] - domain[0] + 1 },
      (_, i) => domain[0] + i
    );

    return { domain, ticks };
  };

  // Initialize and update data dynamically
  useEffect(() => {
    if (typeof generateData !== "function") {
      console.error("generateData must be a function");
      return;
    }

    // Initialize with 5 data points
    const initialData = Array.from({ length: 5 }, generateData);
    setData(initialData);

    // Update data every 1 second
    const intervalId = setInterval(() => {
      setData((prevData) => {
        const newData = [...prevData, generateData()];
        if (newData.length > 10) newData.shift(); // Keep only the last 10 entries
        return newData;
      });
    }, 4000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [generateData]);

  const { domain, ticks } = calculateYAxisDomainAndTicks(data); // Get dynamic Y-axis domain and ticks

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
            color: "#d2d2d2",
            marginBottom: "20px",
            fontSize: "1.5rem",
            fontWeight: "700",
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
                stopColor="rgba(51, 51, 51, 1)"
                stopOpacity={1}
              />
              <stop
                offset="100%"
                stopColor="rgba(62, 62, 62, 0.5)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis
            dataKey={xKey}
            tick={{ fill: "#aaa" }}
            padding={{ left: 30, right: 30 }}
          />
          <YAxis
            tick={{ fill: "#aaa" }}
            domain={domain} // Set dynamic domain
            ticks={ticks} // Set dynamic ticks
          />
          <Tooltip
            contentStyle={{
              borderRadius: "8px 8px 8px 0px",
              border: "0.5px solid #3D3D3D",
              background:
                "linear-gradient(77deg, rgba(47, 47, 47, 0.80) 21.25%, rgba(44, 44, 44, 0.40) 81.06%)",
              backdropFilter: "blur(16px)",
              color: "#fff",
            }}
            itemStyle={{
              background: "linear-gradient(90deg, #AAE6E7 0%, #95E362 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontSize: "1rem",
              fontWeight: "700",
            }}
          />
          {/* First Area */}
          <Area
            type="monotone"
            dataKey={yKeys[0]}
            stroke="#FFFEB6"
            strokeWidth={2}
            fill="url(#gradient1)"
          />
          {/* Second Area */}
          <Area
            type="monotone"
            dataKey={yKeys[1]}
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
