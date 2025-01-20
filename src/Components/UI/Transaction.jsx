import { useLocation } from "react-router-dom";

const Transcation = () => {
  const location = useLocation();

  const isbuy = location.pathname === "/dashboard/buy";

  return (
    <div className="text-[#F4F4F6] transcation">
      <form className="flex flex-col gap-4">
        <label>
          Amount of Energy (kWh)
          <input type="Number" name="energy" placeholder="0" />
        </label>
        <label>
          Max Price (₹/kWh)
          <input type="Number" name="price" placeholder="0" />
        </label>
        <label>
          Time Window
          <select>
            <option value="0.5">30 minutes</option>
            <option value="1">1 hour</option>
            <option value="1.5">1.5 hours</option>
            <option value="2">2 hours</option>
            <option value="2.5">2.5 hours</option>
            <option value="3">3 hours</option>
            <option value="4">4 hours</option>
            <option value="5">5 hours</option>
            <option value="6">6 hours</option>
            <option value="7">7 hours</option>
            <option value="8">8 hours</option>
            <option value="9">9 hours</option>
          </select>
        </label>
        <div className="flex justify-between">
          <p>Total</p>
          <p>₹12.00</p>
        </div>
        <button className={isbuy ? "buttonBuy" : "buttonOffer"}>
          <p>{isbuy ? "Place Order" : "Place Offer"}</p>
        </button>
      </form>
    </div>
  );
};

export default Transcation;
