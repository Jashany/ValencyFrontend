import AreaChart from "../Components/Charts/AreaChart";
import HeadCards from "../Components/Cards/HeadCards";
import price from "../assets/1.png";
import balance from "../assets/2.png";
import energy from "../assets/3.png";
import revenue from "../assets/4.png";

const headCardsData = [
  { heading: "Current Price", text: "₹10.82/kWh", icon: price },
  { heading: "User Account Balance", text: "1122kWh", icon: balance },
  { heading: "Energy in Battery", text: "662kWh", icon: energy },
  { heading: "Total Energy Generated", text: "1500 kWh", icon: revenue },
];

const Home = () => {
  const sampleData = [
    { time: "1pm", value: 20 },
    { time: "7pm", value: 40 },
    { time: "10pm", value: 35 },
    { time: "1am", value: 30 },
    { time: "4am", value: 45 },
    { time: "7am", value: 32 },
  ];

  return (
    <div className="flex flex-col w-[90%] gap-4 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-4 ">
        {headCardsData.map((item) => (
          <HeadCards
            key={item.heading}
            heading={item.heading}
            text={item.text}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="flex h-[350px] lg:flex-row flex-col w-full gap-4">
        <AreaChart
          data={sampleData}
          xKey={"time"}
          yKey={"value"}
          heading={"Energy Consumption Trend"}
        />
        <AreaChart
          data={sampleData}
          xKey={"time"}
          yKey={"value"}
          heading={"Energy Generation Trend"}
        />
      </div>
      <div className="flex h-[450px] mb-8 w-full">
        <AreaChart
          data={sampleData}
          xKey={"time"}
          yKey={"value"}
          heading={"Market Demand Trend"}
        />
      </div>
    </div>
  );
};

export default Home;
