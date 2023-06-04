import ResourceLogo from './Image/resource.svg';
import { ResourcesData } from '../../Constants';
import ResourceUpload from './ResourceUpload';
import ResourceFiles from './ResourceFiles';

const ResourceDiscription = () => {
  return (
    <div>
      <div className="flex h-8  items-center pt-11 pl-[63px]">
        <img className="mt-1" src={ResourceLogo} alt="Logo"></img>
        <p className="pl-[11px] text-[#34465D] font-medium text-4xl">
          Resources
        </p>
      </div>
      <div className="flex gap-x-[32px]  pl-[63px] pt-12">
        {ResourcesData.map(obj => (
          <div
            className="w-[190px] h-[99px] bg-white focus:border-2 focus:border-solid focus:outline-violet-800 shadow-xl shadow-gray-200 rounded-[15px] flex flex-col items-center justify-center"
            key={0}
          >
            {' '}
            <div className="flex text-[31px] font-semibold ">
              <img src={obj.Image} alt="ResourceLogo"></img>
              <p className="pl-[11px]">{obj.TotalAvilable}</p>
            </div>
            <p className="text-[#34465D]">{obj.ResourcesType}</p>
          </div>
        ))}
      </div>
      <ResourceUpload />
      <ResourceFiles />
    </div>
  );
};

export default ResourceDiscription;
