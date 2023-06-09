import Logo from './Images/FP_logo.svg';
import { Json } from '../../Constants';
import Help from './Images/Help.svg';
import { TalentRequest } from './TalentRequest';
import Powerdbylogo from './Images/Powered by.svg';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-white flex pt-8 flex-col justify-center items-center shadow-lg shadow-slate-200">
      <img src={Logo} alt="logo"></img>
      <div className="flex flex-col justify-center font-normal text-[16px] text-[#34465D] gap-y-2 mt-[35px] items-center">
        {Json.map((obj, index) => (
          <div
            key={index}
            className="w-[200px] hover:bg-[#006AFF] hover:text-white cursor-pointer flex text-justify h-12"
          >
            <img className="mr-3 pl-[19px]" src={obj.Image} alt="img "></img>
            <Link to={obj.src}>
              <p className="h-6 pt-3">{obj.Title}</p>
            </Link>
          </div>
        ))}{' '}
        <div className="w-[183px] opacity-20 h-[0.5px] bg-black mt-[18px]"></div>
        <div className="w-[200px] hover:bg-[#006AFF] hover:text-white cursor-pointer flex text-justify h-12">
          {' '}
          <img className="mr-3 pl-[19px]" src={Help} alt="help"></img>
          <Link to={'/help'}>
            <p className="h-6 pt-3 ">Help</p>
          </Link>
        </div>
      </div>
      <TalentRequest />
      <img className="mt-[35px] mb-6" src={Powerdbylogo} alt="powered-by"></img>
    </div>
  );
};

export default Sidebar;
