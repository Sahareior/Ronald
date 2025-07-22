import { Button, Rate } from 'antd';
import React from 'react';
import Breadcrumb from '../others/Breadcrumb';

const WhiteList = () => {
    const categories = ['Sofas', 'Sectionals', 'Loveseats','others'];
const brands = ['Home Decor Masters', 'Modern Living Co.', 'Vintage Comfort', 'Elite Furniture', 'Elegant Furniture Co.', 'other' , 'hudai', 'bata'];

    const products = Array.from({ length: 9 }).map((_, index) => ({
  id: index + 1,
  title: `Sofa ${index + 1}`,
  brand: brands[index % brands.length],
  price: 1200 + index * 200,
  rating: (3 + (index % 3)),
  img: 'https://images.unsplash.com/photo-1577977404260-4bf12328b122?q=80&w=1169&auto=format&fit=crop'
}));
    return (
        <div className='mx-40 pb-9'>
            <Breadcrumb />

            <div className='py-4'>
                <p className='text-[30px] font-bold'>My Wishlist</p>
                <p className='text-[16px]'>Your saved favorites, all in one place.</p>
            </div>

                  <div className="grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white  rounded-2xl shadow-md relative">
              <img src={product.img} alt={product.title} className="w-full rounded-t-2xl h-64 object-cover  mb-4" />
             <div className='px-4 space-y-2 p-5'>
                 <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
              <div className='flex gap-2'>
                <Rate disabled defaultValue={product.rating} className="text-yellow-500 text-sm mb-1" />
                <p>(123)</p>
              </div>
                <div className='flex justify-between items-center gap-10'>
                                  <p className="text-lg font-bold mb-3">${product.price}</p>
              <Button type="primary" block className="bg-yellow-600 max-w-[10rem] py-5 hover:bg-yellow-700">
                Add to Cart
              </Button>
                </div>
             </div>
              {/* Wishlist icon (top right) */}
            <div className="absolute top-2 right-2 text-red-600 w-6 h-6 flex items-center justify-center hover:text-red-500 bg-slate-200 rounded-full cursor-pointer text-lg">
  ♡
</div>

            </div>
          ))}
        </div>
        </div>
    );
};

export default WhiteList;