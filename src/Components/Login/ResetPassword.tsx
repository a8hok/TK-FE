import { useState } from 'react';
import ResetSuccess from './ResetSuccess';
import Logo from './Image/Logo.svg';

const ResetPassword = () => {
  const [resetStatus, setStatus] = useState('');
  const [resetchange, reset] = useState(0);
  const HandelResetpassword = (Event: any) => {
    Event.preventDefault();
    const Newpassword = Event.target.elements[0].value;
    const Confirmpassword = Event.target.elements[1].value;
    const OldPassword = localStorage.getItem('Password');
    if (Newpassword == OldPassword) {
      console.log('hi');
      setStatus('please enter a new password');
    }
    if (Newpassword != Confirmpassword) {
      setStatus('enter confirm password correctly');
    }
    if (Newpassword != OldPassword) {
      if (Newpassword == Confirmpassword) {
        localStorage.setItem('Password', Newpassword);
        reset(1);
      }
    }
  };
  return (
    <div>
      {resetchange == 1 ? (
        <ResetSuccess />
      ) : (
        <div className="flex flex-col items-center    min-w-[566px] w-[566px] ">
          <img className="pt-[77px]" src={Logo} alt="Logo-login"></img>
          <form onSubmit={HandelResetpassword}>
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
              <p className="pl-2 text-center w-[350px] text-red-500 text-[14px] pt-2 font-medium">
                {resetStatus}
              </p>
              <button className="w-[350px] text-center font-semibold text-[16px] text-white mt-[25px] rounded-[5px] mt-[30px] bg-[#F78C2B] h-[50px]">
                {' '}
                Reset my Password
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
