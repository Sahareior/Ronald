import { Button } from 'antd';
import React from 'react';
import { HeartOutlined } from '@ant-design/icons'; // Optional icon

const ShopCategory = () => {
  return (
    <div className="px-16 py-8">

        <h3 className='text-center text-[30px] font-semibold pb-9'>Shop by Category</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white rounded-xl shadow hover:shadow-md h-[25rem]  w-full transition relative"
            style={{
                boxShadow: '0px 10px 15px 0px #0000001A'
            }}
          >
            {/* Wishlist or icon top-right */}


            {/* Product image */}
            <img
              src="/image/featured/img1.png"
              alt="Glass Coffee Table"
              className="w-full h-[192px] object-cover rounded-t-xl"
            />

            {/* Product info */}
            <div className="p-4 flex flex-col items-center mt-12 gap-4">
              <h2 className="text-lg font-semibold text-gray-800 text-center">
                Glass Coffee Table
              </h2>

              <Button className="bg-[#CBA135] text-white border-none px-6 py-1.5 rounded">
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
// box-shadow: 0px 10px 15px 0px #0000001A;

// box-shadow: 0px 4px 6px 0px #0000001A;
