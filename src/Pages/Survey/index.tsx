import SurveyHeader from '../../Components/SurveyHeader';
import NumberedRadioButton from '../../Components/NumberedRadioButton';
import SurveyNavButton from '../../Components/SurveyNavButton';
import SurveyFooter from '../../Components/SurveyFooter';
import ProgressBar from '../../Components/ProgressBar';
import BinaryRadioBar from '../../Components/BinaryRadioBar';
import SummaryTextBox from '../../Components/SummaryTextBox';
import RadioBar from '../../Components/RadioBar';

function Survey() {
  return (
    <div className="bg-survey-bg bg-no-repeat bg-cover min-h-[100vh]">
      <SurveyHeader />
      <ProgressBar />
      <div className="pl-[25vw]">
        <div className="text-[#2DAF52] text-[16px] font-[600] mb-[41px] mt-[65px]">
          page 1 of 4
        </div>
        <div>
          <p className="text-[20px] font-[500] mt-[40px]">Instructions</p>
          <p className="text-[16px] font-[400] mt-[26px] w-[40vw]">
            It is very important that you be completely honest in answering
            these questions. Your answers will help the organization provide the
            best work situation possible and address any concerns you had as an
            employee.
          </p>
        </div>
        <div className="text-[24px] text-[#34465D] mb-[29px] mt-[27px]">
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
        <NumberedRadioButton />
        <NumberedRadioButton />
        <NumberedRadioButton />
        <NumberedRadioButton />
        <RadioBar />
        <BinaryRadioBar />
        <SummaryTextBox />
        <SurveyNavButton />
      </div>
      <SurveyFooter />
    </div>
  );
}

export default Survey;
