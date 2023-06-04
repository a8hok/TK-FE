import { IoTrendingUpOutline } from 'react-icons/io5';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ProgressBar() {
  const percentage = 66;
  return (
    <div className="flex bg-white my-[5%] rounded-lg shadow-xl w-fit p-[1.5%]">
      <div className="w-full justify-center items-center">
        <p className="text-[1.125em]bg-TK-text my-[2%] ">Survey Engagement</p>
        <strong className="text-[1.776em] my-[3%]">232</strong>
        <div className="flex gap-2 justify-start text-center my-[2%]">
          <IoTrendingUpOutline
            color="#2DAF52"
            fontSize="1em"
          ></IoTrendingUpOutline>
          <small className="text-[0.75em] text-TK-text">+12%</small>
        </div>
      </div>
      <div className=" w-[200px] h-[100px] mx-[3%]">
        <CircularProgressbar
          value={percentage}
          text={`+${percentage}%`}
          styles={buildStyles({
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 3.5,

            pathColor: `rgba(0, 106, 255, ${percentage / 100})`,
            textColor: '#000000',
            trailColor: '#F0F4FF',
            backgroundColor: '#F0F4FF',
          })}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
