import { BsCloudDownload } from 'react-icons/bs';
import Downarrow from '../Navbar/Image/Downarrow.svg';

export default function ParticipationSecond() {
  return (
    <div>
      <div className="flex flex-row gap-[50px] pl-[50px]  pt-[50px] items-center">
        <p className="text-[#006AFF]">Incomplete Managers Review</p>
        <p>Incomplete Leaders OAP</p>
        <p>Completed OAP</p>
        <div className="w-[210px] h-[50px] border-[2px] flex flex-row bg-[#ffffff] gap-[10px] pl-[20px] ml-[17%] items-center rounded-[10px]">
          <BsCloudDownload />
          <p className="text-[14px]">Download Report</p>
          <img className="w-[10px] h-[5px]" src={Downarrow} alt="" />
        </div>
      </div>
    </div>
  );
}
