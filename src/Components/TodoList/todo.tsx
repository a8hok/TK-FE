import ActionItems from '../ActionItems';
import TodoIcon from '../../assets/todo.svg';
function Todo() {
  return (
    <div className="bg-white rounded-xl shadow-lg items-center w-[50%]">
      <div className=" flex justify-between items-center w-full p-[3%] ">
        <div className="flex items-center w-full">
          <img src={TodoIcon} alt="" />
          <p
            className="text-[20px] text-[#34465D] mx-[2%]"
            style={{ fontWeight: 500 }}
          >
            Things to do
          </p>
        </div>
        <p className="text-[14px] text-[#006AFF] ">View All</p>
      </div>
      <ActionItems />
    </div>
  );
}

export default Todo;
