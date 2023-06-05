import ProgressBar from '../../Components/ProgressBar';
import SurveyFooter from '../../Components/SurveyFooter';
import SurveyHeader from '../../Components/SurveyHeader';
import Logo from '../../Components/Assets/surveyEndCricket.svg';

function SurveyEnd() {
  return (
    <div className="bg-survey-bg bg-no-repeat bg-cover min-h-[100vh]">
      <SurveyHeader />
      <ProgressBar />
      <div className="flex flex-col justify-center items-center mt-[175px]">
        <img src={Logo} alt="logo" className="w-[100px] h-[100px]" />
        <p className="text-[24px] font-[500] mt-[65px]">
          Thank you for completing this TalentWatch survey.
        </p>
        <p className="w-[550px] text-[16px] font-[400] mt-[25px] text-center">
          Please make sure you complete all TalentWatch surveys from the
          Dashboard. This includes one TalentWatch survey on each person you
          report to and one TalentWatch General Survey.
        </p>
        <button className="rounded-md text-white bg-[#F68C2B] w-[285px] h-[50px] mt-[58px]">
          Close this Window
        </button>
      </div>
      <SurveyFooter />
    </div>
  );
}

export default SurveyEnd;
