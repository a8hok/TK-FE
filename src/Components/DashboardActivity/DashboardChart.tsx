import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { IoTrendingUpOutline } from 'react-icons/io5';

const DashboardChart = () => {
  const data = [
    { name: 'LEI', x1: 32, y1: 68 },
    { name: 'OEI', x2: 22, y2: 76 },
    { name: 'JEI', x3: 53, y3: 47 },
    { name: 'CEI', x4: 44, y4: 56 },
    { name: 'ENPS', x5: 85, y5: 15 },
    { name: 'ER', x6: 62, y6: 38 },
    { name: 'SO', x7: 67, y7: 33 },
    { name: 'SG', x8: 28, y8: 72 },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row relative">
        <BarChart width={570} height={150} data={data}>
          <CartesianGrid opacity={0} />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 100]} />

          <Bar
            dataKey="x1"
            stackId="a"
            fill="#FFC400"
            barSize={23}
            radius={2}
          />
          <Bar
            dataKey="y1"
            stackId="a"
            fill="#fff3cc"
            barSize={23}
            radius={2}
          />
          <Bar
            dataKey="x2"
            stackId="a"
            fill="#E45553"
            barSize={23}
            radius={2}
          />
          <Bar
            dataKey="y2"
            stackId="a"
            fill="#faddde"
            barSize={23}
            radius={2}
          />
          <Bar
            dataKey="x3"
            stackId="a"
            fill="#2DAF52"
            barSize={23}
            radius={2}
          />
          <Bar
            dataKey="y3"
            stackId="a"
            fill="#d5efdc"
            barSize={23}
            radius={2}
          />
          <Bar
            dataKey="x4"
            stackId="a"
            fill="#FFC400"
            barSize={23}
            radius={2}
          />
          <Bar
            dataKey="y4"
            stackId="a"
            fill="#fff3cc"
            barSize={23}
            radius={2}
          />
          <Bar
            dataKey="x5"
            stackId="a"
            fill="#2DAF52"
            barSize={23}
            radius={2}
          />
          <Bar
            dataKey="y5"
            stackId="a"
            fill="#d5efdc"
            barSize={23}
            radius={2}
          />
          <Bar
            dataKey="x6"
            stackId="a"
            fill="#2DAF52"
            barSize={23}
            radius={2}
          />
          <Bar
            dataKey="y6"
            stackId="a"
            fill="#d5efdc"
            barSize={23}
            radius={2}
          />
          <Bar
            dataKey="x7"
            stackId="a"
            fill="#2DAF52"
            barSize={23}
            radius={2}
          />
          <Bar
            dataKey="y7"
            stackId="a"
            fill="#d5efdc"
            barSize={23}
            radius={2}
          />
          <Bar
            dataKey="x8"
            stackId="a"
            fill="#2DAF52"
            barSize={23}
            radius={2}
          />
          <Bar
            dataKey="y8"
            stackId="a"
            fill="#d5efdc"
            barSize={23}
            radius={2}
          />
        </BarChart>
        <div className="flex bg-white mr-[3%] my-[3%] rounded-lg  w-[110px] h-[75px] p-[3%] ml-[10px] border-[#E8E8E8] border-[3px]  ">
          <div className="flex gap-2 justify-start text-center my-[3%]">
            <IoTrendingUpOutline
              color="#2DAF52"
              fontSize="1em"
            ></IoTrendingUpOutline>
            <small className="text-[0.75em] text-TK-text">+12%</small>
          </div>
        </div>
      </div>

      <a className="text-[#006AFF] pl-[41%] pt-[8%] absolute " href="/reports">
        {' '}
        View Detail
      </a>
    </div>
  );
};

export default DashboardChart;
