import Button from '../Setting/Images/button.svg';
export default function SettingManagerInform() {
  return (
    <div>
      <div className="pl-[30px] pt-[40px]">
        <h1 className="text-[#34465D] font-medium	 text-[26px] tracking-wide">
          Manager Information
        </h1>
        <div className="pt-[40px]  ">
          <div className="relative inline-flex  gap-[40px] items-center justify-center w-[450px] h-[100px] overflow-hidden bg-[#ffffff] border-2 rounded-lg">
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark: border-2">
              <span className="font-medium text-gray-600 bg-[#34465D">T</span>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div>
                <h1>Thomas Kominsky</h1>
                <h2 className="text-[#2B6CB0]">
                  tom.kominsky@foundationpartners.com
                </h2>
              </div>
            </div>
          </div>
        </div>
        <h1 className="pt-[20px] text-[24px] tracking-wide">Notifications</h1>
        <div className="pt-[20px]">
          <div className="relative inline-flex items-center justify-center w-[450px] h-[150px] overflow-hidden bg-[#ffffff] border-2 rounded-lg">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <h2 className="text-[16px]">Email</h2>
                  <h3 className="text-[12px]">
                    Turn on to get updates through email
                  </h3>
                </div>
                <div className="pl-[100px] pt-[10px]">
                  <button className=" w-[50px] h-[30px] bg-gray-100 rounded-full dark: border-2 bg-[green]">
                    <img
                      className="pl-[10px]"
                      src={Button}
                      alt="arrow"
                      width={35}
                      height={35}
                    ></img>
                  </button>
                </div>
              </div>
              <div className="flex flex-row pt-[30px]">
                <div className="flex flex-col">
                  <h2 className="text-[16px]">Mobile</h2>
                  <h3 className="text-[12px]">
                    Turn on to get updates through mobile{' '}
                  </h3>
                </div>
                <div className="pl-[93px] pt-[10px]">
                  <button className=" w-[50px] h-[30px] bg-gray-100 rounded-full dark: border-2 bg-[darkblue]">
                    <img
                      className="pr-[10px] "
                      src={Button}
                      alt="arrow"
                      width={35}
                      height={35}
                    ></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-[24px] pt-[30px] tracking-wide	">Password</h1>
        <div className="relative inline-flex items-center justify-center mt-[30px] w-[300px] h-[50px] overflow-hidden bg-[#ffffff] border-2 rounded-lg border-[#F68C2B]">
          <h1 className="text-[#F68C2B]  tracking-wide">Change Password</h1>
        </div>
      </div>
    </div>
  );
}
