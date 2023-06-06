//image import
import Logo from './Image/Logo.svg';

const ResetSuccess = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center   min-w-[566px] w-[566px] ">
        <img className="pt-[77px]" src={Logo} alt="Logo-login"></img>
        <div className=" flex flex-col items-center justify-center w-full ">
          <p className="pt-[70px] text-[30px]  text-center  w-[242px] pb-[15px] font-semibold text-[#1A202C]">
            Successful Password Reset!
          </p>
          <p className="max-w-[324px] text-center text-base font-normal text-[v] opacity-80">
            You can now use your new password to login to your account
          </p>
        </div>

        <a
          href="/"
          className="w-[350px] pt-[14px] text-center font-semibold text-[16px] text-white mt-[25px] rounded-[5px] mt-[30px] bg-[#F78C2B] h-[50px]"
        >
          {' '}
          Login
        </a>
      </div>
    </div>
  );
};

export default ResetSuccess;
