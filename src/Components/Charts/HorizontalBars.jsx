const HorizontalBars = ({ data, heading }) => {
  const metrics = [
    { label: 'Battery Efficiency', value: 85, maxValue: 100 },
    { label: 'Battery Charge Level', value: 77, maxValue: 100 },
    { label: 'Energy Loss', value: 15, maxValue: 100 },
    { label: 'Battery Health', value: 90, maxValue: 100 },
    // { label: 'Battery Health', value: 90, maxValue: 100 }
  ];
  return (
    <div
      className="bg-PrimaryGrayDark h-full"
      style={{
        width: "100%",
        minHeight: "fit-content",
        height:"100%",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      {heading && (
        <h3
          style={{
            textAlign: "left",
            color: "#fff",
            marginBottom: "10px",
            fontSize: "1.75rem",
            fontWeight: "600",
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
            <div key={metric.label} className="space-y-2 flex">
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalBars;
