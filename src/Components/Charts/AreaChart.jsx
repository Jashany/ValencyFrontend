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

const AreaChart = ({ xKey = "time", heading, generateData }) => {
  const [data, setData] = useState([]);
  const gradientId = "colorGradient";

  // Function to calculate dynamic Y-axis domain and ticks
  const calculateYAxisDomainAndTicks = (data) => {
    if (data.length === 0) return { domain: [0, 100], ticks: [0, 2, 4, 6, 8, 10] }; // Default for no data
    
    const yValues = data.map((item) => item[Object.keys(item)[1]]);
    const min = Math.min(...yValues);
    const max = Math.max(...yValues);

    let domain = [min - 5, max + 5]; // Add a small margin around the min and max

    // Determine if the range stays between 8 and 14, and adjust ticks accordingly
    let ticks = [];
    if (min >= 8 && max <= 14) {
      ticks = [6, 8, 10, 12, 14]; // Set ticks starting from 6 in this range
    } else {
      // Otherwise, use a regular interval of 2
      ticks = Array.from({ length: Math.ceil((max - min) / 2) + 1 }, (_, i) => (min + i * 2).toFixed(0));}

    return { domain, ticks };
  };

  useEffect(() => {
    console.log('generateData', generateData); // Debugging log

    if (typeof generateData !== 'function') {
      console.error('generateData is not a function');
      return; // Return early if generateData isn't a function
    }

    // Initialize with 6 data points
    const initialData = Array.from({ length: 5 }, generateData);
    setData(initialData);

    // Update data every 4 seconds
    const intervalId = setInterval(() => {
      setData((prevData) => {
        const newData = [...prevData, generateData()];
        if (newData.length > 5) newData.shift(); // Keep only the last 6 entries
        return newData;
      });
    }, 4000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [xKey, generateData]);

  const { domain, ticks } = calculateYAxisDomainAndTicks(data); // Get dynamic Y-axis domain and ticks

  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#1e1e1e", borderRadius: "10px", padding: "10px" }}>
      {heading && (
        <h3 style={{ textAlign: "left", color: "#d2d2d2", marginBottom: "20px", fontSize: "1.5rem", fontWeight: "700", marginLeft: "20px", marginTop: "10px" }}>
          {heading}
        </h3>
      )}
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
          <YAxis
            tick={{ fill: "#aaa" }}
            domain={domain} // Set dynamic domain
            ticks={ticks} // Set dynamic ticks
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#00000080",
              backdropFilter: "blur(20px)",
              border: "0.5px solid #3D3D3D",
              borderRadius: "8px",
              color: "#fff",
            }}
            labelStyle={{ color: "#8f8f8f", textAlign: "center" }}
            itemStyle={{ color: "#fff" }}
          />
          <Area
            type="monotone"
            dataKey={Object.keys(data[0] || {})[1]} // Dynamically set the key
            stroke="#FFFEB6"
            strokeWidth={2}
            fill={`url(#${gradientId})`}
            animationDuration={4000}
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChart;
