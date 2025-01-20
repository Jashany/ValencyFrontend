const Records = ({data}) => {
    return ( 
        <div className="bg-[#1D1D1D] w-[100%] p-4 rounded-xl">
            <h3 className="text-[#d2d2d2] text-2xl font-semibold">
                Transactions
            </h3>
        
            <table className="w-full table">
                <thead className="text-[#717171] w-full"> 
                    <tr>
                        <th>Date</th>
                        <th>Price<br/>(₹/kWh)</th>
                        <th>Amount<br/>(kWh)</th>
                        <th>Total<br/>(₹)</th>
                    </tr>
                </thead>
                <tbody className="text-white">
                    {data.map((record,index) => (
                        <tr key={index} className="bg-[#262626] rounded-lg text-center p-2">
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