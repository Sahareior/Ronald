import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const promotions = [
  {
    title: "Weekend Flash Sale",
    status: "Active",
    product: "Modern Sofa Set",
    extra: "+2 more products",
    discount: "25% OFF",
    duration: "Dec 15 – Dec 17",
    statusNote: "Ends in 2 days",
    badgeColor: "text-green-600",
    statusColor: "text-green-600",
  },
  {
    title: "New Year Mega Sale",
    status: "Scheduled",
    product: "Dining Table Set",
    extra: "+2 more products",
    discount: "25% OFF",
    duration: "Jan 1 – Jan 15",
    statusNote: "Starts in 15 days",
    badgeColor: "text-blue-600",
    statusColor: "text-blue-600",
  },
  {
    title: "Friday Deal",
    status: "Expired",
    product: "Office Chairs",
    extra: "+2 more products",
    discount: "25% OFF",
    duration: "Jan 1 – Jan 15",
    statusNote: "15 items sold",
    badgeColor: "text-gray-500",
    statusColor: "text-green-600",
  },
];

const PromotionsList = () => {
  return (
    <div className="p-6 bg-[#FAF8F2] min-h-screen">
      <div className="flex justify-between py-6 items-center mb-4">
        <h2 className="text-lg popreg text-gray-700">
          Manage your promotional campaigns and boost sales
        </h2>
        <button className="bg-yellow-600 popmed text-[16px] text-white font-medium px-4 py-2 rounded-md hover:bg-yellow-700">
          + Create New Promotion
        </button>
      </div>

      <div className="mb-6 flex flex-wrap bg-white p-5 py-6 rounded-sm shadow-sm items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Search promotions..."
          className="flex-1 border px-4 py-2 rounded-md max-w-sm"
        />
        <p className="text-sm text-gray-500">Showing 12 of 28 promotions</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotions.map((promo, index) => (
          <div key={index} className="bg-[#EAE7E1] p-5  rounded-xl shadow-sm border">
            <h3 className="text-[18px] mb-1 popbold text-gray-800">{promo.title}</h3>
           <p
  className={` font-medium text-center popmed text-xs rounded-full px-3 w-24 py-1 bg-[#DCFCE7] ${promo.badgeColor}`}
>
  {promo.status}
</p>


            <div className="mt-3 flex items-center gap-3">
              <img
                src="https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="product"
                className="w-12 h-12 object-cover rounded-md"
              />
              <div>
                <p className="font-medium text-[16px] popmed text-[#333333]">{promo.product}</p>
                <p className="text-sm text-[#666666]">{promo.extra}</p>
              </div>
            </div>

            <div className="mt-4 px-3 space-y-1">
              <p className="text-sm flex text-[#CBA135] popbold justify-between ">
                <span className="font-medium popreg text-[#666666]  ">Discount:</span> {promo.discount}
              </p>
              <p className="text-sm flex popreg justify-between ">
                <span className="font-medium popreg text-[#666666]">Duration:</span> {promo.duration}
              </p>
              <p className={`text-sm  flex justify-between popmed text-[#666666] ${promo.statusColor}`}>
                Status: <span>{promo.statusNote}</span>
              </p>
            </div>

<div className="mt-5 flex gap-3">
  <button className="flex items-center justify-center gap-2 flex-1 bg-yellow-600 text-white py-2.5 rounded-lg hover:bg-yellow-700 transition-all duration-200 text-sm font-medium">
    <FaEdit className="text-base" />
    Edit
  </button>

  <button className="flex items-center justify-center gap-2 flex-1 bg-red-500 text-white py-2.5 rounded-lg hover:bg-red-600 transition-all duration-200 text-sm font-medium">
    <FaTrash className="text-base" />
    Delete
  </button>
</div>

          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button className="px-6 py-2 border border-[#D1D5DB] bg-white rounded-md hover:bg-gray-100">
          Load More Promotions
        </button>
      </div>
    </div>
  );
};

export default PromotionsList;
