import { IoMdNotificationsOutline } from 'react-icons/io';

export default function ParticipationTable() {
  return (
    <div>
      <div>
        <div className="w-[95%] h-[60px] bg-[#ffffff] border-2 border-transparent border-b-zinc-200 ml-[25px] pt-[20px] pb-[20px] items-center flex  flex-row  ">
          <div>
            <p className="text-[14px]">Stephen Marana</p>
          </div>
          <div className="pl-[85px]">
            <p className="text-[14px]">Michael Sundeen</p>
          </div>
          <div className="pl-[80px]">
            <p className="text-[14px]">Plan Submitted</p>
          </div>
          <div className="flex flex-row pl-[270px]">
            <div className="">
              <p className="text-[14px] text-[#707683] tracking-wide pr-[50px] pt-50px]">
                {new Date()
                  .toLocaleString('default', { month: 'long' })
                  .slice(0, 3)}{' '}
                {new Date().getDate()},{new Date().getFullYear()}
              </p>
            </div>
            <div className=" w-[100px] h-[25px] flex flex-row items-center ml-[40px] pl-[5px] gap-[5px] rounded-[5px] bg-[#006AFF]">
              <IoMdNotificationsOutline />
              <p className="text-[12px] text-[#ffffff]">Reminder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
