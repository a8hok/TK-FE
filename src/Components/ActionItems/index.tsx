import Avatar from '../../assets/avatarContainer.svg';
const ActionItems = () => {
  return (
    <div className="flex border-t-2 border-[#E8E8E8] items-start p-[1.5%]pt-[2%]  w-full p-[1.5%]">
      <img alt=" " src={Avatar} />
      <div className="ml-[2%]">
        <p className="m">You have a New Leader named Nicci Troiani</p>
        <p className="border-2 w-fit p-[2%] rounded-md my-[3%]">
          Take First Fit Survey
        </p>
      </div>
    </div>
  );
};

export default ActionItems;
