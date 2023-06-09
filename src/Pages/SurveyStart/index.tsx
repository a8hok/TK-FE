import SurveyHeader from '../../Components/SurveyHeader';
import SurveyFooter from '../../Components/SurveyFooter';
import Logo from '../../Components/Assets/surveyCricket.svg';
import { BsQuestionSquare } from 'react-icons/bs';
import InfoCard from '../../Components/InfoCard';
import { useNavigate } from 'react-router-dom';
import ApplicationData from '../../../ApplicationData.json';

function SurveyStart() {
  const navigate = useNavigate();
  return (
    <div className="bg-survey-bg bg-no-repeat bg-cover min-h-[100vh]">
      <SurveyHeader />
      <div className="flex flex-col items-center justify-center">
        <img
          src={Logo}
          alt="logo"
          className="w-[100px] h-[100px] mt-[110px] mb-[25px]"
        />
        <p className="text-[24px] font-[500] mb-[20px]">
          TalentWatch General Survey
        </p>
        <p className="text-center text-[16px] font-[400] mb-[10px]">
          Thank you for participating in the survey.
          <br />
          This survey will take you approximately 10-12 minutes to complete.
        </p>
        <div className="flex justify-around items-center mb-[38px] text-[#2B6CB0]">
          <BsQuestionSquare color="#2B6CB0" />
          <p className="ml-[15px]">Know more about this survey</p>
        </div>
        <div className="flex">
          <InfoCard data={{ type: true, time: ApplicationData.time }} />
          <InfoCard
            data={{
              type: false,
              section: ApplicationData.sections,
              question: ApplicationData.totalQuestions,
            }}
          />
        </div>

        <button
          className="rounded-md text-white bg-[#F68C2B] w-[285px] h-[50px] mt-[58px]"
          onClick={() => {
            localStorage.setItem('question', '0');

            navigate('/survey');
          }}
        >
          Let&apos;s start
        </button>
      </div>
      <SurveyFooter />
    </div>
  );
}

export default SurveyStart;
