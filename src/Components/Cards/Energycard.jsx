const EnergyCard = ({ heading, data }) => {
  return (
    <div className="bg-[#1D1D1D] p-4 rounded-xl flex flex-col gap-4 text-white">
      <h1 className="text-white text-2xl">{heading}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full ">
        {data.map((item) => (
          <div className="bg-[#292929] flex flex-col justify-between min-h-[80px] rounded-xl p-4">
            <div>{item.heading}</div>
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">{item.text}</p>
              <img  src={item.icon} className="h-[25px] text-white" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnergyCard;
