import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const GridLoad = ({ heading, upperData, data, xKey, yKey1, yKey2 }) => {
  const gradientId1 = "colorGradient1";
  const gradientId2 = "colorGradient2";

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[90%] mx-auto mb-3">
        {upperData.map((item, index) => (
          <div
            key={index}
            className="text-white p-2 bg-[#292929] rounded-xl flex flex-col gap-3"
          >
            <h3>{item.heading}</h3>
            <p className="font-bold text-xl">{item.text}</p>
          </div>
        ))}
      </div>
      <ResponsiveContainer width="100%" height="65%">
        <RechartsBarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <defs>
            <linearGradient id={gradientId1} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFEB6" stopOpacity={1} />
              <stop
                offset="100%"
                stopColor="rgba(255, 254, 197, 0)"
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient id={gradientId2} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#85C1E9" stopOpacity={1} />
              <stop
                offset="100%"
                stopColor="rgba(133, 193, 233, 0)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis
            dataKey={xKey}
            tick={{ fill: "#fff" }}
            padding={{ left: 30, right: 30 }}
          />
          <YAxis
            tick={{ fill: "#fff" }}
            ticks={[0,500, 1000, 1500]} // Custom Y-axis ticks
            domain={[500, 1500]} // Ensures the Y-axis range covers these ticks
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
          <Bar
            dataKey={yKey1}
            fill={`#FFFEA0`}
            radius={[5, 5, 0, 0]}
            name={yKey1}
          />
          <Bar
            dataKey={yKey2}
            fill={`#333333`}
            radius={[5, 5, 0, 0]}
            name={yKey2}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GridLoad;
