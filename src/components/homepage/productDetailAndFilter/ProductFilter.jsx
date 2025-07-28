import React, { useState } from 'react';
import { Button, Checkbox, InputNumber, Select, Slider, Pagination, Rate } from 'antd';
import { RxCross1 } from "react-icons/rx";
import Radio from 'antd/es/radio/radio';
import Breadcrumb from '../../others/Breadcrumb';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';

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

const ProductFilter = () => {
  const [priceRange, setPriceRange] = useState([500, 5000]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [availability, setAvailability] = useState(false);
  const [sort, setSort] = useState('Newest');

  const location = useLocation()

  console.log(location.pathname)

  return (
<div className='bg-[#FAF8F2]'>
        <div className='flex px-40 gap-2 pb-6 pt-1'>
     <Breadcrumb />
    </div>
{
  location.pathname === "/filter" &&         <div className="flex gap-6 p-7 px-40 ">
      {/* Filters */}


<div>

          <div className="w-72 bg-white p-4 ">
        {/* filters */}
        <div className='flex justify-between '>
            <h3 className="text-lg popbold mb-2">Filters</h3>
            <Button className='border-none popmed'>Clear All</Button>
        </div>
<div className="my-4">
  <p className="popmed mb-2">Category</p>
  <div className="h-20 popreg text-[#666666] overflow-y-scroll space-y-1">
    {categories.map((item, index) => (
      <label key={index} className="flex items-center space-x-2">
        <input
          type="checkbox"
          value={item}
          className="accent-[#CBA135]"
        />
        <span>{item}</span>
      </label>
    ))}
  </div>
</div>


        <div className="my-4">
          <p className="popmed mb-2">Price Range</p>
          <Slider
            range
            min={100}
            max={5000}
            step={100}
            value={priceRange}
            onChange={setPriceRange}
          />
          <div className="flex justify-between popreg text-sm">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        <div className="my-4">
          <p className="font-medium popmed mb-2">Brand</p>
<div className='h-40 text-[#666666] overflow-y-scroll'>
           {
        brands.map(items=>(
            <label key={items} className="flex popreg items-center space-x-2">
        <input
          type="checkbox"
          value={items}
          className="accent-[#CBA135]"
        />
        <span >{items}</span>
      </label>
        ))
       }
</div>
        </div>

        <div className="my-4">
          <p className="popmed mb-2">Customer Rating</p>
          <div className="space-y-2">
            {[5, 4, 3].map((stars) => (
              <div key={stars}>
                <Radio
                className='rounded-full'
                  checked={selectedRating === stars}
                  onChange={() => setSelectedRating(stars)}
                >
                  <div className='flex  gap-3'>
                    <Rate className='text-sm' disabled defaultValue={stars} /> <p className='text-[#666666] popreg'>4 stars</p>
                  </div>
                </Radio>
              </div>
            ))}
          </div>
        </div>

        <div className="my-7">
              <p className="popmed mb-2">Availability</p>
          <Checkbox className='text-[#666666] popreg' onChange={(e) => setAvailability(e.target.checked)}>In Stock Only</Checkbox>
        </div>

        <Button type="primary" block className="bg-yellow-600 hover:bg-yellow-700">
          Apply Filters
        </Button>
      </div>
</div>

      {/* Product Section */}
      <div className="flex-1 px-6">
        <div className="flex justify-between items-center mb-1">
          <div>
            <h2 className="text-2xl popbold">Search Results for "modern sofa"</h2>
            <p className="text-gray-500 popreg">24 products found</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#666666] popreg">Sort by:</span>
           <div className='relative'>
             <Select className='w-36 popreg relative' value={sort} onChange={setSort} options={[{ value: 'Newest' }, { value: 'Price: Low to High' }, { value: 'Price: High to Low' }]} />
            <RiArrowDropDownLine size={20} className='absolute top-2 right-2' />
           </div>
          </div>
        </div>
<div className='flex flex-1 pb-5 py-3 gap-2'>
{
  [1,2,3,4].map(items=>(
      <div className='bg-[#CBA135]  px-4 py-1 rounded-2xl'>
<p className='flex text-white popreg text-xl items-center gap-1'>Sofas <RxCross1 /></p>
  </div>
  ))
}
</div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 m sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link to='details' key={product.id} className="bg-white  rounded-2xl shadow-md relative">
              <img src={product.img} alt={product.title} className="w-full rounded-t-2xl h-64 object-cover  mb-4" />
             <div className='px-4 space-y-2 p-5'>
                 <h3 className="popmed text-lg">{product.title}</h3>
              <p className="text-sm popreg text-gray-500 mb-1">{product.brand}</p>
              <div className='flex gap-2'>
                <Rate disabled defaultValue={product.rating} className="text-yellow-500 text-sm mb-1" />
                <p className='popreg'>(123)</p>
              </div>
                <div className='flex justify-between items-center gap-10'>
                                  <p className="text-[20px] popbold mb-3">${product.price}</p>
              <Button type="primary" block className="bg-yellow-600 rounded-xl popreg max-w-[10rem] py-5 hover:bg-yellow-700">
                Add to Cart
              </Button>
                </div>
             </div>
              {/* Wishlist icon (top right) */}
            <div className="absolute top-2 right-2 text-black w-6 h-6 flex items-center justify-center hover:text-red-500 bg-slate-200 rounded-full cursor-pointer text-xl">
  ♡
</div>

            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-end">
          
          <Pagination defaultCurrent={1} total={24} pageSize={9} />
        </div>
      </div>
    </div>
}
<Outlet />
</div>
  );
};

export default ProductFilter;
