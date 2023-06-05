//component imports
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import ResourceDescription from '../../Components/ResourceModules/ResourceDiscription';

const Resource = () => {
  return (
    <div>
      <div className="flex bg-[#F3F6FA]">
        <div className="w-fit">
          {' '}
          <Sidebar />
        </div>
        <div className=" w-screen">
          <Navbar />
          <ResourceDescription />
        </div>
      </div>
    </div>
  );
};

export default Resource;
