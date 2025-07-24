import { Input } from 'antd';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdFavorite } from 'react-icons/md';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SellersNavbar = () => {
  return (
    <div className="w-full px-28 py-3 shadow-md flex justify-between items-center bg-white">
      {/* Left Section: Logo + Category */}
      <div className="flex justify-between w-2/6 items-center gap-6">
        <img src="/image/logo.png" alt="Logo" className="h-[32px] w-auto object-contain" />
       
      </div>

      {/* Right Section: Search + Actions */}
      <div className="flex items-center justify-end  w-3/6 gap-9">
       

        <div className="flex items-center gap-[1rem] text-sm font-medium">
          <Link to='/login'>
          <h4 className="cursor-pointer popreg hover:text-blue-600 transition">Already a seller? Log in</h4>
          </Link>
          <Link to='/regester-seller' className="cursor-pointer bg-[#CBA135] px-4 py-2 rounded-[8px] popreg text-white hover:text-blue-600 transition">Apply to Sell</Link>

        
        </div>
      </div>
    </div>
  );
};

export default SellersNavbar;
