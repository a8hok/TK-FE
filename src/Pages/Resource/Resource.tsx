import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
const Resource = () => {
  return (
    <div className="flex bg-[#F3F6FA]">
      <div className="w-fit">
        {' '}
        <Sidebar />
      </div>
      <Navbar />
    </div>
  );
};

export default Resource;
