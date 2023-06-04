import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import SettingHeader from '../../Components/Setting/SettingHeader';
import SettingMiddle from '../../Components/Setting/SettingMiddle';

function Settings() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full  bg-[#F3F6FA]">
        <Navbar />
        <SettingHeader />
        <SettingMiddle />
      </div>
    </div>
  );
}

export default Settings;
