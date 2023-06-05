import Setting from '../Setting/Images/Settings.svg';
export default function SettingHeader() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-row pl-[70px] pt-[40px]">
          <img
            className="pt-[0.7px] pl-[9.5px] "
            src={Setting}
            alt="arrow"
            width={40}
            height={40}
          ></img>
          <h1 className="text-[#34465D] text-[26px]">Settings</h1>
        </div>
      </div>
    </div>
  );
}
