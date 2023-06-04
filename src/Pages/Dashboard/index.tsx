import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Notification from '../../Components/Notification/notification';
import ProgressBar from './progressComponent';
import Todo from '../../Components/TodoList/todo';
import DashboardHeader from './header';
import LinearProgressCard from '../../Components/Linear_ProgressCard';

function Dashboard() {
  return (
    <div className="flex bg-[#F3F6FA] ">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <Notification />
        <div className="w-full p-[4%]">
          <DashboardHeader />
          <ProgressBar />
          <div className="flex">
            <Todo />
            <LinearProgressCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
