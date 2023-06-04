import DashboardIcon from '../../assets/dashboard.svg';

function DashboardHeader() {
  return (
    <div className="h-fit">
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center">
          <img src={DashboardIcon} alt="" />
          <p className="text-[26px] text-[#34465D] mx-[5%]">Dashboard</p>
        </div>
        <p className="text-[16px] text-[#707683] tracking-wide">
          {new Date().getDate()}{' '}
          {new Date().toLocaleString('en-us', { weekday: 'long' }).slice(0, 3)},{' '}
          {new Date().toLocaleString('default', { month: 'long' }).slice(0, 3)}{' '}
          {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default DashboardHeader;
