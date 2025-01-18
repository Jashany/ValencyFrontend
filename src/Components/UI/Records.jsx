const Records = ({data}) => {
    return ( 
        <div className="bg-[#1D1D1D] w-[100%] p-4 rounded-xl">
            <h3 className="text-white text-2xl">
                Transcations
            </h3>
        <table className="w-full">
            <thead className="text-[#717171] w-full text-xs"> 
                <tr>
                    <th>Date</th>
                    <th>Price (₹/kWh)</th>
                    <th>Amount (kWh)</th>
                    <th>Total (₹)</th>
                </tr>
            </thead>
            <tbody className="text-white">
                {data.map((record,index) => (
                    <tr key={index} className="bg-[#3D3C3C33] rounded-sm text-center p-2">
                        <td>{record.date}</td>
                        <td>{record.pricePerUnit}</td>
                        <td>{record.amount}</td>
                        <td>{record.total}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
     );
}
 

export default Records;