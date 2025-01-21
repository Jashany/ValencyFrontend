import HeadCards from "../Components/Cards/HeadCards";
import ActiveAlerts from "../Components/UI/ActiveALert";
import {
  AdminGridCards,
  sampleAlerts,
  DoubleAreaChartData,
  DoubleBarGridData,
} from "./data.mjs";
import DoubleBarChart from "../Components/Charts/DoubleBarChart";
import DoubleAreaChart from "../Components/Charts/DoubleAreaChart";
import { generateLoadHistoryAndForecast } from "../Functions/GenerateFnc";
const AdminGrid = () => {
  return (
    <div className="flex flex-col w-[90%] gap-4 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-4">
        {AdminGridCards.map((item) => (
          <HeadCards
            key={item.heading}
            heading={item.heading}
            text={item.text}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="flex h-[350px] lg:flex-row flex-col w-full gap-4">
        <DoubleAreaChart
          generateData={generateLoadHistoryAndForecast}
          xKey={"time"}
          yKeys={["activeLoad", "forecastLoad"]} // Matching keys
          heading={"Load History"}
        />
        <DoubleBarChart
          data={DoubleBarGridData}
          xKey={"zone"}
          yKey1={"capacity"}
          yKey2={"current"}
          heading={"Zone Status"}
        />
      </div>
      <ActiveAlerts alerts={sampleAlerts} />
    </div>
  );
};



export default AdminGrid;
