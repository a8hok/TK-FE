import Banner from '../../assets/Rectangle1.svg';
const ProgressCard = () => {
  return (
    <div className="w-[200px] m-[2%] h-fit bg-learningcenter relative border rounded-2xl">
      <img src={Banner} alt="" className="h-[250px] w-[200px] " />
      <div className=" absolute top-[50%] m-[10%]">
        <p className="text-[18px] text-[#707683] w-fit ">
          Handshake connection
        </p>
        <div className="flex justify-between w-full"></div>
      </div>
      <div className="flex justify-between absolute bottom-0 m-[10%]">
        <p className="text-[10px] text-[#34465D]  "> Completed: 35%</p>
        <p className="text-[10px] text-[#34465D] ">Days: 5/12</p>
      </div>
    </div>
  );
};

export default ProgressCard;
