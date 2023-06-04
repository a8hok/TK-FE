import { useState } from 'react';
import ResetSuccess from './ResetSuccess';
import Logo from './Image/Logo.svg';

const ResetPassword = () => {
  const [resetchange, reset] = useState(0);
  const HandelResetpassword = () => {
    reset(1);
  };
  return (
    <div>
      {resetchange == 1 ? (
        <ResetSuccess />
      ) : (
        <div className="flex flex-col items-center    min-w-[566px] w-[566px] ">
          <img className="pt-[77px]" src={Logo} alt="Logo-login"></img>
          <div className="float-right w-full pl-[108px]">
            <p className="pt-[73px] text-[30px] pb-[15px] font-semibold text-[#1A202C]">
              Reset your Password
            </p>
            <p className="max-w-[324px] text-base font-normal text-[v] opacity-80">
              New password
            </p>
            <div className="pt-[26px] ">
              <input
                required
                type="password"
                placeholder="Enter a new password"
                className="w-[350px] placeholder:text-[#34465D] pl-[43px] text-[16px] rounded-[5px] border-[1px] border-[#C2CFE0] border-solid h-[50px]"
              ></input>
            </div>
            <p className="max-w-[324px] text-base font-normal pt-[21px] text-[v] opacity-80">
              Confirm new password
            </p>
            <div className="pt-[26px] ">
              <input
                required
                placeholder="Confirm your new password"
                type="password"
                className="w-[350px]  placeholder:text-[#34465D]  pl-[43px] rounded-[5px] border-[1px] border-[#C2CFE0] border-solid h-[50px]"
              ></input>
            </div>

            <button
              onClick={HandelResetpassword}
              className="w-[350px] text-center font-semibold text-[16px] text-white mt-[25px] rounded-[5px] mt-[30px] bg-[#F78C2B] h-[50px]"
            >
              {' '}
              Reset my Password
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
