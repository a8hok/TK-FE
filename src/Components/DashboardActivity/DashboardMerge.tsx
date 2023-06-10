import DashboardHeader from '../DashboardActivity/DashboardHeader';
import DashboardSurvey from './DashboardSurvey';
import DashboardTodo from './DashboardTodo';
import DashboardProgress from './DashboardProgress';
export default function DashboardMerge() {
  return (
    <div>
      <DashboardHeader />
      <DashboardSurvey />
      <div className="flex flex-row pl-[50px] gap-[50px]">
        <DashboardTodo />
        <DashboardProgress />
      </div>
    </div>
  );
}
