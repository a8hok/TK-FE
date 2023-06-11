import ParticipationIcon from './Image/Participation-Icon.svg';
import Downarrow from '../Navbar/Image/Downarrow.svg';
import Leftarrow from './Image/leftarrow.svg';
export default function ParticipationHeader() {
  return (
    <div>
      <div className="h-fit">
        <div className="flex flex-row gap-[10px] ml-[50px] mt-[50px]">
          <img src={Leftarrow} alt="" />
          <a className="text-[#006AFF] text-[16px]" href="/reports">
            Back to Reports
          </a>
        </div>

        <div className="flex items-center w-full">
          <div className="flex items-center pl-[50px] pt-[40px]">
            <img src={ParticipationIcon} alt="" />
            <p className="text-[26px] cursor-pointer text-[#34465D] pl-[20px] ">
              Individual Participation Report - Jul 2022{' '}
            </p>
          </div>
          <div className="w-[140px] h-[35px] bg-[#ffffff] border-[2px] flex items-center rounded-[10px] ml-[35%]  mt-[50px] pl-[20px]">
            <p className="text-[14px] text-[#707683] tracking-wide  pt-50px]">
              {new Date()
                .toLocaleString('default', { month: 'long' })
                .slice(0, 3)}{' '}
              {new Date().getFullYear()}
            </p>
            <img className="pl-[10px]" src={Downarrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
