import TradeMatcher from "../Components/UI/TradeMatcher";
import { adminHomeData, AdminHomeCards } from "./data.mjs";
import HeadCards from "../Components/Cards/HeadCards";
const AdminHome = () => {
  return (
    <div className="flex flex-col w-[90%] gap-6 mx-auto mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full ">
        {AdminHomeCards.map((item) => (
          <HeadCards
            key={item.heading}
            heading={item.heading}
            text={item.text}
            icon={item.icon}
          />
        ))}
      </div>

      <TradeMatcher data={adminHomeData} />
    </div>
  );
};

export default AdminHome;
