import HeadCards from "../Components/Cards/HeadCards";
import ActiveAlerts from "../Components/UI/ActiveALert";
import { AdminGridCards,sampleAlerts,DoubleAreaChartData,DoubleBarGridData} from "./data.mjs";
import DoubleBarChart from "../Components/Charts/DoubleBarChart";
import DoubleAreaChart from "../Components/Charts/DoubleAreaChart";
const AdminGrid = () => {
    return ( 
        <div className="flex flex-col w-[90%] gap-6 mx-auto mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full ">
                {AdminGridCards.map((item) => (
                    <HeadCards
                        key={item.heading}
                        heading={item.heading}
                        text={item.text}
                        icon={item.icon}
                        
                    />
                ))}
            </div>
            <div className="flex h-[350px] lg:flex-row flex-col w-full gap-6">
                <DoubleAreaChart data={DoubleAreaChartData} xKey={"time"} yKeys={["value1", "value2"]}
                heading={"Energy Consumption Trend"} />
                <DoubleBarChart data={DoubleBarGridData} xKey={"zone"} yKeys={["Capacity", "Current Load"]} heading={"Zone Status"} />
            </div>
            <ActiveAlerts alerts={sampleAlerts} />
        </div>
     );
}
 
export default AdminGrid;