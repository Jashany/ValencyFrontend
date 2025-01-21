import HeadCards from "../Components/Cards/HeadCards";
import EnergyCard from "../Components/Cards/Energycard";
import { TradingCardsData, EnergySources } from "./data.mjs";
import DoubleAreaChart from "../Components/Charts/DoubleAreaChart";
import { generatePriceAndDemand } from "../Functions/GenerateFnc";
import DoubleBarChart from "../Components/Charts/DoubleBarChart";
import GridLoad from "../Components/Charts/Grid";
import { Grid } from "lucide-react";

const TradingData = {
  heading: "Grid Status",
  upperData: [
    {
      heading: "Stability",
      text: "81.2%",
    },
    {
      heading: "Current Load",
      text: "765 kW",
    },
    {
      heading: "Capacity",
      text: "1000 kW",
    },
  ],
  data: [
    {
      grid: "Grid Load",
      current: 765,
      capacity: 1000,
    },
  ],
};

const AdminTrading = () => {
  return (
    <div className="flex flex-col w-[90%] gap-4 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-4">
        {TradingCardsData.map((item) => (
          <HeadCards
            key={item.heading}
            heading={item.heading}
            text={item.text}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="flex min-h-[350px] max-h-[500px] lg:flex-row flex-col w-full gap-4">
        <div className="flex flex-1">
          <DoubleAreaChart
            generateData={generatePriceAndDemand}
            xKey={"time"}
            yKeys={["price", "demand"]} // Matching keys
            heading={"Price and Demand"}
          />
        </div>
        <div className="flex flex-1">
          <GridLoad
            upperData={TradingData.upperData}
            data={TradingData.data}
            heading={TradingData.heading}
            xKey={"grid"}
            yKey1={"current"}
            yKey2={"capacity"}
          />
        </div>
      </div>
      <EnergyCard heading={EnergySources.heading} data={EnergySources.data} />
    </div>
  );
};

export default AdminTrading;
