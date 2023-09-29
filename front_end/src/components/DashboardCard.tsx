import { useState } from "react";
import "../App.css";

interface DashboardCardProps {
    header: string; 
    data: any; 
}

const DashboardCard = (props: DashboardCardProps) => {
    // const [cardHeader, setCardHeader] = useState("Header");
    return (
        <div className="p-3 bg-gray-200">
            {props.header}
            {props.data}
        </div>
    );
}
export default DashboardCard;