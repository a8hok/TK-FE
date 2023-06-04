import SurveyHeader from '../../Components/SurveyHeader';
import SurveyRadioBar from '../../Components/SurveyRadioBar';
import SurveyNavButton from '../../Components/SurveyNavButton';
import SurveyFooter from '../../Components/SurveyFooter';
import ProgressBar from '../../Components/ProgressBar';

function Survey() {
  return (
    <div>
      <SurveyHeader />
      <ProgressBar />
      <div className="pl-[25vw]">
        <div className="text-[#2DAF52] text-[16px] font-[600] mb-[41px] mt-[65px]">
          page 1 of 4
        </div>
        <div className="text-[24px] text-[#34465D] mb-[29px]">
          Section 2-Cont: Why are you leaving?
        </div>
        <div className="text-[16px] text-[#34465D] mb-[32px]">
          Use the following scale to rate how much influence each item had on
          your decision to leave:
        </div>
        <div className="bg-[#2B6CB0] w-[30vw] text-[0.8em] px-[20px] py-[10px] rounded-md mb-[34px]">
          1 = No influence 2 = Weak influence 3 = Moderate influence 4 = Strong
          influence 5 = Very strong influence
        </div>
        <SurveyRadioBar />
        <SurveyRadioBar />
        <SurveyRadioBar />
        <SurveyRadioBar />
        <SurveyNavButton />
      </div>
      <SurveyFooter />
    </div>
  );
}

export default Survey;
