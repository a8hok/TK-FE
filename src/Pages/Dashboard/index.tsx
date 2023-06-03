import DashboardIcon from '../../assets/dashboard.svg';
import Notification from './notification';
import ProgressBar from './progressComponent';

function Dashboard() {
  return (
    <div className="bg-TK-background w-full">
      <Notification />
      <div className="flex p-[3%] justify-between">
        <div className="flex justify-center">
          <img src={DashboardIcon} alt="" />
          <h1 className="text-TK-text">Dashboard</h1>
        </div>
      </div>
      <ProgressBar />
    </div>
  );
}

export default Dashboard;
