import { MdDone, MdOutlineAttachMoney } from "react-icons/md";

import { FaCheck, FaPlus, FaShieldAlt } from "react-icons/fa";
import SalesOverview from "../../../AdminDashboard/pages/Overview/_subComponents/SalesOverview";
import { FaCartShopping } from "react-icons/fa6";


const VendorOverview = () => {
  const cards = [
    { title: "Total Revenue", value: "$127,500", change: "+12.5%", color: "#16A34A" },
    { title: "Total Orders", value: "3,420", change: "+8.2%", color: "#3B82F6" },
    { title: "New Users", value: "1,120", change: "+5.7%", color: "#10B981" },
    { title: "Bounce Rate", value: "23%", change: "-3.2%", color: "#EF4444" },


  ];

  return (
<div className="bg-[#FAF8F2] min-h-screen p-4">
  <p className="text-3xl popbold">
    Welcome back, <span className="text-[#CBA135] text-2xl popmed">Home Decor Masters</span>
  </p>

  {/* === Top Cards === */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8 mb-10">
    {cards.map((card, index) => (
      <div
        key={index}
        className="bg-white px-5 py-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 space-y-3 w-full"
      >
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-700">{card.title}</p>
          <MdOutlineAttachMoney className="text-[#CBA135]" size={26} />
        </div>
        <h3 className="text-3xl font-extrabold popbold text-gray-800">{card.value}</h3>
        <p className="text-sm font-medium" style={{ color: card.color }}>
          {card.change} from last month
        </p>
      </div>
    ))}
  </div>

  {/* === Quick Actions === */}
  <div className="w-full pb-6">
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg popbold text-gray-800 mb-6">Quick Actions</h3>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button className="bg-[#CBA135] text-white py-3 w-full sm:w-72 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition">
          <FaPlus /> Add New Product
        </button>
        <button className="bg-[#F3F4F6] text-gray-800 py-3 w-full sm:w-72 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition">
          <FaCheck /> Request Payout
        </button>
      </div>
    </div>
  </div>

  {/* === Bottom Section === */}
  <div className="flex flex-col lg:flex-row gap-6">
    {/* === Left Column === */}
    <div className="flex-1 flex flex-col space-y-6">
      <SalesOverview />

      <div className="bg-white rounded-md p-5">
        <p className="text-[20px] popbold pb-5">Recent Notifications</p>
        <div className="flex flex-col h-[40vh] overflow-y-auto gap-4">
          {[1, 2, 3, 4].map((items) => (
            <div
              key={items}
              className="flex items-start rounded-xl p-4 bg-[#F9FAFB] shadow-sm border border-gray-200 gap-4 hover:shadow-md transition-shadow"
            >
              <div className="text-lg text-[#CBA135] mt-1">
                <FaCartShopping />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500 font-medium">New Orders</p>
                <p className="text-base text-gray-800 font-semibold">
                  You have 3 new orders to fulfill
                </p>
                <p className="text-xs text-gray-400">2 hours ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* === Right Sidebar === */}
    <div className="w-full lg:w-5/12 flex flex-col  space-y-6">
      {/* Best Selling Products */}
      <div className="bg-white p-5 rounded-xl shadow-md">
        <p className="popbold text-[20px] mb-4">Best Selling Products</p>
        <div className="flex h-[40vh] overflow-y-scroll flex-col gap-4">
          {[1, 2, 3, 4].map((items) => (
            <div
              key={items}
              className="flex items-center justify-between gap-4 bg-[#F9FAFB] rounded-md border border-[#E5E7EB] p-3"
            >
              <div className="flex gap-3 items-center">
                <img
                  className="w-[65px] h-[65px] rounded object-cover"
                  src="https://assets.wfcdn.com/im/70824598/resize-h1200-w1200%5Ecompr-r85/3029/302904186/Wynny+27%22W+Round+Lift-Top+Wood+Coffee+Table+with+Storage-1840764940.jpg"
                  alt="product"
                />
                <div>
                  <h3 className="text-[16px] popmed text-[#2B2B2B]">Modern Dining Chair</h3>
                  <p className="popreg text-sm">124 sold this month</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[16px] popbold">$8,500</p>
                <p className="text-[#16A34A] text-sm popreg">+15%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <p className="text-[20px] popbold pb-2">Getting Started</p>
        <div className="bg-[#F9FAFB] p-4 mt-4 border border-[#E5E7EB] rounded-md">
          <p className="popmed text-[16px] mb-3">Onboarding Progress</p>

          {[1, 2].map((_, idx) => (
            <div key={idx} className="flex items-center gap-2 mb-2">
              <p className="bg-[#22C55E] text-white h-4 w-4 flex justify-center items-center rounded-full">
                <MdDone size={12} />
              </p>
              <p className="text-[14px] popreg text-[#4B5563]">Profile Setup Complete</p>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-2">
          <p className="text-[16px] popmed">Quick Help</p>
          <p className="flex items-center gap-2 text-sm text-gray-700">
            <FaShieldAlt /> Return Policies
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default VendorOverview;
