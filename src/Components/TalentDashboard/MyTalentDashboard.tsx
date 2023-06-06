import Leftarrow from './Image/Left_arrow.svg';
import Tabelwatch from './Image/tabelwatch.svg';
import Zoom from './Image/Zoom.svg';
import More from './Image/more.svg';
import LinearProgress from '@mui/material/LinearProgress';
const MyTalentDashboard = () => {
  return (
    <div className="">
      <div className="flex pl-[63.5px] pt-[44px]">
        <img
          alt="left-icon"
          className="pt-[3.6px] w-fit h-fit"
          src={Leftarrow}
        ></img>
        <p className="text-[#006AFF] text-[16px] font-medium pl-[10.5px]">
          Back to Dashboard
        </p>
      </div>
      <div className="pl-[68.33px]">
        <div className=" flex pt-[32px]  w-full">
          <img alt="tabel-watch-icon" src={Tabelwatch}></img>
          <p className="text-[#34465D] pl-[12.33px] text-[26px] font-medium ">
            My TalentWatch Dashboard
          </p>
        </div>
        <div className="pt-[33px] ">
          <div className="bg-white max-w-[510px] w-full pt-[29px] pl-10  rounded-[15px]  ">
            <div className="justify-between items-center flex font-semibold text-[16px] text-[#34465D]">
              <p className="  ">LEI - Leader Engagement Index</p>
              <div className="flex pl-[143.5px]">
                <img className="pr-[21.5px]" src={Zoom} alt="zoom-icon"></img>
                <img className="pr-[38px]" src={More} alt="more-icon"></img>
              </div>
            </div>

            <div className="pt-[34px]">
              <div className="flex ">
                <div className="font-normal w-[117px] h-[18px] text-[#707683] text-[12px]">
                  Foundation Pa
                </div>
                <div className="w-full mt-[5px] pr-[43px] pl-[33px] h-2">
                  <LinearProgress
                    sx={{ width: '277px', height: '8px', borderRadius: '2px' }}
                    variant="determinate"
                    value={70}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTalentDashboard;
