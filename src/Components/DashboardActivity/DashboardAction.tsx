import Avatar from '../Assets/avatarContainer.svg';
import Survey from './Image/Survey.svg';
import Doc from './Image/doc.svg';
import Xls from './Image/xls.svg';
import Pdf from './Image/pdf.svg';

export default function DashboardAction() {
  return (
    <div>
      <div className="flex border-t-2 border-[#E8E8E8] items-start p-[1.5%] m-[2%] h-[90px]  w-[400px] p-[1.5%]">
        <img alt=" " src={Avatar} />
        <div className="ml-[2%]">
          <p className="text-[14px]">
            TalentWatch Individual Report for October 2022 is Ready
          </p>
          <div className="flex flex-row gap-[20px]">
            <p className="border-2 w-fit px-[2.5%] py-[1%] text-[14px] text-[#1A202C] mt-[10px] rounded-md my-[3%]">
              Download Report
            </p>
            <div className="flex flex-row gap-[10px]">
              <img alt=" " src={Doc} />
              <img alt=" " src={Xls} />
              <img alt=" " src={Pdf} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex border-t-2 border-[#E8E8E8] items-start p-[1.5%] m-[2%] h-[90px]  w-[400px] p-[1.5%]">
        <img alt=" " src={Survey} />

        <div className="ml-[2%]">
          <p className="text-[14px]">
            You haven’t participated in TalentWatch General Survey
          </p>
          <p className="border-2 w-fit px-[2.5%] py-[1%] text-[14px] text-[#1A202C] mt-[10px] rounded-md my-[3%]">
            Take Survey
          </p>
        </div>
      </div>
      <div className="flex border-t-2 border-[#E8E8E8] items-start p-[1.5%] m-[2%] h-[90px]  w-[400px] p-[1.5%]">
        <div className="w-[35px] flex items-center justify-center bg-[#FFEFC7] border-[#FFC400] border-[1px] h-[35px] rounded-full">
          M
        </div>
        <div className="ml-[2%]">
          <p className="text-[14px]">My Personal TalentWatch action plans </p>
          <div className="flex flex-row gap-[2%]">
            <p className="border-2 w-fit px-[2.5%] py-[1%] text-[14px] text-[#1A202C] mt-[10px] rounded-md my-[3%]">
              View
            </p>
            <p className="border-2 w-fit px-[2.5%] py-[1%] text-[14px] text-[#1A202C] mt-[10px] rounded-md my-[3%]">
              Create New
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
