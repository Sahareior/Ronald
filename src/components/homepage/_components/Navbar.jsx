import { Input } from 'antd';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdFavorite } from 'react-icons/md';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-full px-28 py-3 shadow-md flex justify-between items-center bg-white">
      {/* Left Section: Logo + Category */}
      <div className="flex justify-between w-2/6 items-center gap-6">
        <img src="/image/logo.png" alt="Logo" className="h-[32px] w-auto object-contain" />
        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
         
        </div>
      </div>

      {/* Right Section: Search + Actions */}
      <div className="flex items-center justify-between  w-3/6 gap-9">
        <Input
         
          className="w-full rounded-md"
        />

        <div className="flex items-center gap-[1rem] text-sm font-medium">
          <Link to='/login'>
          <h4 className="cursor-pointer hover:text-blue-600 transition">Login</h4>
          </Link>
          <Link to='/signup'>
          
          <h4 className="cursor-pointer bg-[#CBA135] px-4 py-1 rounded-[8px] text-white hover:text-blue-600 transition">Register</h4>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
