import HeadCards from "../Components/Cards/HeadCards";
import {
  PortfolioHeadCards,
  PortfoliobarData,
  assetDistributionData,
} from "./data.mjs";
import AssetsDetails from "../Components/UI/Assets";

import DoubleBarChart from "../Components/Charts/DoubleBarChart";
import HalfPieChart from "../Components/Charts/PieChart";
const AdminPortfolio = () => {
  return (
    <div className="flex flex-col w-[90%] gap-6 mx-auto mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full ">
        {PortfolioHeadCards.map((item) => (
          <HeadCards
            key={item.heading}
            heading={item.heading}
            text={item.text}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="flex min-h-[350px] lg:flex-row flex-col w-full gap-6">
        <div className="flex flex-1">
          <HalfPieChart
            data={assetDistributionData.sources}
            dataKey={"percentage"}
            heading={"Asset Distribution"}
            underKeyData={assetDistributionData.totalGenerated}
          />
        </div>
        <div className="flex flex-1">
          <DoubleBarChart
            data={PortfoliobarData}
            xKey={"asset"}
            yKey1={"currentOutput"}
            yKey2={"capacity"}
            heading={"Asset Performance"}
          />
        </div>
      </div>
      <AssetsDetails />
    </div>
  );
};

export default AdminPortfolio;
