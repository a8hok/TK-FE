import DashboardMerge from '../../Components/DashboardActivity/DashboardMerge';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
function DashboardActivity() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full  bg-[#F3F6FA]">
        <Navbar />
        <DashboardMerge />
      </div>
    </div>
  );
}

export default DashboardActivity;
