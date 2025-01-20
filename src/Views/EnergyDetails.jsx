import price from "../assets/1.png";
import balance from "../assets/2.png";
import energy from "../assets/3.png";
import revenue from "../assets/4.png";
import BarChart from "../Components/Charts/BarChart";
import HeadCards from "../Components/Cards/HeadCards";
import { Bar } from "recharts";
import HalfPieChart from "../Components/Charts/PieChart";
import HorizontalBars from "../Components/Charts/HorizontalBars";

const headCardsData = [
  { heading: "Total Energy Consumed", text: "1122 kWh", icon: balance },
  { heading: "Total Energy Generated", text: "1500 kWh", icon: revenue },
  { heading: "Total Excess Energy", text: "1500 kWh", icon: revenue },
  { heading: "Battery Storage Utilization", text: "662 kWh", icon: energy },
];

const exampleData = [
  { name: "Consumption", value: 45, color: "#FFFEB6" },
  { name: "Battery Storage", value: 30, color: "#A4E100" },
  { name: "Energy Sold Back to Grid", value: 16, color: "#00A700" },
  { name: "Energy Wasted", value: 9, color: "#444" },
];

const sampleData = [
  { time: "1pm", value: 20 },
  { time: "7pm", value: 40 },
  { time: "10pm", value: 35 },
  { time: "1am", value: 30 },
  { time: "4am", value: 45 },
  { time: "7am", value: 32 },
];
const EnergyDetails = () => {
  return (
    <div className="flex flex-col w-[90%] gap-4 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-4">
        {headCardsData.map((item) => (
          <HeadCards
            key={item.heading}
            heading={item.heading}
            text={item.text}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="flex h-[350px] lg:flex-row flex-col w-full gap-4">
        <BarChart
          data={sampleData}
          xKey={"time"}
          yKey={"value"}
          heading={"Energy Consumption Trend"}
        />
        <BarChart
          data={sampleData}
          xKey={"time"}
          yKey={"value"}
          heading={"Energy Generation Trend"}
        />
      </div>
      <div className="flex h-fit lg:flex-row flex-col w-full gap-4">
        <div className="flex flex-1">
          <HalfPieChart
            data={exampleData}
            dataKey="value"
            heading="Excess Energy"
          />
        </div>
        <div className="flex flex-1">
          <HorizontalBars heading="Battery Efficiency" />
        </div>
      </div>
    </div>
  );
};

export default EnergyDetails;
