import HelpHeader from '../../Components/Help/HelpHeader';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import HelpMiddle from '../../Components/Help/HelpMiddle';
function Help() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full  bg-[#F3F6FA]">
        <Navbar />
        <HelpHeader />
        <HelpMiddle />
      </div>
    </div>
  );
}

export default Help;
