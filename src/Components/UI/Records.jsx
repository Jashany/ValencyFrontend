const Records = ({ data }) => {
    return (
        <div className="bg-[#1D1D1D] w-full p-4 rounded-xl">
            <h3 className="text-white text-2xl mb-4">
                Transactions
            </h3>
            {/* Header */}
            <div className="grid grid-cols-4 text-[#717171] text-xs text-center font-medium border-b border-[#3D3D3D] pb-2 mb-2">
                <div>Date</div>
                <div>Price</div>
                <div>Amount</div>
                <div>Total (₹)</div>
            </div>
            {/* Body */}
            <div className="grid gap-y-2">
                {data.map((record, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-4 text-center bg-[#3D3C3C33] text-white py-2 px-2 rounded-md"
                    >
                        <div>{record.date}</div>
                        <div>{record.pricePerUnit}</div>
                        <div>{record.amount}</div>
                        <div>{record.total}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Records;
