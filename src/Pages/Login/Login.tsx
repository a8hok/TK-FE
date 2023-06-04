import { useEffect, useState } from 'react';
import Loginfooter from '../../Components/Login/LoginFooter';
import Logo from '../../Components/Login/Image/Logo.svg';
import MessageLogo from '../../Components/Login/Image/Message.svg';
import LockLogo from '../../Components/Login/Image/Lock.svg';
import PasswordIcon from '../../Components/Login/Image/Hide.svg';
import ForgetPassword from '../../Components/Login/ForgetPassword';
import LoginBanner from '../../Components/Login/LoginBanner';
import { useNavigate } from 'react-router-dom';

function Home() {
  const Navigate = useNavigate();
  const [LoginStatus, setStatus] = useState('');
  const [ForgetPasswordaccess, setaccess] = useState(0);
  const HandelForgetPassword = () => {
    setaccess(1);
  };
  const HandelLogin = (event: any) => {
    event.preventDefault();
    const Email = event.target.elements[0].value;
    const Password = event.target.elements[1].value;
    console.log(Email, Password);
    const LoginEmail = localStorage.getItem('Email');
    const LoginPassword = localStorage.getItem('Password');
    if (LoginEmail === Email && LoginPassword == Password) {
      Navigate('/resource');
    }
    if (LoginEmail != Email) {
      setStatus('Invalid useremail');
    }
    if (LoginEmail == Email) {
      if (Password != LoginPassword) {
        setStatus('Invalid Password');
      }
    }

    // localStorage.setItem('Email', Email);
    // localStorage.setItem('Password', Password);
  };
  const [isVisible, setVisible] = useState(false);
  const handelSeePassword = () => {
    setVisible(!isVisible);
  };
  useEffect(() => {
    console.log(LoginStatus);
  }, [LoginStatus]);
  return (
    <div>
      <div className="flex  ">
        <LoginBanner />
        {ForgetPasswordaccess == 1 ? (
          <ForgetPassword />
        ) : (
          <div className="flex flex-col items-center    min-w-[566px] w-[566px] ">
            <img className="pt-[77px]" src={Logo} alt="Logo-login"></img>

            <div className="float-right w-full pl-[108px]">
              <form onSubmit={HandelLogin}>
                <p className=" pt-[73px] font-normal text-[20px] text-[#34465D]">
                  Welcome back
                </p>
                <p className="pt-[11px] text-[30px] pb-[15px] font-semibold text-[#1A202C]">
                  Login to your Account
                </p>
                <p className="max-w-[324px] text-base font-normal text-[v] opacity-80">
                  Email
                </p>
                <div className="pt-[11px] relative">
                  <img
                    className="absolute left-4 top-[47%]"
                    src={MessageLogo}
                    alt="msg"
                  ></img>
                  <input
                    required
                    type="email"
                    placeholder="example123@gmail.com"
                    className="w-[350px] placeholder:text-[#34465D] pl-[43px] rounded-[5px] border-[1px] border-[#C2CFE0] border-solid h-[50px]"
                  ></input>
                </div>
                <p className="max-w-[324px] text-base font-normal text-[v] opacity-80">
                  Password
                </p>
                <div className="pt-[11px] relative">
                  <img
                    className="absolute left-4 top-[47%]"
                    src={LockLogo}
                    alt="msg"
                  ></img>
                  <input
                    required
                    placeholder="Enter password"
                    type={!isVisible ? 'password' : 'text'}
                    className="w-[350px]  placeholder:text-[#34465D] pl-[43px] rounded-[5px] border-[1px] border-[#C2CFE0] border-solid h-[50px]"
                  ></input>
                  <button onClick={handelSeePassword} type="button">
                    <img
                      className="absolute left-[319px] top-[47%]"
                      src={PasswordIcon}
                      alt="msg"
                    ></img>
                  </button>
                </div>
                <div className=" flex w-[350px]  items-start justify-between pt-[25px]">
                  <div className="flex ">
                    <input
                      className="w-5 h-5 border-[1px] border-[#C2CFE0] border-solid  rounded-[5px]"
                      type="checkbox"
                    />
                    <p className="pl-2 text-[#34465D] text-[14px] font-medium">
                      Remember me
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={HandelForgetPassword}
                    className=" text-[#2B6CB0] text-[14px] font-normal"
                  >
                    Forgot password?
                  </button>
                </div>
                <p className="pl-2 text-center w-[350px] text-red-500 text-[14px] pt-2 font-medium">
                  {LoginStatus}
                </p>
                <button
                  type="submit"
                  className="w-[350px] text-center font-semibold text-[16px] text-white mt-[25px] rounded-[5px] bg-[#F78C2B] h-[50px]"
                >
                  {' '}
                  Login
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Loginfooter />
    </div>
  );
}

export default Home;
