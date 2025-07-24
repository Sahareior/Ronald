import { Avatar, Input } from 'antd';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdFavorite } from 'react-icons/md';
import { FaCartShopping } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';

const CustomersNavbar = () => {
    const navigate = useNavigate()
    const handleClick =()=>{
        navigate('/filter')
    }
  return (
    <div className="w-full px-28 py-3 shadow-md flex justify-between items-center bg-white">
      {/* Left Section: Logo + Category */}
      <div className="flex justify-between w-2/6 items-center gap-6">
        <Link to='/'>
        <img src="/image/logo.png" alt="Logo" className="h-[32px] w-auto object-contain" />
        </Link>
        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
          <h4 className="font-medium text-sm">Category</h4>
          <IoMdArrowDropdown size={16} />
        </div>
      </div>

      {/* Right Section: Search + Actions */}
      <div className="flex items-center justify-between  w-3/6 gap-24">
<input
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  placeholder="Search products..."
  className="w-full border border-[#E5E7EB]  px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#E5E7EB] rounded-xl"
/>



        <div className="flex items-center gap-[1rem] text-sm font-medium">

     <Link to='whitelist'>
          <MdFavorite
            size={22}
            className="cursor-pointer hover:text-red-500 transition"
          />
     </Link>
          <Link to='cart'>
          <FaCartShopping
            size={20}
            className="cursor-pointer hover:text-green-600 transition"
          />
          </Link>

<Link to="/profile" className="inline-block">
  <Avatar
    size={32}
    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop"
    alt="User Avatar"
  />
</Link>

        </div>
      </div>
    </div>
  );
};

export default CustomersNavbar;
