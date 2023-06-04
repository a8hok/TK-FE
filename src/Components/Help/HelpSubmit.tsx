import HelpSubmitBox from './HelpSubmitBox';
import HelpLast from './HelpLast';
export default function HelpSubmit() {
  return (
    <div>
      <div>
        <div className="flex  flex-col ml-[70px] mt-[40px] bg-[#ffffff] w-[1060px] h-[710px] ">
          <h1 className="text-[#34465D] text-[24px] tracking-wide pl-[40px] font-medium	 pt-[40px]">
            Submit a Request for Assistance{' '}
          </h1>
          <h2 className="text-[#34465D] font-extralight	tracking-wide	 text-[14px] tracking-wide pl-[40px] pt-[10px]">
            Please complete the form below detailing your request and a member
            of our support staff will respond as soon as possible
          </h2>
          <HelpSubmitBox />
          <HelpLast />
        </div>
      </div>
    </div>
  );
}
