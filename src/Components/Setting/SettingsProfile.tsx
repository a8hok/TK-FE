function SettingsProfile() {
  return (
    <div>
      <div className="flex  flex-col ml-[70px] mt-[40px]  ">
        <h1 className="text-[#34465D] font-medium	 text-[26px] tracking-wide">
          Profile Information
        </h1>
        <div className="bg-[#f5f6f7] w-[450px] pl-[50px] mt-[40px] mb-[25px] rounded-lg  pt-[40px]">
          <h1 className="text-[#34465D] text-[16px] ">First Name</h1>
          <input
            className="flex justify-center w-[350px] mt-[15px] bg-[#FFFFFF] border-[#C2CFE0] border-[1px]  rounded-[10px]  border-solid pr-[15px] pl-[15px] pt-[10px] pb-[10px]  "
            type="text"
            placeholder="Alex"
          ></input>
          <h1 className="text-[#34465D] text-[16px] mt-[20px]">Last Name</h1>
          <input
            className="flex  w-[350px]  bg-[#FFFFFF]  mt-[15px] rounded-[10px] border-[#C2CFE0] border-[1px] border-solid pr-[15px] pl-[15px] pt-[10px] pb-[10px]  "
            type="text"
            placeholder="Daubert"
          ></input>
          <h1 className="text-[#34465D] text-[16px] mt-[20px]">
            Email Address
          </h1>
          <input
            className="flex justify-center w-[350px]  mt-[15px] pl-[10%]  bg-[#FFFFFF] border-[#C2CFE0] border-[1px]  rounded-[10px]  border-solid pr-[15px] pl-[15px] pt-[10px] pb-[10px]  "
            type="text"
            placeholder="alex.daubert@foundationpartners.com"
          ></input>
          <h1 className="text-[#34465D] text-[16px] mt-[20px]">Login ID</h1>
          <input
            className="flex justify-center w-[350px] mt-[15px] mb-[40px]   pl-[10%]  bg-[#FFFFFF]  border-[#C2CFE0] border-[1px] rounded-[10px]  border-solid pr-[15px] pl-[15px] pt-[10px] pb-[10px]  "
            type="text"
            placeholder="FNG_alex.daubert@foundationpartners.com"
          ></input>
        </div>
        <div className="flex flex-row gap-[10px] mb-[30px]">
          <h1 className="text-[#34465D]  font-extralight	tracking-wide">
            If you find any discrepancy
          </h1>
          <a
            href="/survey"
            className="text-[#006AFF] underline underline-offset-4 decoration-[#006AFF] "
          >
            submit a request
          </a>
        </div>
      </div>
    </div>
  );
}

export default SettingsProfile;
