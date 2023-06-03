import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

function SurveyNavButton() {
  return (
    <div>
      <div className="flex flex-row mx-auto mt-[45px]">
        <button type="button" className="  rounded-l-md border-r  py-2 px-3">
          <div className="flex flex-row align-middle items-center w-[175px]">
            <AiOutlineArrowLeft color="black" />
            <p className="ml-2 text-black font-[600]">Previous</p>
          </div>
        </button>
        <button
          type="button"
          className=" rounded-r-md py-2 border-l  hover:bg-[#F68C2B] hover:border-[#F68C2B] hover:text-white  px-3  border-2 border-black rounded-sm"
        >
          <div className="flex flex-row align-middle items-center w-[175px]">
            <span className="mr-2">Next</span>
            <AiOutlineArrowRight />
          </div>
        </button>
      </div>
    </div>
  );
}

export default SurveyNavButton;
