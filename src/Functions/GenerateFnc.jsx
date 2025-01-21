export const generateEnergyConsumption = (xKey = "time") => {
    return {
      [xKey]: new Date().toLocaleTimeString(),
      Consumption: parseFloat((15 + Math.random() * 45).toFixed(0)),
    };
  };

  export const generateEnergyGeneration = (xKey = "time") => {
    return {
      [xKey]: new Date().toLocaleTimeString(),
      energyGeneration: parseFloat((15 + Math.random() * 30).toFixed(0)),
    };
  };
  
  export const generateMarketDemand = (xKey = "time") => {
    return {
      [xKey]: new Date().toLocaleTimeString(),
      marketDemand: parseFloat((Math.random() * 60).toFixed(2)),
    };
  };

  
  export const generatePricePrediction = (xKey = "time") => {
    return {
      [xKey]: new Date().toLocaleTimeString(),
      pricePrediction: parseFloat((10 + Math.random() * 2).toFixed(2)),
    };
  };
  
  export const generatePriceAndDemand = (xKey = "time") => {
    return {
      [xKey]: new Date().toLocaleTimeString(),
      price: parseFloat((300 + Math.random() * 500).toFixed(2)), // Between 200 and 700
      demand: parseFloat((300 + Math.random() * 500).toFixed(2)), // Between 200 and 700
    };
  };

  export const generateLoadHistoryAndForecast = (xKey = "time") => {
    return {
      [xKey]: new Date().toLocaleTimeString(),
      loadHistory: parseFloat((100 + Math.random() * 200).toFixed(2)), // Between 100 and 300
      activeLoad: parseFloat((150 + Math.random() * 300).toFixed(2)),  // Between 150 and 450
      forecastLoad: parseFloat((200 + Math.random() * 300).toFixed(2)), // Between 200 and 500
    };
  };
  