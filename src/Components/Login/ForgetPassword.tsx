// import LoginBanner from './LoginBanner';
import Logo from './Image/Logo.svg';
import MessageLogo from './Image/Message.svg';
const ForgetPassword = () => {
  return (
    <div className="flex ">
      <div>
        {/* <LoginBanner /> */}
        <div className="flex flex-col items-center    min-w-[566px] w-[566px] ">
          <img className="pt-[77px]" src={Logo} alt="Logo-login"></img>
          <div className="float-right w-full pl-[108px]">
            <p className="pt-[108px] text-[30px] pb-[15px] font-semibold text-[#1A202C]">
              Forgot Password
            </p>
            <p className="max-w-[324px] text-base font-normal text-[v] opacity-80">
              Enter your Login ID and we’ll send your link to reset password
            </p>
            <div className=" pt-[36px] relative">
              <img
                className="absolute left-4 top-[60%]"
                src={MessageLogo}
                alt="msg"
              ></img>
              {/* <p className="absolute left-11 top-[54%]  font-normal text-[16px] text-[#34465D]">
                Login ID
              </p> */}

              <input
                placeholder="Login ID"
                className=" placeholder:text-[#34465D] pl-[43px] w-[350px] rounded-[5px] border-[1px] border-[#C2CFE0] border-solid h-[50px]"
              ></input>
            </div>
            <button className="w-[350px] text-center font-semibold text-[16px] text-white mt-[25px] rounded-[5px] bg-[#F78C2B] h-[50px]">
              {' '}
              Reset Password
            </button>
            <div className="pl-[128px] pt-10">
              <a href="/" className=" text-[#2B6CB0] text-[14px] font-normal">
                Back to Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
