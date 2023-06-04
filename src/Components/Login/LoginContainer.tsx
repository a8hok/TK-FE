import Background from './Image/LoginBackground.svg';
import Logo from './Image/Logo.svg';

const LoginContainer = () => {
  return (
    <div className="flex w-fit">
      <div className="">
        <img className=" w-full" src={Background} alt="background"></img>
      </div>
      <div className="flex flex-col  w-[569px] justify-center items-center">
        <img className="text-center" src={Logo} alt="logo "></img>{' '}
        <div className="flex items-start">
          <p>Forgot Password</p>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
