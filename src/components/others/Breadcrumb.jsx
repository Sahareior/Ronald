// components/Breadcrumb.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineChevronRight } from 'react-icons/hi';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="text-sm text-gray-600 mb-5" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center space-x-1">
        <li>
          <Link to="/" className="hover:text-black font-medium">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = '/' + pathnames.slice(0, index + 1).join('/');
          const label =
            decodeURIComponent(value.charAt(0).toUpperCase() + value.slice(1));

          return (
            <li key={to} className="flex items-center space-x-1">
              <HiOutlineChevronRight className="text-gray-400 text-base" />
              <Link
                to={to}
                className="hover:text-black text-gray-500 font-medium transition-colors"
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
