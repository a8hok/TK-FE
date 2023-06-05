//image import
import Logo from './Images/FP_logo.svg';
import Help from './Images/Help.svg';
import Powerdbylogo from './Images/Powered by.svg';
//component imports
import { TalentRequest } from './TalentRequest';
//constant imports
import { Json } from '../../Constants';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-white flex pt-8 flex-col justify-center items-center shadow-lg shadow-slate-200">
      <img src={Logo} alt="logo"></img>
      <div className="flex flex-col justify-center font-normal text-[16px] text-[#34465D] gap-y-2 mt-[35px] items-center">
        {Json?.map((obj, index) => (
          <div key={index}>
            <div className="w-[200px] flex text-justify h-12">
              <img className="mr-3 pl-[19px]" src={obj.Image} alt="img "></img>
              <p className="h-6 pt-3">{obj.Title}</p>
            </div>
          </div>
        ))}{' '}
        <div className="w-[183px] opacity-20 h-[0.5px] bg-black mt-[18px]"></div>
        <div className=" w-[200px] flex text-justify h-12">
          {' '}
          <img className="mr-3 pl-[19px]" src={Help} alt="help"></img>
          <p className="h-6 pt-3 ">Help</p>
        </div>
      </div>
      <TalentRequest />
      <img className="mt-[35px] mb-6" src={Powerdbylogo} alt="powered-by"></img>
    </div>
  );
};

export default Sidebar;
