import Report from './Image/report-icon.svg';
import SearchBar from './Image/searchBar.svg';
export default function ReportHeader() {
  return (
    <div className="h-fit">
      <div className="flex items-center w-full">
        <div className="flex items-center pl-[50px] pt-[50px]">
          <img src={Report} alt="" />
          <p className="text-[26px] cursor-pointer text-[#34465D] tracking-wide	 mx-[5%]">
            Reports
          </p>
        </div>
        <div className=" flex items-center pl-[57%] pt-[50px]">
          <div className="w-[50px] h-[50px] bg-[#ffffff] flex items-center border-l-2 border-y-2 pl-[20px] rounded-l-lg ">
            <img className="" src={SearchBar} alt="" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="flex items-center w-[230px] border-y-2 border-r-2 placeholder:text-[20px]  h-[50px] rounded-r-lg "
          ></input>
        </div>
      </div>
    </div>
  );
}
