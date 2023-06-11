import ParticipationTable from './ParticipationTable';
import UpArrow from '../Report/Image/uparrow.svg';
import DownArrow from '../Report/Image/downarrow.svg';

export default function ParticipationThird() {
  return (
    <div>
      <div className="bg-[#dae8fa] w-[1100px] shadow-2xl   rounded-[20px] ml-[50px]">
        <div className=" h-[60px]  relative	flex flex-row mt-[40px] ">
          <div className="flex flex-row gap-[15px] pt-[20px] pl-[30px]">
            <p className="text-[14px]">Manager Name</p>
            <div className="flex flex-col pt-[5px] gap-[3px] ">
              <img src={UpArrow} alt="" />
              <img src={DownArrow} alt="" />
            </div>
          </div>
          <div className="flex flex-row gap-[15px] pt-[20px] pl-[70px]">
            <p className="text-[14px]">Leader Name</p>
            <div className="flex flex-col pt-[5px] gap-[3px] ">
              <img src={UpArrow} alt="" />
              <img src={DownArrow} alt="" />
            </div>
          </div>
          <div className="flex flex-row gap-[15px] pt-[20px] pl-[80px]">
            <p className="text-[14px]">OAP Status </p>
            <div className="flex flex-col pt-[5px] gap-[3px] ">
              <img src={UpArrow} alt="" />
              <img src={DownArrow} alt="" />
            </div>
          </div>
          <div className="flex flex-row gap-[15px] pt-[20px] pl-[25%] ">
            <p className="text-[14px]">Dated</p>
            <div className="flex flex-col pt-[5px] gap-[3px] ">
              <img src={UpArrow} alt="" />
              <img src={DownArrow} alt="" />
            </div>
          </div>
          <div className="flex flex-row gap-[15px] pt-[20px] pl-[12%]">
            <p className="text-[14px]">Action</p>
          </div>
        </div>
        <div className="w-full h-[300px] bg-[#ffffff] border-2 rounded-[20px] overflow-y-scroll	 shadow-2xl  flex flex-col  ">
          <ParticipationTable />
          <ParticipationTable />
          <ParticipationTable />
          <ParticipationTable />
          <ParticipationTable />
          <ParticipationTable />
          <ParticipationTable />
          <ParticipationTable />
        </div>
      </div>
    </div>
  );
}
