import { Button } from 'antd';
import React, { useEffect, useState } from 'react';

const images = [
  'https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1677631658900-7a338a924aeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
  'https://plus.unsplash.com/premium_photo-1745496714251-ba97ba0f99a2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const CustomerHero = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Manual pagination control
  const handleDotClick = (index) => {
    setCurrent(index);
  };

  return (
<div>
        <div className="flex flex-col items-center md:flex-row justify-around p-6 py-24 gap-6" style={{
        background: 'linear-gradient(90deg, #EAE7E1 0%, #FAF8F2 100%)'
    }}>
      {/* Text Section */}
      <div className="max-w-xl space-y-3 text-center md:text-left">
        <h2 className="text-[48px] popbold mb-4 text-gray-800">
          Furnish Your Home with Timeless Elegance
        </h2>
        <h4 className="text-lg popreg mb-6 text-gray-600">
          Discover premium furniture that transforms your space into a warm, elegant home.
        </h4>
        <div className="flex justify-center md:justify-start gap-4">
          <Button className="bg-[#CBA135] py-5 text-white border-none popbold hover:bg-pink-500">
            Shop New Arrivals
          </Button>
          <Button className="bg-white py-5 popbold border-[#CBA135] px-8 text-[#CBA135] hover:bg-[#CBA135]/10">
            View Wishlist
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex flex-col justify-center items-center gap-3">
        <img
          className="w-[592px] h-[320px] object-cover rounded-lg shadow-md"
          src={images[current]}
          alt={`Slide ${current + 1}`}
        />


        {/* Pagination Dots */}
        <div className="  flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index ? 'bg-[#CBA135]' : 'bg-white border border-[#CBA135]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
    <div className='px-20 py-16 bg-[#FAF8F2]'>
        <h3 className='text-[36px] popbold font-bold'>Welcome back, Kabita</h3>
        <p className='text-[16px] popreg mt-2'>Here are some items you might love</p>
    </div>
</div>
  );
};

export default CustomerHero;
