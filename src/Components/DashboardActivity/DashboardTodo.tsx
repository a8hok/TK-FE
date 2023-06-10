import TodoIcon from '../Assets/todo.svg';
import DashboardTodoAction from './DashboardTodoAction';
export default function DashboardTodo() {
  return (
    <div>
      <div className="bg-white rounded-xl shadow-lg items-center w-[500px] h-[400px]">
        <div className=" flex justify-between items-center w-full p-[3%] ">
          <div className="flex items-center pl-[20px] w-[250px]">
            <img src={TodoIcon} alt="" />
            <p
              className="text-[20px] text-[#34465D] mx-[2%] "
              style={{ fontWeight: 500 }}
            >
              Things to do
            </p>
          </div>
          <p className="text-[14px] text-[#006AFF] ">View All</p>
        </div>
        <div className="overflow-y-auto w-[480px] pt-[10px] pl-[20px]">
          <DashboardTodoAction />
        </div>
      </div>
    </div>
  );
}
