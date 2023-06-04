import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import DashboardIcon from '../../Components/Assets/dashboard.svg';
import Notification from './notification';
import ProgressBar from './progressComponent';
import Todo from './todo';

function Dashboard() {
  return (
    <div className="flex bg-[#F3F6FA] ">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <Notification />
        <div className="p-[5%]">
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center">
              <img src={DashboardIcon} alt="" />
              <p className="text-[26px] text-[#34465D]">Dashboard</p>
            </div>
            <p>
              {new Date().getDate()}{' '}
              {new Date()
                .toLocaleString('en-us', { weekday: 'long' })
                .slice(0, 3)}
              ,{new Date().getFullYear()}
            </p>
          </div>
          <ProgressBar />
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
