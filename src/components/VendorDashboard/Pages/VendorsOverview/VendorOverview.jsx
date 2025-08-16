import { MdDone, MdOutlineAttachMoney } from "react-icons/md";

import { FaBox, FaCheck, FaPlus, FaShieldAlt, FaWallet } from "react-icons/fa";
import SalesOverview from "../../../AdminDashboard/pages/Overview/_subComponents/SalesOverview";
import { FaCartShopping } from "react-icons/fa6";
import {
 
  MdOutlineShoppingCart,
  MdPeopleAlt,
  MdStore,
  MdInventory,
  MdReplay,
} from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import VendorOverViewModal from "../../../AdminDashboard/pages/Overview/_subComponents/VendorOverView";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetTopSellsQuery, useGetVendorPayoutQuery, useVendorDashboardQuery } from "../../../../redux/slices/Apis/vendorsApi";


const VendorOverview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {data,refetch} = useVendorDashboardQuery()
  const {data:payouts} = useGetVendorPayoutQuery()
  const {data:topProduct} = useGetTopSellsQuery()


  console.log('datataa', payouts)
const cards = [
  {
    title: "Total Products",
    value: data?.total_products?.count,
    change: `+ ${data?.total_products?.change}`,
    color: "#16A34A",
    icon: <FaBox className="text-[#CBA135]" size={26} />,
    footerText: "+12.5% from last month",
  },
  {
    title: "Sales This Month",
    value: data?.sales_this_month?.count,
    change: data?.sales_this_month?.week_change,
    color: "#16A34A",
    icon: <FaCartShopping className="text-[#2563EB]" size={26} />,
    footerText: "+8.2% this week",
  },
  {
    title: "Pending Orders",
    value: data?.pending_orders?.count,
    change: data?.pending_orders?.change,
    color: "#EA580C",
    icon: <IoIosTime className="text-[#EA580C]" size={26} />,
    footerText: "Needs attention",
  },
{
  title: "Earnings This Month",
  value: data?.earnings_this_month?.amount, // no extra curly braces
  change: `${data?.earnings_this_month?.change}%`, // proper template literal
  color: "#3B82F6",
  icon: <FaWallet className="text-[#3B82F6]" size={26} />,
  footerText: "Ready for payout",
}


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

  {/* === Quick Actions === */}
  <div className="w-full pb-6">
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg popbold text-gray-800 mb-6">Quick Actions</h3>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <Link to='/vendor-dashboard/addproducts'>
                <button className="bg-[#CBA135] text-white py-3 w-full sm:w-72 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition">
          <FaPlus /> Add New Product
        </button>
        </Link>
        <button onClick={()=> setIsModalOpen(true)} className="bg-[#F3F4F6] text-gray-800 py-3 w-full sm:w-72 hover:bg-slate-400 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition">
          <FaCheck /> Request Payout
        </button>
      </div>
    </div>
  </div>

  {/* === Bottom Section === */}
  <div className="flex flex-col lg:flex-row gap-6">
    {/* === Left Column === */}
    <div className="flex-1 flex flex-col space-y-6">
      <SalesOverview  />

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
  <div className="flex h-[60vh] overflow-y-scroll flex-col gap-4">
    {topProduct?.results?.map((items) => (
      <div
        key={items.id}
        className="flex items-center justify-between gap-4 bg-[#F9FAFB] rounded-md border border-[#E5E7EB] p-3"
      >
        {/* Left side: Image + Product info */}
        <div className="flex gap-3 items-center">
          <img
            className="w-[65px] h-[65px] rounded object-cover"
            src={
              items.images?.length > 0
                ? items.images[0] // Use first image from API
                : "https://via.placeholder.com/65" // Fallback image
            }
            alt={items.name}
          />
          <div>
            <h3 className="text-[16px] popmed text-[#2B2B2B]">
              {items.name}
            </h3>
            <p className="popreg text-sm">
              {items.total_quantity_sold} sold this month
            </p>
          </div>
        </div>

        {/* Right side: Price + Change */}
        <div className="text-right">
          <p className="text-[16px] popbold">
            ${parseFloat(items.active_price).toLocaleString()}
          </p>
          <p className="text-[#16A34A] text-sm popreg">
            +15% {/* Replace with real change if available */}
          </p>
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
  <VendorOverViewModal payouts={payouts} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
</div>

  );
};

export default VendorOverview;
