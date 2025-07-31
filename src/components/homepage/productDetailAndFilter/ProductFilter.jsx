import React, { useEffect, useState } from 'react';
import { Button, Checkbox, InputNumber, Select, Slider, Pagination, Rate } from 'antd';
import { FaRegHeart } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import Radio from 'antd/es/radio/radio';
import Breadcrumb from '../../others/Breadcrumb';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishList } from '../../../redux/slices/customerSlice';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const categories = ['Sofas', 'Sectionals', 'Loveseats','others'];
const brands = ['Home Decor Masters', 'Modern Living Co.', 'Vintage Comfort', 'Elite Furniture', 'Elegant Furniture Co.', 'other' , 'hudai', 'bata'];
const products = [
  {
    id: 1,
    title: "Modern Velvet Sofa",
    brand: "Wiroko",
    price: 1499,
    rating: 5,
    img: "https://plus.unsplash.com/premium_photo-1670914333023-2a7ce5c1d81e?q=80&w=406&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "Wooden Armchair",
    brand: "UrbanWood",
    price: 899,
    rating: 4,
    img: "https://plus.unsplash.com/premium_photo-1664302208993-45ca0f432f86?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "Minimalist Bookshelf",
    brand: "DecoHaus",
    price: 749,
    rating: 3,
    img: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 4,
    title: "Elegant Dining Set",
    brand: "FurniFlex",
    price: 1699,
    rating: 5,
    img: "https://plus.unsplash.com/premium_photo-1661687550812-0bccbefede13?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    title: "Compact Work Desk",
    brand: "LuxeNest",
    price: 1049,
    rating: 4,
    img: "https://plus.unsplash.com/premium_photo-1683141333921-b48175002172?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    title: "Leather Recliner",
    brand: "Oak & Co.",
    price: 1349,
    rating: 5,
    img: "https://plus.unsplash.com/premium_photo-1681487472337-2fdc042a0c57?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 7,
    title: "Glass Coffee Table",
    brand: "Homely",
    price: 659,
    rating: 3,
    img: "https://plus.unsplash.com/premium_photo-1681487762009-6c81a476c607?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
  },
  {
    id: 8,
    title: "Fabric Sectional Sofa",
    brand: "CraftEdge",
    price: 1899,
    rating: 4,
    img: "https://plus.unsplash.com/premium_photo-1661962231811-8863340f7cd1?q=80&w=783&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 9,
    title: "Rustic Bed Frame",
    brand: "CasaNova",
    price: 999,
    rating: 5,
    img: "https://plus.unsplash.com/premium_photo-1683129695003-6efed935dee1?q=80&w=959&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];



const ProductFilter = () => {
  const [priceRange, setPriceRange] = useState([500, 5000]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [availability, setAvailability] = useState(false);
  const [sort, setSort] = useState('Newest');

  const location = useLocation()

  const dispatch = useDispatch()
  console.log(location.pathname)

  const handleCart =(data)=>{
    dispatch(addToCart(data))
        MySwal.fire({
  position: 'top-end',
  icon: 'success',
  title: '<span style="font-family: Poppins, sans-serif;">Item added to cart!</span>',
  background: '#FFFFFF',
  customClass: {
    popup: 'rounded-xl shadow-lg',
    title: 'text-lg text-gray-800',
    icon: 'text-green-500'
  },
  showConfirmButton: false,
  timer: 1800,
  toast: true,
  didOpen: (toast) => {
    toast.style.border = '1px solid #e0e0e0';
    toast.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
  }
});
  }

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
<div className='bg-[#FAF8F2]'>
        <div className='flex p-6 gap-2 pb-6 pt-1'>
     <Breadcrumb />
    </div>
{
  location.pathname === "/filter" &&         <div className="flex gap-6 pb-12 px-20 ">
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
  <div className="h-34 popreg text-[#666666] overflow-y-scroll space-y-1 bg-white rounded-md px-2">
    {categories.map((item, index) => (
      <label key={index} className="flex items-center space-x-2 py-1 cursor-pointer">
        <input
          type="checkbox"
          value={item}
          className="w-4 h-4 border border-[#333] rounded-sm accent-[#CBA135] bg-white"
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
  <div className="h-40 text-[#666666] overflow-y-scroll bg-white rounded-md px-2">
    {brands.map((items) => (
      <label key={items} className="flex items-center space-x-2 py-1 cursor-pointer popreg">
        <input
          type="checkbox"
          value={items}
          className="w-4 h-4 border border-[#333] rounded-sm accent-[#CBA135] bg-white"
        />
        <span>{items}</span>
      </label>
    ))}
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

        <button  block className="bg-yellow-600 w-full px-4 py-2 rounded-md text-white hover:bg-yellow-700">
          Apply Filters
        </button>
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
  <div key={product.id} className="bg-white rounded-2xl shadow-md relative">
  {/* Only image is clickable */}
  <Link to='details'>
    <img
      src={product.img}
      alt={product.title}
      className="w-full rounded-t-2xl h-64 object-cover mb-4"
    />
  </Link>

  {/* Heart icon outside the Link */}
  <div
    onClick={(e) => {
      e.stopPropagation(); // prevent bubbling just in case
      dispatch(addToWishList(product));
         MySwal.fire({
  position: 'top-end',
  icon: 'success',
  title: '<span style="font-family: Poppins, sans-serif;">Item added to Wishlist!</span>',
  background: '#FFFFFF',
  customClass: {
    popup: 'rounded-xl shadow-lg',
    title: 'text-lg text-gray-800',
    icon: 'text-green-500'
  },
  showConfirmButton: false,
  timer: 1800,
  toast: true,
  didOpen: (toast) => {
    toast.style.border = '1px solid #e0e0e0';
    toast.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
  }
});
    }}
    className="absolute top-2 right-2 text-black w-8 h-8 flex items-center justify-center hover:text-red-500 bg-slate-100 rounded-full cursor-pointer text-xl"
    style={{
      boxShadow: '0px 2px 6px 0px #0000001A',
    }}
  >
    <FaRegHeart size={15} />
  </div>

  <div className="px-4 space-y-2 p-5">
    <h3 className="popmed text-lg">{product.title}</h3>
    <p className="text-sm popreg text-gray-500 mb-1">{product.brand}</p>
    <div className="flex gap-2">
      <Rate disabled defaultValue={product.rating} className="text-yellow-500 text-sm mb-1" />
      <p className="popreg">(123)</p>
    </div>
    <div className="flex justify-between items-center gap-10">
      <p className="text-[20px] popbold mb-3">${product.price}</p>
      <button
        onClick={() => handleCart(product)}
        type="primary"
        block
        className="bg-yellow-600 rounded-xl popreg max-w-[10rem] text-white py-2 px-4 hover:bg-yellow-700"
      >
        Add to Cart
      </button>
    </div>
  </div>
</div>

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
