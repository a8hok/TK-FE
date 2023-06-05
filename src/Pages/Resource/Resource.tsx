//component imports
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import ResourceDiscription from '../../Components/ResourceModules/ResourceDiscription';

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
          <ResourceDiscription />
        </div>
      </div>
    </div>
  );
};

export default Resource;
