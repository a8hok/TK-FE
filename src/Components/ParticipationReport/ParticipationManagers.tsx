import LinearProgress from '@mui/material/LinearProgress';
import { IoIosNotificationsOutline } from 'react-icons/io';

export default function ParticipationManagers() {
  return (
    <div className="flex flex-row gap-[55px] mt-[50px] ml-[50px]">
      <div className="w-[320px] h-[170px] rounded-[10px] shadow-lg bg-[#ffffff] ">
        <p className="text-[16px] flex  pl-[40px] pt-[20px] ">
          Incomplete Managers Review
        </p>
        <div className="flex flex-row gap-[50px] pl-[40px] pt-[20px]">
          <div className="flex flex-row items-center">
            <p className="text-[32px] font-bold	">12%</p>
            <p className="text-[12px] pt-[10px] pl-[10px]">04/20</p>
          </div>
          <div className="flex flex-row items-center gap-[10px]">
            <IoIosNotificationsOutline />
            <p className="text-[#F68C2B] text-[12px]">Remind All</p>
          </div>
        </div>

        <LinearProgress
          className="w-[250px] pt-[6px]  ml-[40px] mt-[20px] rounded-[50px]"
          color="secondary"
          variant="determinate"
          value={12}
        />
      </div>
      <div className="w-[320px] h-[170px] rounded-[10px] shadow-lg bg-[#ffffff] ">
        <p className="text-[16px] flex  pl-[40px] pt-[20px] ">
          Incomplete Leaders OAP{' '}
        </p>
        <div className="flex flex-row gap-[50px] pl-[40px] pt-[20px]">
          <div className="flex flex-row items-center">
            <p className="text-[32px] font-bold	">10%</p>
            <p className="text-[12px] pt-[10px] pl-[10px]">12/23</p>
          </div>
          <div className="flex flex-row items-center gap-[10px]">
            <IoIosNotificationsOutline />
            <p className="text-[#F68C2B] text-[12px]">Remind All</p>
          </div>
        </div>

        <LinearProgress
          className="w-[250px] pt-[6px] ml-[40px] mt-[20px] rounded-[50px]"
          color="inherit"
          variant="determinate"
          value={10}
        />
      </div>
      <div className="w-[320px] h-[170px] rounded-[10px] shadow-lg bg-[#ffffff] ">
        <p className="text-[16px] flex  pl-[40px] pt-[20px] ">
          Incomplete Managers Review
        </p>
        <div className="flex flex-row gap-[50px] pl-[40px] pt-[20px]">
          <div className="flex flex-row items-center">
            <p className="text-[32px] font-bold	">73%</p>
            <p className="text-[12px] pt-[10px] pl-[10px]">173/200</p>
          </div>
          <div className="flex flex-row items-center gap-[5px]">
            <IoIosNotificationsOutline />
            <p className="text-[#F68C2B] text-[12px]">Remind All</p>
          </div>
        </div>

        <LinearProgress
          className="w-[250px] pt-[6px] ml-[40px] mt-[20px] rounded-[50px]"
          color="success"
          variant="determinate"
          value={73}
        />
      </div>
    </div>
  );
}
