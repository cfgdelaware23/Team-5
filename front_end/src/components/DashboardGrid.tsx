import "../App.css";
import DashboardCard from "./DashboardCard";

const DashboardGrid = () => {
    const quickLinks = [
        {displayText: 'Org Website', url: ''},
        {displayText: 'User Dashboard', url: 'http://localhost:5173/user/index'},
        {displayText: 'Dashboard Login Page', url: 'http://localhost:5173/'},
        {displayText: 'Better Box', url: 'https://www.wellfare.org/better-box'},
    ]


    return (
        <div className="grid grid-cols-2 w-4/5vw h-full m-8 sm:mx-4 lg:mx-8 gap-4">
            <DashboardCard header='Total Sales' data='' /> 
            <DashboardCard header='Quick Links' data='' /> 
        </div>
    );
}

export default DashboardGrid;