import { AiOutlineClockCircle } from 'react-icons/ai';
import { TbDotsCircleHorizontal } from 'react-icons/tb';

function InfoCard(props: any) {
  return (
    <div className="rounded-xl bg-white w-[170px] h-[170px] flex flex-col items-center justify-center m-[20px]">
      {props.type ? (
        <AiOutlineClockCircle size={50} />
      ) : (
        <TbDotsCircleHorizontal size={50} />
      )}
      <p>approx</p>
      <p>10-20 mins</p>
    </div>
  );
}

export default InfoCard;
