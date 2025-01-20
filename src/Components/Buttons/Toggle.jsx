import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ToggleButton = () => {
  const [isBuyer, setIsBuyer] = useState(true);
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsBuyer(!isBuyer);

    if(isBuyer){
        navigate("/dashboard/sell");
    }else{
        navigate("/dashboard/buy");
    }
  };

  return (
    <div
      className="flex items-center justify-between w-52 h-10 bg-[#262626] shadow-lg rounded-lg cursor-pointer transition-colors duration-300"
      onClick={toggleMode}
    >
      <div
        className={`flex items-center justify-center w-1/2 h-10 rounded-lg shadow-md transform transition-transform duration-300
            ${
                isBuyer ? "translate-x-0 bg-PrimaryBlack buyToggleShadow" : "translate-x-[104px] bg-PrimaryBlack sellToggleShadow"
            }`}
      >
        {isBuyer ? (
            <div>
                <p className="darkGreenGradient">Buy</p>
            </div>
        ) : (
            <div>
                <p className="darkRedGradient">Sell</p>
            </div>
        )}
      </div>

          {isBuyer ? (
              <div className="flex w-1/2 justify-center">
                  <p className="text-[#4b4b4b]">Sell</p>
              </div>
          ) : (
              <div className="flex w-1/2 justify-center -translate-x-[104px]">
                  <p className="text-[#4b4b4b]">Buy</p>
              </div>
          )}
  
    </div>
  );
};

export default ToggleButton;
