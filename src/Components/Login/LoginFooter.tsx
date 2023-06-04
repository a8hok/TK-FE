import Logo from '../Assets/PoweredBy.svg';
const Loginfooter = () => {
  return (
    <div className="flex fixed bottom-0 w-screen h-[101px] items-center justify-between">
      <div>
        <p className="text-[#34465D] text-[14px] font-normal pl-14">
          End User License Agreement | Privacy Policy | Privacy Shield
        </p>
      </div>
      <div className="pr-[49px]">
        <img src={Logo} className="" alt="logo" />
      </div>
    </div>
  );
};

export default Loginfooter;
