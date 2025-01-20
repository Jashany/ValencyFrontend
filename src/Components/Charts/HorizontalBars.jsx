const HorizontalBars = ({ data, heading }) => {
  const metrics = [
    { label: "Battery Efficiency", value: 85, maxValue: 100 },
    { label: "Battery Charge Level", value: 77, maxValue: 100 },
    { label: "Energy Loss", value: 15, maxValue: 100 },
    { label: "Battery Health", value: 90, maxValue: 100 },
    { label: "Energy Loss", value: 15, maxValue: 100 },
    // { label: 'Battery Health', value: 90, maxValue: 100 }
  ];
  return (
    <div
      className="bg-PrimaryGrayDark h-full"
      style={{
        width: "100%",
        minHeight: "fit-content",
        height: "100%",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      {heading && (
        <h3
          style={{
            textAlign: "left",
            color: "#d2d2d2",
            marginBottom: "10px",
            fontSize: "1.5rem",
            fontWeight: "700",
            marginLeft: "20px",
            marginTop: "0px",
          }}
        >
          {heading}
        </h3>
      )}
      <div>
        <div className="space-y-6">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="space-y-2 h-[60px] flex items-center gap-4"
            >
              <p className="w-[20%] text-sm text-[#FFFFFFCC]">{metric.label}</p>
              <div className="flex flex-col w-[70%] space-x-2">
                <div
                  className="bg-[#FFFEA0] ml-[8px] h-4 rounded-r-md h-[20px]"
                  style={{
                    width: `${(metric.value / metric.maxValue) * 100}%`,
                  }}
                ></div>
                <div className="h-[1px] w-full border-b-2 border-white border-dashed">

                </div>
                {/* <p className="text-white">{metric.value}%</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalBars;
