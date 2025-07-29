import { Button } from 'antd';
import React from 'react';
import { GoHeart } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const GuestFeaturedProduct = () => {
  const navigate = useNavigate();

  const handleGuestClick = () => {
    Swal.fire({
      title: 'Please Sign In',
      text: 'You need to sign in to view details.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#CBA135',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sign In',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login'); // Replace with your login route
      }
    });
  };

  return (
    <div className="p-20 bg-[#FAF8F2] space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-[30px] popbold font-extrabold">Featured Products</h2>
          <p className="text-[18px] text-gray-600">
            Explore our curated furniture categories
          </p>
        </div>
        <h3 className="text-[#CBA135] font-medium cursor-pointer hover:underline">
          View All
        </h3>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item}>
            <div className="bg-white rounded-xl transition relative">
              {/* Wishlist Icon */}
              <div
                onClick={handleGuestClick}
                className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-sm cursor-pointer hover:text-[#CBA135] transition"
              >
                <GoHeart />
              </div>

              {/* Image */}
              <div onClick={handleGuestClick}>
                <img
                  src="/image/featured/img1.png"
                  alt="Glass Coffee Table"
                  className="w-full h-[192px] object-cover rounded-md mb-4"
                />
              </div>

              <div className="p-5">
                {/* Title + Subtitle */}
                <h2 className="text-[16px] popbold text-gray-800">Glass Coffee Table</h2>
                <p className="text-sm popreg text-gray-500 mb-3">Round, Chrome Base</p>

                {/* Price + Button */}
                <div className="flex justify-between items-center">
                  <h4 className="text-[#CBA135] popbold text-[16px]">XAF 449</h4>
                  <button
                    className="bg-[#CBA135] popbold text-white border-none px-4 py-[6px] rounded"
                    onClick={handleGuestClick}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestFeaturedProduct;
