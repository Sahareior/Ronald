import { MdOutlineAttachMoney } from "react-icons/md";
import SalesOverview from "./_subComponents/SalesOverview";
import DashTable from "./_subComponents/DashTable";
import { FaCheck, FaPlus } from "react-icons/fa";

const DashHome = () => {
  const cards = [
    { title: "Total Revenue", value: "$127,500", change: "+12.5%", color: "#16A34A" },
    { title: "Total Orders", value: "3,420", change: "+8.2%", color: "#3B82F6" },
    { title: "New Users", value: "1,120", change: "+5.7%", color: "#10B981" },
    { title: "Bounce Rate", value: "23%", change: "-3.2%", color: "#EF4444" },
    { title: "Total Visits", value: "15,300", change: "+9.1%", color: "#8B5CF6" },
    { title: "Subscriptions", value: "980", change: "+4.6%", color: "#F59E0B" },
  ];

  return (
    <div className="bg-[#FAF8F2] min-h-screen p-6">
      {/* === Top Cards === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 mb-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300 space-y-3 py-11 w-full"
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

      {/* === Bottom Section === */}
      <div className="flex flex-col lg:flex-row gap-6 min-h-[600px]">
        {/* === Left Column === */}
        <div className="flex-1 flex flex-col space-y-6">
          <SalesOverview />

          <div className="bg-white p-6 rounded-xl shadow-md flex-1">
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-semibold text-gray-800">Latest Orders</p>
              <button className="text-[#CBA135] text-sm font-medium hover:underline">
                View All
              </button>
            </div>
            <DashTable />
          </div>
        </div>

        {/* === Right Sidebar === */}
        <div className="w-full lg:w-1/4 flex flex-col justify-between space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="bg-[#CBA135] text-white py-3 px-4 rounded-xl w-full flex items-center gap-2 hover:opacity-90">
                <FaPlus /> Add New Product
              </button>
              <button className="bg-[#EAE7E1] text-gray-800 py-3 px-4 rounded-xl w-full flex items-center gap-2 hover:opacity-90">
                <FaCheck /> Approve Sellers
              </button>
            </div>
          </div>

          {/* Recent Alerts */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-lg font-semibold pb-2">Recent Alerts</p>
            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2" />
                  <div>
                    <p className="text-sm text-gray-700">Low stock alert for "Modern Sofa Set"</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Categories & Top Sellers */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div>
              <p className="text-lg font-semibold pb-2">Top Categories</p>
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex justify-between items-center py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500" />
                    <p className="text-sm text-gray-700">Living Room</p>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">34%</p>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <p className="text-lg font-semibold pb-2">Top Seller/Vendor</p>
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex justify-between items-center py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-red-500" />
                    <p className="text-sm text-gray-700">Living Room</p>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">34%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashHome;
