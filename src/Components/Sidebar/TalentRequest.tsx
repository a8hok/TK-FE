//image import
import RequestLogo from './Images/Layer_1.svg';

export const TalentRequest = () => {
  return (
    <div className="flex flex-col border-[1px] h-[203px] w-[200px] p-5 rounded-[10px] mt-[197px] border-solid border-[#E0E0E0] items-start ">
      <img src={RequestLogo} alt="take survey logo"></img>
      <p className=" font-medium mt-[5px] text-[16px] text-[#161E54] ">
        Parting Words
      </p>
      <p className=" font-normal mt-[5px] text-[12px] text-[#686868] ">
        To be completed by exiting employees only
      </p>
      <button className="font-normal px-4 py-1  text-[12px] text-[#34465D] w-full mt-[10px] h-8 rounded bg-[#F0F4FF]">
        Take Survey
      </button>
    </div>
  );
};
