//image imports
import UploadIcon from './Image/Upload-icon.svg';
import Fileicon from './Image/File-icon.svg';
import Searchicon from './Image/Search-icon.svg';

const ResourceUpload = () => {
  return (
    <div className="pt-12 flex  pl-[63px]">
      <div className="w-[136px] shadow-xl shadow-gray-200  rounded-s-[15px] h-[51px] items-center justify-center flex text-center text-[#006AFF] bg-white">
        <img src={UploadIcon} alt="upload-icon"></img>
        <p className="pl-[13px]">Upload</p>
      </div>
      <div className="bg-black h-[51px] w-[0.5px] font-medium text-[14px] opacity-10"></div>
      <div className="w-[182px] shadow-xl shadow-gray-200  flex items-center justify-center bg-white">
        <img src={Fileicon} alt="file-icon"></img>
        <p className="pl-[11px]">Create Folder</p>
      </div>
      <div className="bg-black h-[51px] w-[0.5px] font-medium text-[14px] opacity-10"></div>
      <div className="shadow-xl shadow-gray-200 ">
        <input className="w-[598px] h-[51px] bg-white "></input>
        <div className="h-[51px] rounded-e-[15px] items-center justify-center pr-[30px] w-[163px] text-[14px]  text-[#34465D] font-normal flex float-right bg-white">
          <img className="pr-[13px]" src={Searchicon} alt="search-icon"></img>
          Search for files
        </div>
      </div>
    </div>
  );
};

export default ResourceUpload;
