import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import ParticipationMerge from '../../Components/ParticipationReport/ParticipationMerge';
export default function ParticipationReports() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="w-full  bg-[#F3F6FA]">
          <Navbar />
          <ParticipationMerge />
        </div>
      </div>
    </div>
  );
}
