//image import
import Downarrow from './Image/Downarrow.svg';
//constant import
import { Logindata } from '../../Constants';

const Navbar = () => {
  return (
    <div className=" w-full   shadow-lg bg-white shadow-slate-200  items-center  flex justify-end h-[81px]  pr-11 ">
      <div className="w-[38px] flex items-center justify-center bg-[#FFEFC7] border-[#FFC400] border-[1px] h-[38px] rounded-full">
        A
      </div>
      <div className="pl-3">
        {Logindata?.map((obj, index) => (
          <div key={index}>
            {' '}
            <p className=" flex justify-center items-center font-medium text-[#192A3E] text-[14px]">
              HI, {obj.UserName}
              <img
                className="pt-[0.7px] pl-[9.5px] "
                src={Downarrow}
                alt="arrow"
              ></img>
            </p>
            <p className="text-[#90A0B7] font-medium text-[11px]">
              {obj.Member}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
