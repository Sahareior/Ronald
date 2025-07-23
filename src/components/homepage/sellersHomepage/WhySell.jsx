import { FaHammer } from "react-icons/fa";

const WhySell = () => {
  return (
    <div className="py-16 px-4 bg-[#FFFFFF] text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Why Choose WIROKO</h2>
      <p className="text-[20px] text-center">Join Bangladesh's premier furniture marketplace</p>

      <div className="grid grid-cols-1 px-24 md:grid-cols-3 mt-24 gap-8">
        {[1, 2, 3].map((_, idx) => (
          <div key={idx} className="flex flex-col p-6 py-12 rounded-xl bg-[#FAF8F2] items-center text-center gap-4">
            <FaHammer className="w-11 h-11 p-3 rounded-full bg-[#CBA135] text-white" />
            <h3 className="text-lg font-semibold text-gray-700">Quality Craftsmanship</h3>
            <p className="text-gray-600 max-w-sm">
              Handpicked furniture made with premium materials and attention to detail
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySell;
