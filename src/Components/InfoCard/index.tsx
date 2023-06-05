import { AiOutlineClockCircle } from 'react-icons/ai';
function InfoCard() {
  return (
    <div className="rounded-xl bg-white w-[170px] h-[170px] flex flex-col items-center justify-center m-[20px]">
      <AiOutlineClockCircle size={50} />
      <p>approx</p>
      <p>10-20 mins</p>
    </div>
  );
}

export default InfoCard;
