import hat from '../Assets/graduation_hat.svg';
import ProgressCard from './progressCard';
const LinearProgressCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg items-center w-[50%] m-[2%] ">
      <div className=" flex justify-between items-center w-full p-[3%] border-b-[1.5px]">
        <div className="flex items-center w-full">
          <img src={hat} alt="" />
          <p
            className="text-[20px] text-[#34465D] mx-[2%] "
            style={{ fontWeight: 500 }}
          >
            Learning Center
          </p>
        </div>
        <p className="text-[14px] text-[#006AFF] ">View All</p>
      </div>
      <div className="flex justify-between">
        <ProgressCard />
        <ProgressCard />
        <ProgressCard />
      </div>
    </div>
  );
};

export default LinearProgressCard;
