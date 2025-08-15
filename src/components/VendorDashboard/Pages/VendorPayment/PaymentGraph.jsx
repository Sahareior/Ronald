import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useVendorOverviewQuery } from '../../../../redux/slices/Apis/vendorsApi';

const PaymentGraph = () => {
  const { data: graph } = useVendorOverviewQuery();

  return (
    <div className="bg-white" style={{ width: '100%' }}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={graph?.sales_overview}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid stroke="#E5E5E5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip formatter={(val) => `$${val}`} />
          <Line
            connectNulls
            type="monotone"
            dataKey="value"
            stroke="#CBA135"
            fill="#CBA135"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PaymentGraph;
