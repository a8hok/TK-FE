import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import Setting from '../Settings/Images/Settings.svg';
import Button from '../Settings/Images/button.svg';
function Settings() {
  return (
    <div>
      <div className="flex bg-[#F3F6FA] w-fit">
        <Sidebar />
        <div className="flex flex-col">
          <Navbar />
          <div className="flex flex-col ">
            <div className="flex flex-row pl-[70px] pt-[40px]">
              <img
                className="pt-[0.7px] pl-[9.5px] "
                src={Setting}
                alt="arrow"
                width={40}
                height={40}
              ></img>
              <h1 className="text-[#34465D] text-[26px]">Settings</h1>
            </div>
            <div className="bg-[#ffffff] flex flex-row w-[1060px] ml-[70px] mt-[40px]">
              <div className="flex  flex-col ml-[70px] mt-[40px]">
                <h1 className="text-[#34465D] text-[26px]">
                  Profile Information
                </h1>
                <div className="bg-[#f5f6f7] w-[450px] pl-[50px] mt-[40px] mb-[25px] pt-[40px]">
                  <h1 className="text-[#34465D] text-[16px] ">First Name</h1>
                  <input
                    className="flex justify-center w-[350px] mt-[15px] bg-[#FFFFFF]   rounded-[10px]  border-solid pr-[15px] pl-[15px] pt-[10px] pb-[10px]  "
                    type="text"
                    placeholder="Alex"
                  ></input>
                  <h1 className="text-[#34465D] text-[16px] mt-[20px]">
                    Last Name
                  </h1>
                  <input
                    className="flex  w-[350px]  bg-[#FFFFFF]  mt-[15px] rounded-[10px]  border-solid pr-[15px] pl-[15px] pt-[10px] pb-[10px]  "
                    type="text"
                    placeholder="Daubert"
                  ></input>
                  <h1 className="text-[#34465D] text-[16px] mt-[20px]">
                    Email Address
                  </h1>
                  <input
                    className="flex justify-center w-[350px]  mt-[15px] pl-[10%]  bg-[#FFFFFF]   rounded-[10px]  border-solid pr-[15px] pl-[15px] pt-[10px] pb-[10px]  "
                    type="text"
                    placeholder="alex.daubert@foundationpartners.com"
                  ></input>
                  <h1 className="text-[#34465D] text-[16px] mt-[20px]">
                    Login ID
                  </h1>
                  <input
                    className="flex justify-center w-[350px] mt-[15px] mb-[40px]   pl-[10%]  bg-[#FFFFFF]   rounded-[10px]  border-solid pr-[15px] pl-[15px] pt-[10px] pb-[10px]  "
                    type="text"
                    placeholder="FNG_alex.daubert@foundationpartners.com"
                  ></input>
                </div>
                <div className="flex flex-row gap-[10px] mb-[30px]">
                  <h1>If you find any discrepancy</h1>
                  <span className="text-[#006AFF]">submit a request</span>
                </div>
              </div>
              <div className="pl-[30px] pt-[40px]">
                <h1 className="text-[#34465D] text-[26px]">
                  Manager Information
                </h1>
                <div className="pt-[40px] ">
                  <div className="relative inline-flex items-center justify-center w-[450px] h-[100px] overflow-hidden bg-[#ffffff] border-2 rounded-lg">
                    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark: border-2">
                      <span className="font-medium text-gray-600 bg-[#34465D">
                        T
                      </span>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                      <h1>Thomas Kominsky</h1>
                      <h2 className="text-[#2B6CB0]">
                        tom.kominsky@foundationpartners.com
                      </h2>
                    </div>
                  </div>
                </div>
                <h1 className="pt-[20px]">Notifications</h1>
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
                          <div className="relative inline-flex items-center justify-center w-[50px] h-[30px] overflow-hidden bg-gray-100 rounded-full dark: border-2 bg-[#2DAF52]">
                            <img
                              className="pt-[0.7px] pl-[10px] "
                              src={Button}
                              alt="arrow"
                              width={35}
                              height={35}
                            ></img>
                          </div>
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
                          <div className="relative inline-flex items-center justify-center w-[50px] h-[30px] overflow-hidden bg-gray-100 rounded-full dark: border-2 bg-[#2DAF52]">
                            <img
                              className="pt-[0.7px] pl-[10px] "
                              src={Button}
                              alt="arrow"
                              width={35}
                              height={35}
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="text-[24px] pt-[20px]">Password</h1>
                <div className="relative inline-flex items-center justify-center mt-[20px] w-[300px] h-[70px] overflow-hidden bg-[#ffffff] border-2 rounded-lg border-[#F68C2B]">
                  <h1 className="text-[#F68C2B]">Password</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
