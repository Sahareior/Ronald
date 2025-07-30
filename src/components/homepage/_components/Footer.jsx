import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import CustomModal from '../../checkout/modal/CustomModal';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo and description */}
        <div>
          <img src="/image/footer.png" alt="WIROKO Logo" className="w-[180px] mb-4" />
          <p className="text-[#E5E7EB] popreg mb-4">
            Premium luxury furniture marketplace connecting you with the finest furniture makers.
          </p>
          <p className="mb-2 text-[16px] popbold text-[#E5E7EB]">Follow Us</p>
          <div className="flex gap-4 text-[#CBA135]">
            <a href="#"><FaFacebookF className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl popbold text-[#FAF8F2] font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-[#FAF8F2] popreg text-lg">
            <li><a href="#" className="hover:text-white">Living Room</a></li>
            <li><a href="#" className="hover:text-white">Bedroom</a></li>
            <li><a href="#" className="hover:text-white">Dining Room</a></li>
            <li><a href="#" className="hover:text-white">Office Room</a></li>
            <li><a href="#" className="hover:text-white">Kitchen</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl popbold text-[#FAF8F2] font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-[#FAF8F2] popreg text-lg">
            <li onClick={() => setIsModalOpen(true)} className="cursor-pointer hover:text-white">Track Order</li>
            <li><Link to="/active" className="hover:text-white">Help Center/Live Chat</Link></li>
            <li><Link to="/return" className="hover:text-white">Return Request</Link></li>
            <li><Link to="/return-policy" className="hover:text-white">Return Policy</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl popbold text-[#FAF8F2] font-semibold mb-4">Categories</h3>
         <ul className="space-y-2 text-[#FAF8F2] popreg text-lg">
            <li><Link to="/" className="hover:text-white">About Us</Link></li>
         
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} WIROKO. All rights reserved.</p>
<div className='flex items-center gap-6'>
          <Link to="/privacy" className="mt-2 md:mt-0 hover:text-white">
          Privacy Policy
        </Link>

           <Link to="/terms&conditions" className="hover:text-white">Terms & Conditions</Link>
</div>
      </div>

      <CustomModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </footer>
  );
};

export default Footer;
