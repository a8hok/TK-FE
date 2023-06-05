//image imports
import uparrow from './Image/uparrow-icon.svg';
import downarrow from './Image/downarrow-icon.svg';
//constant imports
import { ResourcesFiles } from '../../Constants';
//package imports
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ResourceFiles = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(event);
    setPage(value);
  };
  const pagecount = Math.ceil(ResourcesFiles.length / 5);
  console.log(pagecount);
  const indexOfLastPost = page * 5;
  const indexOfFirstPost = indexOfLastPost - 5;
  const data = ResourcesFiles.slice(indexOfFirstPost, indexOfLastPost);
  console.log(data);
  return (
    <div className="text-[#34465D] text-[26px] font-medium pt-8 pl-[63px]">
      Files
      <div className="bg-[#C6D5FE] h-[61px] mt-8 rounded-tr-[15px]  rounded-tl-[15px] w-[90%] flex justify-between items-center font-medium text-[14px] mr-[61px]">
        <div className="flex justify-between items-center">
          <p className="pr-9 pl-8 ">No.</p>
          <div className="flex items-center justify-center ">
            File Name
            <div className=" pl-3 pt-[1px] flex flex-col w-fit gap-y-[3px]">
              <img src={uparrow} alt="up-arrow "></img>
              <img src={downarrow} alt="down-arrow "></img>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center ">
            Uploaded
            <div className=" pl-5 pt-[1px] flex flex-col w-fit gap-y-[3px]">
              <img src={uparrow} alt="up-arrow "></img>
              <img src={downarrow} alt="down-arrow "></img>
            </div>
          </div>
          <div className="flex pl-[45px] items-center justify-center ">
            Size
            <div className="  pl-5  pt-[1px] flex flex-col pr-[170px]  w-fit gap-y-[3px]">
              <img src={uparrow} alt="up-arrow "></img>
              <img src={downarrow} alt="down-arrow "></img>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] h-full rounded-b-[15px] shadow-xl shadow-gray-200 bg-[#C6D5FE] ">
        <div className="w-full h-full rounded-[15px]   bg-white">
          {data?.map((obj, index) => (
            <div key={index}>
              <div className="bg-black  ml-8 opacity-10 w-[90%] h-[0.5px]"></div>
              <div className="font-medium text-[14px] flex justify-between items-center">
                <div className="flex justify-between items-center">
                  <p className="pr-9 pl-8 text-xs font-normal">{obj.No}</p>
                  <img src={obj.DocType} alt="Doc-icon"></img>
                  <p className="p-[15px]">{obj.FileName}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="w-[86px] h-[17px] mr-[48px] font-normal">
                    {obj.UplodedDate}
                  </p>
                  <p className="font-normal w-[72px] h-[17px]">{obj.Size}</p>
                  <button className=" mx-12 border-[1px] border-[#006AFF] font-normal text-[13px] text-[#006AFF] border-solid text-center rounded w-[62px] h-8">
                    {obj.AccessType}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex pt-[32px] w-[90%]  items-center justify-between pr-[61px]">
        <Stack spacing={2}>
          <Pagination
            className=""
            count={pagecount}
            shape="rounded"
            color="primary"
            page={page}
            boundaryCount={2}
            siblingCount={1}
            onChange={handleChange}
          />
        </Stack>
        <div className="text-[#626262] w-[173px] h-[35px] bg-white rounded-[5px] flex  items-center justify-center text-[14px] font-semibold">
          <p>
            {indexOfLastPost} of {ResourcesFiles.length}{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResourceFiles;
