import { MdDone, MdOutlineAttachMoney } from "react-icons/md";
import { FaBox, FaCheck, FaPlus, FaShieldAlt, FaWallet } from "react-icons/fa";
import { FaAngleDown, FaDownload, FaFilePdf } from "react-icons/fa";
import SalesOverview from "../../../AdminDashboard/pages/Overview/_subComponents/SalesOverview";
import { FaCartShopping } from "react-icons/fa6";
import DashTable from "../../../AdminDashboard/pages/Overview/_subComponents/DashTable";
import { Button } from "antd";
import PaymentGraph from "./PaymentGraph";
import { IoIosTime } from "react-icons/io";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import VendorTable from "./VendorTable";
import { useGetVendorPaymentStatQuery } from "../../../../redux/slices/Apis/vendorsApi";


const VendorPayment = () => {
const {data:paymentState} = useGetVendorPaymentStatQuery()

console.log(paymentState)

const cards = [
  {
    title: "Total Sales",
    value: `$ ${paymentState?.total_sales?.amount}`,
    change: `+ ${paymentState?.total_sales?.change}%`,
    color: "#16A34A",
    icon: <FaBox className="text-[#CBA135]" size={26} />,
    footerText: "+12.5% from last month",
  },
  {
    title: "Paid Out",
    value: paymentState?.paid_out?.count,
    change: `+ ${paymentState?.paid_out?.week_change}%`,
    color: "#16A34A",
    icon: <IoCheckmarkDoneCircleSharp className="text-[#2563EB]" size={26} />,
    footerText: "+8.2% this week",
  },
  {
    title: "Pending Payout",
    value: paymentState?.pending_payout?.count,
    change: `+${paymentState?.pending_payout?.change}%`,
    color: "#EA580C",
    icon: <IoIosTime className="text-[#EA580C]" size={26} />,
    footerText: "Needs attention",
  },
  {
    title: "Total Orders",
    value: `${paymentState?.total_orders?.count}`,
    change: `-${paymentState?.total_orders?.change}%`,
    color: "#3B82F6",
    icon: <FaCartShopping className="text-[#3B82F6]" size={26} />,
    footerText: "Ready for payout",
  },

];

  return (
<div className="bg-[#FAF8F2] min-h-screen p-4">
  <p className="text-3xl popbold">
    Welcome back, <span className="text-[#CBA135] text-2xl popmed">Home Decor Masters</span>
  </p>

  {/* === Top Cards === */}
<div className="grid grid-cols-1 sm:grid-cols-2 mt-5 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
  {cards.map((card, index) => (
    <div
      key={index}
      className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300 space-y-3 py-11 w-full"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-700">{card.title}</p>
        {card.icon}
      </div>
      <h3 className="text-3xl font-extrabold popbold text-gray-800">{card.value}</h3>
      <p className="text-sm font-medium" style={{ color: card.color }}>
        {card.change} – {card.footerText}
      </p>
    </div>
  ))}
</div>


  {/* === Bottom Section === */}
  <div className="flex flex-col lg:flex-row gap-6">
    {/* === Left Column === */}
    <div className="flex-1 flex flex-col space-y-6">
      <div className="bg-white shadow-md p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div>
          <p className="text-[20px] popbold text-gray-800 pb-1">Sales Performance</p>
          <p className="text-[15px] popreg text-gray-600">Track your sales trends over time</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button className="bg-white border border-gray-300 flex items-center gap-2 text-gray-700 hover:!border-gray-400 hover:!text-black px-4">
           Export CSV <FaAngleDown />
          </Button>
          <Button className="bg-white border flex items-center gap-2 border-gray-300 text-gray-700 hover:!border-gray-400 hover:!text-black px-4">
          Download PDF <FaAngleDown /> 
          </Button>
        </div>
      </div>
        <PaymentGraph />
      </div>

 <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
        <div>
          <p className="text-[20px] popbold text-gray-800 pb-1">Recent Notifications</p>
          <p className="text-[15px] popreg text-gray-600">View all your payout transactions</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button className="bg-white border border-gray-300 flex items-center gap-2 text-gray-700 hover:!border-gray-400 hover:!text-black px-4">
           <FaDownload /> Export CSV
          </Button>
          <Button className="bg-white border flex items-center gap-2 border-gray-300 text-gray-700 hover:!border-gray-400 hover:!text-black px-4">
           <FaFilePdf /> Download PDF
          </Button>
        </div>
      </div>
      <VendorTable />
    </div>
    </div>

    {/* === Right Sidebar === */}

  </div>
</div>

  );
};

export default VendorPayment;
