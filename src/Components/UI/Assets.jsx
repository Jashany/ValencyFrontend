const AssetsDetails = () => {
    const data=[
    {
        asset: "Solar",
        capacity: "1000 kW",
        output: "800 kW",
        Efficiency: "80%",
        costPerKwh: "₹ 5",
        revenue: "₹ 4000",
        },
        {
        asset: "Wind",
        capacity: "500 kW",
        output: "400 kW",
        Efficiency: "80%",
        costPerKwh: "₹ 5",
        revenue: "₹ 2000",
        },
        {
        asset: "Battery",
        capacity: "1000 kW",
        output: "800 kW",
        Efficiency: "80%",
        costPerKwh: "₹ 5",
        revenue: "₹ 4000",
        },

    ]
    return (
        <div className="bg-[#1D1D1D] text-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold">Assets Details</h1>
          
          </div>
          <table className="table-auto w-full text-left">
            <thead>
              <tr className=" text-[#717171] font-thin border-gray-700">
                <th className="py-2">Asset</th>
                <th className="py-2">Capacity</th>
                <th className="py-2">Output</th>
                <th className="py-2">Efficiency</th>
                <th className="py-2">Cost/Kwh</th>
                <th className="py-2">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {data.map((trade, index) => (
                <tr
                  key={index}
                  className=" border-gray-700 hover:bg-gray-800"
                >
                    <td className="py-2">{trade.asset}</td>
                    <td className="py-2">{trade.capacity}</td>
                    <td className="py-2">{trade.output}</td>
                    <td className="py-2">{trade.Efficiency}</td>
                    <td className="py-2">{trade.costPerKwh}</td>
                    <td className="py-2">{trade.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
};

export default AssetsDetails;
