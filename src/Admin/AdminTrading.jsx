import HeadCards from "../Components/Cards/HeadCards";
import EnergyCard from "../Components/Cards/Energycard";
import { TradingCardsData,EnergySources } from "./data.mjs";
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
    <EnergyCard heading={EnergySources.heading} data={EnergySources.data} />
    </div>  
    );
}
 
export default AdminTrading;