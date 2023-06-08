import { AiOutlineClockCircle } from 'react-icons/ai';
import { TbDotsCircleHorizontal } from 'react-icons/tb';

interface propType {
  data: {
    type: boolean;
    time?: string;
    section?: number;
    question?: number;
  };
}
function InfoCard(props: propType) {
  return (
    <div className="rounded-xl bg-white w-[170px] h-[170px] flex flex-col items-center justify-center m-[20px]">
      {props.data.type ? (
        <>
          <AiOutlineClockCircle size={50} />
          <p>APPROX</p>
          <p>{props.data.time}</p>
        </>
      ) : (
        <>
          <TbDotsCircleHorizontal size={50} />
          <p>{props.data.section} Sections</p>
          <p>{props.data.question} Question</p>
        </>
      )}
    </div>
  );
}

export default InfoCard;
