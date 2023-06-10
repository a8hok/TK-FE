import UpArrow from './Image/uparrow.svg';
import ReportBoxContent from './ReportBoxContent';

import DownArrow from './Image/downarrow.svg';
export default function ReportFirstBox() {
  return (
    <div className="bg-[#dae8fa] w-[1100px]  rounded-[20px] ml-[50px]">
      <div className=" h-[50px]  relative	flex flex-row mt-[40px] ">
        <div className="flex flex-row gap-[15px] pt-[20px] pl-[30px]">
          <p>TalentWatch Online Action Plan Participation - Individual</p>
          <div className="flex flex-col pt-[5px] gap-[3px] ">
            <img src={UpArrow} alt="" />
            <img src={DownArrow} alt="" />
          </div>
        </div>
        <div className="flex flex-row gap-[15px] pt-[20px] pl-[28%]">
          <p>Dated</p>
          <div className="flex flex-col pt-[5px] gap-[3px] ">
            <img src={UpArrow} alt="" />
            <img src={DownArrow} alt="" />
          </div>
        </div>
        <div className="flex flex-row gap-[15px] pt-[20px] pl-[12%]">
          <p>Action</p>
        </div>
      </div>
      <div className="w-full h-[200px] bg-[#ffffff] border-2 rounded-[20px]  shadow-2xl  flex flex-col  ">
        <ReportBoxContent />
        <ReportBoxContent />
        <ReportBoxContent />
      </div>
    </div>
  );
}
