import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Living Room",
    image: "https://plus.unsplash.com/premium_photo-1669324450657-1dbd23d8c6d4?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/filter?category=living-room",
  },
  {
    id: 2,
    title: "Bedroom",
    image: "https://plus.unsplash.com/premium_photo-1746718185719-a05ffddf579d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/filter?category=bedroom",
  },
  {
    id: 3,
    title: "Office",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWUlMjBmdXJuaXR1cmV8ZW58MHx8MHx8fDA%3D",
    link: "/filter?category=office",
  },
];

const ShopCategory = () => {
  return (
    <div className="px-6 md:px-16 py-8">
      <h3 className="text-center text-[30px] popmed pb-9">Shop by Category</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-xl shadow hover:shadow-md w-full transition relative"
            style={{
              boxShadow: "0px 10px 15px 0px #0000001A",
            }}
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-[192px] object-cover rounded-t-xl"
            />

            <div className="p-4 flex flex-col items-center mt-4 pb-5 gap-4">
              <h2 className="text-lg popreg font-semibold text-gray-800 text-center">
                {category.title}
              </h2>

              <Link to={category.link}>
                <button className="bg-[#CBA135] popreg text-white border-none px-6 py-1.5 rounded">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
