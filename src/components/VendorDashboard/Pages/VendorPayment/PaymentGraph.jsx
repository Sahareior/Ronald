import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Jan', uv: 10 },
  { name: 'Feb', uv: 3000 },
  { name: 'March', uv: 2000 },
  { name: 'April' },
  { name: 'May', uv: 1890 },
  { name: 'June', uv: 2390 },
  { name: 'July', uv: 3490 },
  { name: 'Aug', uv: 11490 },
];


const PaymentGraph = () => {
    return (
           <div className='bg-white' style={{ width: '100%' }}>
             <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
        <CartesianGrid stroke="#E5E5E5" />

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line connectNulls type="monotone" dataKey="uv" stroke="#CBA135" fill="#CBA135" />
        </LineChart>
      </ResponsiveContainer>
        </div>
    );
};

export default PaymentGraph;