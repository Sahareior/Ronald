// components/Breadcrumb.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="text-sm text-gray-500 mb-4">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const to = '/' + pathnames.slice(0, index + 1).join('/');
        const label = decodeURIComponent(value.charAt(0).toUpperCase() + value.slice(1));

        return (
          <span key={to}>
            {' / '}
            <Link to={to} className="hover:underline">
              {label}
            </Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
