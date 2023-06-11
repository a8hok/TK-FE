import { CgMoreVerticalR } from 'react-icons/cg';

export default function ReportBoxContent() {
  return (
    <div>
      <div>
        <div className="w-[90%] h-[55px] bg-[#ffffff] border-2 border-transparent border-b-zinc-200 ml-[50px] pt-[20px] pb-[20px] items-center flex  flex-row  ">
          <div>
            <p>Participation Report - October 2022</p>
          </div>
          <div className="pl-[45%]">
            <p className="text-[16px] text-[#707683] tracking-wide pr-[50px] pt-50px]">
              {new Date().getDate()}{' '}
              {new Date()
                .toLocaleString('en-us', { weekday: 'long' })
                .slice(0, 3)}
              ,{' '}
              {new Date()
                .toLocaleString('default', { month: 'long' })
                .slice(0, 3)}{' '}
              {new Date().getFullYear()}
            </p>
          </div>
          <div className="pl-[5%] c">
            <a href="participationreport">
              <CgMoreVerticalR />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
