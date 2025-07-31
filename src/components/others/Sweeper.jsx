import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { LiaStarSolid } from 'react-icons/lia';

// Extended review data
const reviews = [
  {
    name: 'Sahareior Sijan',
    review: 'Absolutely love my new sofa! The quality is exceptional room.',
  },
  {
    name: 'John Doe',
    review: 'Beautiful craftsmanship and fast delivery. I will definitely buy again!',
  },
  {
    name: 'Jane Smith',
    review: 'The furniture is stylish and sturdy. Great experience overall!',
  },
  {
    name: 'Emily Watson',
    review: 'Fantastic service and beautiful pieces. I get compliments all the time!',
  },
  {
    name: 'Carlos Rivera',
    review: 'From ordering to delivery, everything was smooth. Highly recommend!',
  },
  {
    name: 'Amira Khan',
    review: 'Solid build and beautiful design. Exactly what I was looking for.',
  },
];

export default function Sweeper() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[ Autoplay]}
      className="mySwiper"
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {reviews.map((item, idx) => (
        <SwiperSlide className='pb-4' key={idx}>
          <div className="flex justify-center px-1">
            <div className="w-full sm:w-11/12 md:w-11/12 lg:w-full p-6 bg-white rounded-xl shadow-md transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                  {item.name.split(' ')[0][0]}
                  {item.name.split(' ')[1] ? item.name.split(' ')[1][0] : ''}
                </div>
                <div>
                  <h4 className="popreg text-gray-800">{item.name}</h4>
                  <div className="flex gap-1 text-[#CBA135]">
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </div>
                </div>
              </div>
              <p className="text-gray-700 popreg italic mb-4">“{item.review}”</p>
              <img
                className="w-16 h-16 object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1501028391897-5c5eae694383?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Product"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
