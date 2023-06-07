import hat from '../Assets/graduation_hat.svg';
import ProgressCard from '../Linear_ProgressCard/progressCard';
export default function DashboardProgress() {
  return (
    <div className="bg-white rounded-xl shadow-lg  items-center w-[500px] mx-[1%] ">
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
        <p className="text-[14px] w-[90px] text-[#006AFF] ">View All</p>
      </div>
      <div className="flex  pl-[15px] gap-[30px]">
        <ProgressCard />
        <ProgressCard />
      </div>
    </div>
  );
}
