import { Button } from 'antd';
import React from 'react';

const GrowWithUs = () => {
  return (
    <div className="bg-[#CBA135] py-16 px-6 text-center">
      <h2 className="text-white text-3xl md:text-4xl popbold font-bold mb-4">
        Ready to Grow Your Furniture Brand?
      </h2>
      <p className="text-white popreg text-lg mb-6">
        Get started in less than 5 minutes.
      </p>
      <Button
        type="primary"
        className="bg-white text-[#CBA135] popmed px-10 py-7 hover:opacity-90  border-none shadow-md"
      >
        Apply Now
      </Button>
    </div>
  );
};

export default GrowWithUs;
