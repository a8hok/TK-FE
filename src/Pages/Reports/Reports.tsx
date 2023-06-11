import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import ReportMerge from '../../Components/Report/ReportMerge';
export default function Reports() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="w-full  bg-[#F3F6FA]">
          <Navbar />
          <ReportMerge />
        </div>
      </div>
    </div>
  );
}
