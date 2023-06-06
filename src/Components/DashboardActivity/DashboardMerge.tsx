import DashboardHeader from '../DashboardActivity/DashboardHeader';
import DashboardMiddle from '../DashboardActivity/DashboardMiddle';
import Todo from '../TodoList/todo';
export default function DashboardMerge() {
  return (
    <div>
      <DashboardHeader />
      <DashboardMiddle />
      <Todo />
    </div>
  );
}
