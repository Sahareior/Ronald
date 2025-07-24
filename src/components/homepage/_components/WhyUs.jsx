import { FaHammer } from "react-icons/fa";

const WhyUs = () => {
  return (
    <div className="py-16 px-4 bg-[#E6E3DD] text-center">
      <h2 className="text-3xl popmed mb-10 text-gray-800">Why Choose WIROKO</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-24 gap-8">
        {[1, 2, 3].map((_, idx) => (
          <div key={idx} className="flex  flex-col items-center text-center gap-4">
            <FaHammer className="w-11 h-11 p-3 rounded-full bg-[#CBA135] text-white" />
            <h3 className="text-lg popreg text-gray-700">Quality Craftsmanship</h3>
            <p className="text-gray-600 popreg max-w-sm">
              Handpicked furniture made with premium materials and attention to detail
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
