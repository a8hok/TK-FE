import Logo from '../../Assets/PoweredBy.svg';

function SurveyFooter() {
  return (
    <div className="bg-white fixed bottom-0 flex justify-end h-[85px] items-center w-[100vw]">
      <img src={Logo} className="h-[5em] mb-[20px] mr-[45px]" alt="logo" />
    </div>
  );
}

export default SurveyFooter;
