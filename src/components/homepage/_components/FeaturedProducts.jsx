import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import React from 'react';

const featuredProducts = [
  {
    id: 1,
    title: "Glass Coffee Table",
    subtitle: "Round, Chrome Base",
    price: "XAF 449",
    image: "https://images.unsplash.com/photo-1638962502979-05d81dcaa096?q=80&w=977&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Velvet Armchair",
    subtitle: "Comfort Luxe, Navy Blue",
    price: "XAF 699",
    image: "https://images.unsplash.com/photo-1697228428733-9e0f6b940dc1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Wooden TV Stand",
    subtitle: "Modern Walnut Finish",
    price: "XAF 549",
    image: "https://plus.unsplash.com/premium_photo-1673860150353-577f324e6920?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 4,
    title: "Dining Set",
    subtitle: "4 Chairs + Table, Solid Wood",
    price: "XAF 1,299",
    image: "https://plus.unsplash.com/premium_photo-1670914333023-2a7ce5c1d81e?q=80&w=406&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const FeaturedProducts = () => {
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
        <Link to="/filter">
          <h3 className="text-[#CBA135] font-medium cursor-pointer hover:underline">
            View All
          </h3>
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProducts.map((item) => (
          <div className='shadow-md' key={item.id}>
            <div className="bg-white rounded-xl transition relative">
              {/* Wishlist Icon */}
              <div className="absolute top-3 right-3 rounded-full p-2 shadow-sm cursor-pointer transition text-white bg-white/10 backdrop-blur-md hover:text-red-400">
                <AiFillHeart size={18} />
              </div>

              {/* Image */}
              <Link to="/details">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[192px] object-cover rounded-md mb-4"
                />
              </Link>

              {/* Info */}
              <div className="p-5">
                <h2 className="text-[16px] popbold text-gray-800">{item.title}</h2>
                <p className="text-sm popreg text-gray-500 mb-3">{item.subtitle}</p>
                <div className="flex justify-between items-center">
                  <h4 className="text-[#CBA135] popbold text-[16px]">{item.price}</h4>
                  <button className="bg-[#CBA135] rounded-md popbold text-white border-none px-4 py-1 rounded">
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

export default FeaturedProducts;
