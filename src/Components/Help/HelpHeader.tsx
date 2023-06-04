import HelpIcon from './Image/help-icon.svg';
export default function HelpHeader() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-row pl-[70px] pt-[40px] gap-[20px]">
          <img
            className="pt-[0.7px] pl-[9.5px] "
            src={HelpIcon}
            alt="arrow"
            width={40}
            height={40}
          ></img>
          <h1 className="text-[#34465D] text-[26px]">Help</h1>
        </div>
      </div>
    </div>
  );
}
