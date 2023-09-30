import "../App.css";
import DashboardCard from "./DashboardCard";

const DashboardGrid = () => {
    return (
        <div className="grid grid-cols-2 w-full sm:mx-4 lg:mx-8 gap-4">
            <DashboardCard header='Test' data='' /> 
            <DashboardCard header='Test' data='' /> 
            <DashboardCard header='Test' data='' /> 
            <DashboardCard header='Test' data='' /> 
        </div>
    );
}

export default DashboardGrid;