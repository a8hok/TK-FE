import TodoIcon from '../../assets/todo.svg';
function Todo() {
  return (
    <div
      className="bg-white rounded-xl shadow-lg w-fit p-[1%] background: #006AFF;
    items-center"
    >
      <div className=" flex justify-between items-center">
        <div className="flex items-center">
          <img src={TodoIcon} alt="" />
          <p className="text-[18px] text-[#34465D]">Things to do</p>
        </div>
        <p className="text-[14px] text-[#006AFF]">View All</p>
      </div>
    </div>
  );
}

export default Todo;
