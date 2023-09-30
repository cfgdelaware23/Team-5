import "../App.css";
import DashboardCard from "./DashboardCard";

const DashboardGrid = () => {
    return (
        <div className="grid col-span-1">
            <DashboardCard header='Test' data='' /> 
            <DashboardCard header='Test' data='' /> 
            <DashboardCard header='Test' data='' /> 
            <DashboardCard header='Test' data='' /> 
        </div>
    );
}

export default DashboardGrid;