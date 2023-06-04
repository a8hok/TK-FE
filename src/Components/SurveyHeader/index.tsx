import Logo from '../Assets/logoSmall.svg';
import { CgNotes } from 'react-icons/cg';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function SurveyHeader() {
  return (
    <div className="flex justify-between items-center h-[90px]">
      <div className="flex items-center mt-[15px] ml-[60px]">
        <img src={Logo} alt="logo" />
        <div className="flex items-center ml-[95px]">
          <CgNotes size={24} />
          <p className="text-[20px] font-[500] ml-[11px]">
            TalentWatch General Survey
          </p>
        </div>
      </div>
      <div className="mr-[16px] mt-[10px]">
        <AiOutlineCloseCircle size={42} color={'#E45553'} />
      </div>
    </div>
  );
}

export default SurveyHeader;
