import React, { useState } from "react";
import dark from '../../assets/darkMode.png'
import light from '../../assets/lightMode.png'
const ShiftButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex items-center justify-between w-[4.5rem] h-10 rounded-md p-1 cursor-pointer transition-colors duration-300 ${
        isDarkMode ? "bg-[#222222]" : "bg-PrimaryWhiteText"
      }`}
      onClick={toggleMode}
    >
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-md bg-PrimaryBlack shadow-md transform transition-transform duration-300
            ${
                isDarkMode ? "bg-[#222222]" : "bg-PrimaryWhiteText"
            }
             ${
          isDarkMode ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {isDarkMode ? (
            <img  src={dark} alt="" />
        ) : (
            <img src={light} alt="" />
        )}
      </div>
    </div>
  );
};

export default ShiftButton;
