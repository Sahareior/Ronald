import { Button } from 'antd';
import React from 'react';

const SellersHero = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        className="w-full h-[90vh] object-cover"
        src="/image/sellHero.png"
        alt="Sell Hero"
      />

      {/* Overlay Content */}
      <div className="absolute top-2/4 md:left-28 left-6 -translate-y-1/2 text-white max-w-3xl space-y-16">
        <h2 className="text-3xl md:text-5xl popbold font-bold leading-tight drop-shadow">
          Sell on WIROKO — <br className="hidden md:block" />
          Reach Furniture Buyers Across Bangladesh
        </h2>
        <p className="popreg md:text-lg drop-shadow-sm">
          Join our curated marketplace and grow your home business with trusted tools.
        </p>
        <Button
          className="bg-[#CBA135] hover:bg-[#b8962e] py-6 popmed text-white font-medium px-9 rounded-md shadow-lg transition-all"
          type="primary"
        >
          Apply to Sell
        </Button>
      </div>
    </div>
  );
};

export default SellersHero;
