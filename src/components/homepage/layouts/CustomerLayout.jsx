import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../_components/Navbar';
import CustomerHero from '../customersHomepage/CustomerHero';
import ShopCategory from '../customersHomepage/ShopCategory';
import FeaturedProducts from '../_components/FeaturedProducts';
import WhyUs from '../_components/WhyUs';
import StayUpdated from '../customersHomepage/StayUpdated';
import Customers from '../_components/Customers';
import Footer from '../_components/Footer';

const CustomerLayout = () => {
  const location = useLocation();

  // ✅ Only show homepage sections on "/"
  const isHomePage = location.pathname === '/';

  return (
    <div>
      <Navbar />

      {isHomePage && (
        <>
          <CustomerHero />
          <ShopCategory />
          <FeaturedProducts />
          <WhyUs />
          <StayUpdated />
          <Customers />
          <div className='bg-[#E6E3DD] space-y-4 py-16'>
            <h2 className='text-center text-[30px] font-semibold'>About Us</h2>
            <p className='text-center max-w-5xl mx-auto text-[16px]'>
              At WIROKO, we believe your home should reflect your taste, warmth, and comfort...
            </p>
          </div>
        </>
      )}

      <Outlet /> {/* ✅ This shows Cart/Checkout/etc only */}

      <Footer />
    </div>
  );
};

export default CustomerLayout;
