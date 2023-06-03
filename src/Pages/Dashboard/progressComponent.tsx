import up from '../../assets/solar_graph-up.svg';

function ProgressBar() {
  return (
    <div className="bg-white m-[5%] rounded-lg shadow-lg w-fit">
      <div>
        <p className="text-[1.125em]bg-TK-text">Survey Engagement</p>
        <strong className="text-[1.776em]">232</strong>
        <div className="flex justify-start text-center">
          <img src={up} alt="" />
          <small className="text-[0.75em] text-TK-text">+12%</small>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
