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

const BarChart = ({ data, xKey, yKey, heading }) => {
  const gradientId = "colorGradient";

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
            color: "#d2d2d2",
            marginBottom: "10px",
            fontSize: "1.5rem",
            fontWeight: "700",
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
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="100%" stopColor="#FFFEB6" stopOpacity={1} />
              <stop
                offset="100%"
                stopColor="rgba(255, 254, 197, 0)"
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
          <YAxis tick={{ fill: "#fff" }} />
          <Tooltip
                contentStyle={{
                  borderRadius: "8px 8px 8px 0px",
                  border: "0.5px solid #3D3D3D",
                  background: "linear-gradient(77deg, rgba(47, 47, 47, 0.80) 21.25%, rgba(44, 44, 44, 0.40) 81.06%)",
                  backdropFilter: "blur(16px)",
                  color: "#fff",
                }}
                // cursor={false}
                cursor={{ fill: "#D9D9D91A" }}

                itemStyle={{
                  background: "linear-gradient(90deg, #AAE6E7 0%, #95E362 100%)",  
                  WebkitBackgroundClip: "text", 
                  color: "transparent", 
                  fontSize: "1rem",
                  fontWeight: "700",
                }}
          />
          <Bar
           
            dataKey={yKey}
            fill={`url(#${gradientId})`}
            radius={[5, 5, 0, 0]}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
