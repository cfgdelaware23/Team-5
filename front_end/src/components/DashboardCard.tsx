import { useState } from "react";
import "../App.css";

interface DashboardCardProps {
    header: string; 
    data: any; 
}

const DashboardCard = (props: DashboardCardProps) => {
    // const [cardHeader, setCardHeader] = useState("Header");
    return (
        <div className="flex justify-center align-middle p-10 m-3 rounded bg-gray-200 w-full">
            {props.header}
            {props.data}
        </div>
    );
}
export default DashboardCard;