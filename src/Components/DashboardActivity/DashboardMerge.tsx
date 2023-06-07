import DashboardHeader from '../DashboardActivity/DashboardHeader';
import DashboardMiddle from '../DashboardActivity/DashboardMiddle';
import DashboardTodo from './DashboardTodo';
import DashboardProgress from './DashboardProgress';
export default function DashboardMerge() {
  return (
    <div>
      <DashboardHeader />
      <DashboardMiddle />
      <div className="flex flex-row pl-[50px] gap-[50px]">
        <DashboardTodo />
        <DashboardProgress />
      </div>
    </div>
  );
}
