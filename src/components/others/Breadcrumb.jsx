import React from 'react';
import { FaChevronRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom'; // if you're using React Router


const Breadcrumb = () => {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Cart', path: '/cart' },
    { label: 'Checkout', path: '/checkout' },
  ];

  return (
    <nav className="flex items-center space-x-1 pt-3  text-sm text-gray-600 font-medium">
      {breadcrumbs.map((item, index) => (
        <div key={index} className="flex items-center">
          <Link to={item.path} className="hover:underline">
            {item.label}
          </Link>
          {index < breadcrumbs.length - 1 && (
            <FaChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
