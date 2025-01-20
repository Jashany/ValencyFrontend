import React from "react";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const HalfPieChart = ({ data, dataKey, heading,underKeyData }) => {
  //sum of data.value - the last index
  const totalPercentage = data.reduce((acc, curr, index) => {
    if (index === data.length - 1) {
      return acc;
    }
    return acc + curr.value;
  }, 0);
  return (
    <div
      className="bg-PrimaryGrayDark"
      style={{
        width: "100%",
        height: "fit-content",
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
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          marginTop: "30px",
        }}
      >
        <ResponsiveContainer width="100%" height="100%" minHeight={"300px"}>
          <RechartsPieChart>
            <Pie
              data={data}
              dataKey={dataKey}
              scale={2}
              startAngle={180}
              endAngle={0}
              innerRadius={120}
              outerRadius={150}
              paddingAngle={0}
              cornerRadius={2}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <text
              x="50%"
              y="35%"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                fill: "#fff",
                width: "30px",
                wordBreak:"break-all"
              }}
            >
              {underKeyData ? `${underKeyData}`  : totalPercentage}
            </text>
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
      <div
        className={`grid ${
          data.length === 4
            ? "grid-cols-2 md:grid-cols-2"
            : "grid-cols-3 md:grid-cols-3"
        } gap-4 mt-[-100px]`}
      >
        {data.map((entry, index) => (
          <div className="bg-[#292929] flex flex-col gap-6 p-4 rounded-lg" key={`cell-${index}`}>
            <div className="flex text-white gap-2 items-center">
              <div style={{
                backgroundColor: entry.color,
                width: "20px",
                height: "20px",
                borderRadius: "4px",
              }}></div>
              <p>{entry.name}</p>
            </div>
            <p className="text-2xl font-bold text-white">{entry.value || entry.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HalfPieChart;
