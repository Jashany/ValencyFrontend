import price from "../assets/1.png";
import balance from "../assets/2.png";
import energy from "../assets/3.png";
import revenue from "../assets/4.png";

export const adminHomeData = [
    { prosumerId: "B1", type: "Buy", amount: 192.33, price: 962.24, location: "Zone 2", status: "Matched" },
    { prosumerId: "S2", type: "Sell", amount: 16.44, price: 865.86, location: "Zone 3", status: "Matched" },
    { prosumerId: "B3", type: "Buy", amount: 7.59, price: 910.68, location: "Zone 2", status: "Pending" },
    { prosumerId: "S4", type: "Sell", amount: 24.98, price: 927.94, location: "Zone 2", status: "Matched" },
    { prosumerId: "B5", type: "Buy", amount: 18.27, price: 941.05, location: "Zone 3", status: "Pending" },
    { prosumerId: "S6", type: "Sell", amount: 23.29, price: 913.0, location: "Zone 1", status: "Matched" },
    { prosumerId: "B7", type: "Buy", amount: 8.01, price: 944.54, location: "Zone 1", status: "Pending" },
    { prosumerId: "S8", type: "Buy", amount: 25.2, price: 901.38, location: "Zone 2", status: "Pending" },
    { prosumerId: "B9", type: "Sell", amount: 135.54, price: 904.7, location: "Zone 1", status: "Matched" },
    { prosumerId: "B10", type: "Buy", amount: 9.67, price: 930.26, location: "Zone 3", status: "Pending" },
  ];
  
export const AdminHomeCards = [
    { heading: "Energy Sold Today", text: "154.3 kWh", icon: balance },
    { heading: "Revenue Earned Today", text: "₹1020", icon: revenue },
    { heading: "Current Grid Demand", text: "4320 MW", icon: revenue },
    { heading: "Carbon Savings", text: "220 Kg CO2", icon: energy },
  ];

export const  AdminGridCards = [
    { heading: "Current Load", text: "744 kW", icon: balance },
    { heading: "Grid Stability", text: "90.3%", icon: revenue },
    { heading: "Active Zones", text: "3", icon: revenue },
    { heading: "Active Alerts", text: "5", icon: energy },
  ];

  export const sampleAlerts = [
    { type: "Critical", message: "Zone 2 approaching capacity", time: "2 mins ago" },
    { type: "Warning", message: "Grid Stability Fluctuation detected", time: "5 mins ago" },
    { type: "Info", message: "Routine maintenance required", time: "15 mins ago" },
    { type: "Critical", message: "Power outage in Zone 1", time: "1 min ago" },
    { type: "Warning", message: "High voltage detected in Zone 3", time: "10 mins ago" },

  ];
  

  export const DoubleAreaChartData = [
    { time: "7pm", value1: 500, value2: 480 },
    { time: "8pm", value1: 520, value2: 510 },
    { time: "9pm", value1: 490, value2: 530 },
    { time: "10pm", value1: 530, value2: 510 },
    { time: "11pm", value1: 550, value2: 540 },
  ];
  
  export const DoubleBarGridData = [
    { zone: "1", capacity: 140, current: 120 },
    { zone: "2", capacity: 150, current: 100 },
    { zone: "3", capacity: 110, current: 80 },
  ];
  

