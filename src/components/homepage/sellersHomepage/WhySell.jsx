import { FaHammer, FaShieldAlt, FaLock, FaTools } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { RiCustomerService2Fill } from "react-icons/ri";

const features = [
  {
    icon: <FiTarget className="w-14 h-14 p-3 rounded-full bg-[#CBA135] text-white" />,
    title: "Furniture-Only Focus",
    description: "Niche platform for home goods —reach your exact audience.",
  },
  {
    icon: <FaTools  className="w-14 h-14 p-3 rounded-full bg-[#CBA135] text-white" />,
    title: "Powerful Seller Tools",
    description: "Dashboard, inventory, orders,promotions, and payouts.",
  },
  {
    icon: <RiCustomerService2Fill   className=" p-3 w-14 h-14 rounded-full bg-[#CBA135] text-white" />,
    title: "Real Support Team",
    description: "Local help to guide you at every step.",
  },
];

const WhySell = () => {
  return (
    <div className="py-16 pb-24 px-4 bg-[#FFFFFF] text-center">
      <h2 className="text-3xl popmed mb-10 text-gray-800">Why Choose WIROKO</h2>

      <div className="grid grid-cols-1 px-10 md:grid-cols-3 mt-14 gap-8">
        {features.map((item, idx) => (
          <div key={idx} className="flex rounded-md flex-col bg-[#FAF8F2] p-3 py-8 items-center text-center gap-4">
            {item.icon}
            <h3 className="text-lg popbold text-[24px] text-gray-700">{item.title}</h3>
            <p className="text-gray-600 popreg max-w-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySell;
