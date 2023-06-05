import SettingsProfile from '../../Components/Setting/SettingsProfile';
import SettingManagerInform from '../../Components/Setting/SettingManagerInform';

function SettingMiddle() {
  return (
    <div>
      <div className="flex flex-row ml-[80px] mt-[30px] rounded-[20px] bg-[#ffffff] shadow-lg w-[85%]">
        <SettingsProfile />
        <SettingManagerInform />
      </div>
    </div>
  );
}

export default SettingMiddle;
