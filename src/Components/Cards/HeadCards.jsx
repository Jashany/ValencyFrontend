

const HeadCards = ({heading,text,icon}) => {
    return ( 
        <div className="bg-[#FFFEA0] flex flex-col justify-between min-h-[120px] rounded-xl p-4">
            <div>
            {heading}
            </div>
            <div className="flex items-center justify-between">
                <p className="text-xl font-bold">
                    {text}
                </p>
                <img src={icon} className="h-[25px]" alt="" />
            </div>
        </div>
     );
}
 
export default HeadCards;