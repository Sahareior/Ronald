import { Avatar } from 'antd';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaCartShopping, FaRegHeart } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { GoHeart } from 'react-icons/go';
import { useEffect, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { IoExitOutline } from 'react-icons/io5';
import { RxExit } from 'react-icons/rx';

const CustomersNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout =() => {
        localStorage.setItem('token', " ");
localStorage.setItem('customerId', " ");
// navigate('/login')
  }

  const categories = [
    'Living Room',
    'Bedroom',
    'Dining Room',
    'Office Room',
    'Kitchen',
  ];

  const handleClick = () => {
    navigate('/filter');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full px-20 py-3 shadow-md flex justify-between items-center bg-white">
      {/* Left Section */}
      <div className="flex justify-between w-2/6 items-center gap-6">
        <Link to="/">
          <img
            src="/image/logo.png"
            alt="Logo"
            className="h-[32px] w-auto object-contain"
          />
        </Link>

        <div ref={dropdownRef} className="relative inline-block">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1 cursor-pointer hover:text-[#CBA135] transition"
          >
            <h4 className="font-medium text-sm">Category</h4>
            <IoMdArrowDropdown size={16} />
          </div>

          {isOpen && (
            <div className="absolute mt-2 w-40 bg-[#FAF8F2] shadow-lg rounded-md border border-gray-200 z-10">
              {categories.map((category) => (
                <div
                  key={category}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setIsOpen(false);
                    console.log('Selected:', category);
                  }}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-between w-3/6 gap-24">
        <div className="relative w-full">
          <input
            onKeyDown={(e) => e.key === 'Enter' && handleClick()}
            placeholder="Search products..."
            className="w-full border border-[#E5E7EB] px-4 py-2 pr-10 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#E5E7EB] rounded-xl"
          />
          <FiSearch
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            size={18}
            onClick={handleClick}
          />
        </div>

        <div className="flex items-center gap-[1rem] text-sm font-medium">
          <Link to="wishlist">
<FaRegHeart
 size={22}
              className="cursor-pointer  hover:text-red-500 transition"
/>
          </Link>
          <Link to="cart">
            <FaCartShopping
              size={20}
              className="cursor-pointer hover:text-[#CBA135] transition"
            />
          </Link>
          <Link to="/profile" className="inline-block">
            <Avatar
              size={32}
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop"
              alt="User Avatar"
            />
          </Link>
          <Link onClick={()=> handleLogout()} to='/login'>
          <RxExit size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomersNavbar;
