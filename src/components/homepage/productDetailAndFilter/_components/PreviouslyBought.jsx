import React from 'react';

const products = [
  {
    id: 1,
    title: 'Modern Chair',
    price: 1122,
    image: '/image/featured/img1.png',
  },
  {
    id: 2,
    title: 'Modern Chair',
    price: 1122,
    image: '/image/featured/img1.png',
  },
  {
    id: 3,
    title: 'Modern Chair',
    price: 1122,
    image: '/image/featured/img1.png',
  },
  {
    id: 4,
    title: 'Modern Chair',
    price: 1122,
    image: '/image/featured/img1.png',
  },
  {
    id: 5,
    title: 'Modern Chair',
    price: 1122,
    image: '/image/featured/img1.png',
  },
  {
    id: 6,
    title: 'Modern Chair',
    price: 1122,
    image: '/image/featured/img1.png',
  },
  {
    id: 7,
    title: 'Modern Chair',
    price: 1122,
    image: '/image/featured/img1.png',
  },
  {
    id: 8,
    title: 'Modern Chair',
    price: 1122,
    image: '/image/featured/img1.png',
  },
 
];

const PreviouslyBought = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-9 gap-6  py-5">
      {products.map(({ id, title, price, image }) => (
        <div
          key={id}
          className="w-full bg-white rounded-xl shadow-md  transition-transform hover:scale-105 hover:shadow-lg"
        >
          <img src={image} alt={title} className="h-48 w-full object-cover rounded-md mb-4" />
<div className='p-4'>
              <h2 className="text-[16px] popreg mb-1">{title}</h2>
          <p className="text-[#CBA135] text-[16px] popreg">${price}</p>
</div>
        </div>
      ))}
    </div>
  );
};

export default PreviouslyBought;
