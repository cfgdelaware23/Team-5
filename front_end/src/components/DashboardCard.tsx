import { useState } from "react";
import "../App.css";

interface DashboardCardProps {
    header: string; 
    data: any; 
}

const DashboardCard = (props: DashboardCardProps) => {
    // const [cardHeader, setCardHeader] = useState("Header");
    return (
        <div className="bg-gray-200 w-full rounded p-2">
            <span className="p-2 font-bold sm:text-lg lg:text-2xl">{props.header}</span>
            <div className="flex justify-center align-middle p-10">
                {props.data}
            </div>
        </div>
    );
}
export default DashboardCard;