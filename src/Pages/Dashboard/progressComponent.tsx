import up from '../../assets/solar_graph-up.svg';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ProgressBar() {
  const percentage = 66;
  return (
    <div className="flex bg-white m-[5%] rounded-lg shadow-lg w-fit">
      <div>
        <p className="text-[1.125em]bg-TK-text">Survey Engagement</p>
        <strong className="text-[1.776em]">232</strong>
        <div className="flex justify-start text-center">
          <img src={up} alt="" />
          <small className="text-[0.75em] text-TK-text">+12%</small>
        </div>
      </div>
      <div className="w-[80px] h-[80px]">
        <CircularProgressbar value={percentage} text={`+${percentage}%`} />;
      </div>
    </div>
  );
}

export default ProgressBar;
