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
  