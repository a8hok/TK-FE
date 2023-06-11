import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BsChevronDown } from 'react-icons/bs';
import { TbQuestionMark } from 'react-icons/tb';
import DashboardChart from './DashboardChart';

function DashboardSurvey() {
  const percentage = 74;
  return (
    <div className="flex pl-[50px]">
      <div className="flex bg-white mr-[3%] my-[3%] rounded-lg shadow-xl w-[320px] p-[2%] gap-[10px] ">
        <div className="w-[150px] gap-[20px] flex flex-col">
          <p className="text-[18px] #34465D text-TK-text my-[2%] ">
            Incomplete Survey{' '}
          </p>
          <strong className="text-[34px] ">23</strong>
          <button
            className="w-[150px] bg-[#ffffff] h-[30px] text-[14px] text-[black] rounded-lg	border-gray-500/50 border-[2px]"
            type="button"
          >
            Resume Survey
          </button>
        </div>
        <div className=" w-[80px] h-[80px] pt-[40px] font-bold">
          <CircularProgressbar
            value={percentage}
            text={`+${percentage}%`}
            styles={buildStyles({
              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 3.5,

              pathColor: `rgba(0, 106, 255, ${percentage / 100})`,
              textColor: '#000000',
              trailColor: '#F0F4FF',
              backgroundColor: '#006AFF',
            })}
          />
        </div>
      </div>
      <div className="flex flex-col bg-white mr-[3%] my-[3%] rounded-lg shadow-xl w-[750px] p-[2%] gap-[10px]  ">
        <div className="flex flex-row">
          <h1>My TalentWatch Dashboard</h1>
          <div className="flex flex-row pl-[380px]">
            <p className="text-[16px]">
              {' '}
              {new Date()
                .toLocaleString('default', { month: 'long' })
                .slice(0, 3)}{' '}
              {new Date().getFullYear()}
            </p>
            <div className="pl-[5px]">
              <BsChevronDown />
            </div>
            <button className="w-[25px] h-[25px] border-2 border-[#E2E8F0] rounded-lg flex  p-[3%] ml-[9px]	">
              <TbQuestionMark />
            </button>
          </div>
        </div>
        <div>
          <DashboardChart />
        </div>
      </div>
    </div>
  );
}

export default DashboardSurvey;
