import SurveyHeader from '../../Components/SurveyHeader';
import NumberedRadioButton from '../../Components/NumberedRadioButton';
import SurveyNavButton from '../../Components/SurveyNavButton';
import SurveyFooter from '../../Components/SurveyFooter';
import ProgressBar from '../../Components/ProgressBar';
import BinaryRadioBar from '../../Components/BinaryRadioBar';
import SummaryTextBox from '../../Components/SummaryTextBox';
import RadioBar from '../../Components/RadioBar';

interface props {
  surveyDataProps: {
    type: number;
    instructions?: string;
    question: string;
    description?: string;
    options: Array<string>;
    summaryQuestion?: string;
  };
}
function Survey(surveyData: props) {
  return (
    <div className="bg-survey-bg bg-no-repeat bg-cover min-h-[100vh]">
      <SurveyHeader />
      <ProgressBar currentProgress={10} />
      <div className="pl-[25vw]">
        <div className="text-[#2DAF52] text-[16px] font-[600] mb-[41px] mt-[65px]">
          page 1 of 4
        </div>
        {surveyData.surveyDataProps.type === 1 && (
          <div>
            <p className="text-[20px] font-[500] mt-[40px]">Instructions</p>
            <p className="text-[16px] font-[400] mt-[26px] w-[40vw]">
              {surveyData.surveyDataProps.instructions}
            </p>
          </div>
        )}
        <div className="text-[24px] text-[#34465D] mb-[29px] mt-[27px]">
          {surveyData.surveyDataProps.question}
        </div>
        {surveyData.surveyDataProps.description && (
          <div className="text-[16px] text-[#34465D] mb-[32px]">
            {surveyData.surveyDataProps.description}
          </div>
        )}
        {surveyData.surveyDataProps.type == 2 && (
          <div className="bg-[#2B6CB0] w-[30vw] text-[0.8em] px-[20px] py-[10px] rounded-md mb-[34px]">
            1 = No influence 2 = Weak influence 3 = Moderate influence 4 =
            Strong influence 5 = Very strong influence
          </div>
        )}
        {surveyData.surveyDataProps.type == 1 &&
          surveyData.surveyDataProps.options.map(question => (
            <RadioBar key={question} questionData={question} />
          ))}
        {surveyData.surveyDataProps.type == 2 &&
          surveyData.surveyDataProps.options.map((question: string) => (
            <NumberedRadioButton questionProp={question} key={question} />
          ))}
        {surveyData.surveyDataProps.type == 3 &&
          surveyData.surveyDataProps.options.map((question: string) => (
            <BinaryRadioBar questionProp={question} key={question} />
          ))}
        {surveyData.surveyDataProps.summaryQuestion && (
          <SummaryTextBox
            questionProp={surveyData.surveyDataProps.summaryQuestion}
          />
        )}
        <SurveyNavButton />
      </div>
      <SurveyFooter />
    </div>
  );
}

export default Survey;
