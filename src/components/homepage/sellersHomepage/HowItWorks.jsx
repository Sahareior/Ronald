import React from 'react';

const steps = [
  {
    title: 'Create Account',
    description: 'Create a free seller account',
  },
  {
    title: 'List Products',
    description: 'Add images, prices, and variations',
  },
  {
    title: 'Start Selling',
    description: 'Publish and manage your products',
  },
  {
    title: 'Get Paid',
    description: 'Receive payments securely',
  },
];

const HowItWorks = () => {
  return (
    <div className="py-16 px-6 md:px-20">
      <h3 className="text-3xl md:text-4xl popbold text-center mb-12">
        How It Works
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
        {steps.map((step, index) => (
          <div key={index} className="space-y-3 text-center max-w-xs">
            <div className="w-11 h-11 mx-auto rounded-full flex items-center justify-center text-white bg-[#CBA135] text-sm font-medium">
              {index + 1}
            </div>
            <p className="text-lg popmed">{step.title}</p>
            <p className="text-sm popreg text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
