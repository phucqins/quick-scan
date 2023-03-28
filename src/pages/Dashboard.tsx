import DashboardContent from "../components/DashboardContent";
import DashboardMainHeader from "../components/DashboardMainHeader";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__sidebar">
        <SideBar />
      </div>
      <div className="dashboard__content">
        <DashboardMainHeader />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
