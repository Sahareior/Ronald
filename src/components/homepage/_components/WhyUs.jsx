import { FaHammer, FaShieldAlt, FaLock } from "react-icons/fa";

const features = [
  {
    icon: <FaHammer className="w-14 h-14 p-3 rounded-full bg-[#CBA135] text-white" />,
    title: "Quality Craftsmanship",
    description: "Handcrafted furniture made with premium materials and expert attention to detail.",
  },
  {
    icon: <FaShieldAlt className="w-14 h-14 p-3 rounded-full bg-[#CBA135] text-white" />,
    title: "Trusted Seller",
    description: "Thousands of happy customers and a reputation built on reliability and transparency.",
  },
  {
    icon: <FaLock  className=" p-3 w-14 h-14 rounded-full bg-[#CBA135] text-white" />,
    title: "Secure Payment",
    description: "Encrypted transactions ensure your personal and payment information stays safe.",
  },
];

const WhyUs = () => {
  return (
    <div className="py-16 px-4 bg-[#E6E3DD] text-center">
      <h2 className="text-3xl popmed mb-10 text-gray-800">Why Choose WIROKO</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-14 gap-8">
        {features.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center gap-4">
            {item.icon}
            <h3 className="text-lg popreg text-gray-700">{item.title}</h3>
            <p className="text-gray-600 popreg max-w-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
