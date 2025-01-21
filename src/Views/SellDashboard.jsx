import HeadCards from "../Components/Cards/HeadCards";
import price from "../assets/1.png";
import balance from "../assets/2.png";
import energy from "../assets/3.png";
import revenue from "../assets/4.png";
import AreaChart from "../Components/Charts/AreaChart";
import Transcation from "../Components/UI/Transaction";
import BarChart from "../Components/Charts/BarChart";
import Records from "../Components/UI/Records";
import DoubleBarChart from "../Components/Charts/DoubleBarChart";
import { generateEnergyConsumption,generateEnergyGeneration } from "../Functions/GenerateFnc";
import { Area, Bar } from "recharts";

const consumptionHistory = [
  { date: "7 Jan", consumption: 90 },
  { date: "8 Jan", consumption: 120 },
  { date: "9 Jan", consumption: 80 },
  { date: "10 Jan", consumption: 100 },
];

const energyPurchased = [
  { date: "7 Jan", energy: 140, price: 11.0 },
  { date: "8 Jan", energy: 150, price: 11.25 },
  { date: "9 Jan", energy: 110, price: 10.8 },
  { date: "10 Jan", energy: 130, price: 11.0 },
];

const pricePredictions = [
  { time: "7pm", price: 3 },
  { time: "10pm", price: 4.2 },
  { time: "1am", price: 8.5 },
  { time: "4am", price: 5.8 },
  { time: "7am", price: 9.25 },
  { time: "10am", price: 11.0 },
  { time: "1pm", price: 6.75 },
  { time: "4pm", price: 4.5 },
  { time: "7pm", price: 7.2 },
];

const transactions = [
    { date: "7 Jan", pricePerUnit: 11.0, amount: 40, total: 440.0 },
    { date: "7 Jan", pricePerUnit: 11.0, amount: 40, total: 440.0 },
    { date: "7 Jan", pricePerUnit: 11.0, amount: 40, total: 440.0 },
    { date: "7 Jan", pricePerUnit: 11.0, amount: 40, total: 440.0 },
    { date: "7 Jan", pricePerUnit: 11.0, amount: 40, total: 440.0 },
  ];
  

const headCardsData = [
  { heading: "Avg. Daily Energy Required", text: "100 kWh", icon: price },
  { heading: "Current Price", text: "₹10.82/kWh", icon: balance },
];

const SellDashboard = () => {
  return (
    <div className="flex flex-col w-[90%] gap-6 mx-auto mt-6">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full ">
        {headCardsData.map((item) => (
          <HeadCards
            key={item.heading}
            heading={item.heading}
            text={item.text}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="flex min-h-[350px] lg:flex-row flex-col w-full gap-6">
        <div className="flex w-[70%] gap-6">
          <AreaChart
            data={pricePredictions}
            xKey={"time"}
            generateData={generateEnergyConsumption}
            yKey={"price"}
            heading={"Price Predictions"}
          />
          <AreaChart 
            data={pricePredictions}
            xKey={"time"}
            generateData={generateEnergyGeneration}
            yKey={"price"}
            heading={"Energy Generation Trend"}
            />
        </div>
        <div className="flex w-[30%]">
          <Transcation />
        </div>
      </div>
      <div className="flex min-h-[350px] mb-8 w-full gap-6">
        <div className="flex w-[70%] h-[400px] gap-6">
          <BarChart
            data={consumptionHistory}
            xKey={"date"}
            yKey={"consumption"}
            heading={"Energy Sold"}
          />
          <BarChart
            data={energyPurchased}
            xKey={"date"}
            yKey={"energy"}
            heading={"Energy Purchased"}
            />
        </div>
        <div className="flex w-[30%]">
            <Records data={transactions} />
        </div>
      </div>
    </div>
  );
};

export default SellDashboard;
