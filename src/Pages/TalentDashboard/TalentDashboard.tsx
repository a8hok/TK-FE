import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import MyTalentDashboard from '../../Components/TalentDashboard/MyTalentDashboard';
const TalentDashboard = () => {
  return (
    <div>
      <div className="flex bg-[#F3F6FA]">
        <div className="w-fit">
          {' '}
          <Sidebar />
        </div>
        <div className=" w-screen">
          <Navbar />
          <MyTalentDashboard />
        </div>
      </div>
    </div>
  );
};

export default TalentDashboard;
