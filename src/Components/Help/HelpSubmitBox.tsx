import DeleteIcon from './Image/Delete-icon.svg';

export default function HelpSubmitBox() {
  return (
    <div>
      <div className="bg-[#f2f8ff] w-[90%] h-[460px] ml-[40px] pl-[50px] mt-[40px] mb-[25px] rounded-lg  pt-[40px]">
        <div className="flex flex-row gap-[80px]">
          <div>
            <h1>How would you categorize this request?</h1>
            <div className="flex flex-row">
              <input
                className="flex justify-center w-[330px] mt-[15px] bg-[#FFFFFF] border-[#C2CFE0] border-[1px]  rounded-[10px]  border-solid pr-[15px] pl-[15px] pt-[10px] pb-[10px]  "
                type="text"
                placeholder="General Support "
              />
            </div>
          </div>
          <div>
            <h1>Is this request urgent?</h1>
            <input
              className="flex justify-center w-[150px] mt-[15px] bg-[#FFFFFF] border-[#C2CFE0] border-[1px]  rounded-[10px]  border-solid pr-[15px] pl-[15px] pt-[10px] pb-[10px]  "
              type="text"
              placeholder="No, It’s not"
            />
          </div>
          <div>
            <h1>Attach a file</h1>
            <div className="flex flex-row gap-[10px]">
              <input
                className="flex justify-center w-[50px] mt-[15px] bg-[#FFFFFF] border-[#C2CFE0] border-[1px]  rounded-[10px]  border-solid pr-[15px] pl-[15px] pt-[10px] pb-[10px]  "
                type="text"
                placeholder="@"
              />
              <h2 className="pt-[25px] text-[14px]">screenshot1234.jpg</h2>
              <img
                className="mr-[10px] pt-[10px] "
                src={DeleteIcon}
                alt="arrow"
              ></img>
            </div>
          </div>
        </div>
        <div className="pt-[40px]">
          <h1>Details</h1>
          <div className="pt-[30px]">
            <input
              className="flex justify-start   w-[880px] h-[180px] bg-[#FFFFFF] border-[#C2CFE0] border-[1px]  rounded-[10px]  border-solid pr-[15px] pl-[15px]  "
              type="text"
              placeholder="I am writing to request a change in my last name, as it appears to be incorrect under my profile section. Please update it to [Douglas]. I have attach the screenshot for your reference. 
            Thank you."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
