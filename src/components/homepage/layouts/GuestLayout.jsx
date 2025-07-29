import React from 'react';
import Navbar from '../_components/Navbar';
import Hero from '../_components/Hero';
import FeaturedProducts from '../_components/FeaturedProducts';
import WhyUs from '../_components/WhyUs';
import Customers from '../_components/Customers';
import Coupon from '../_components/Coupon';
import Footer from '../_components/Footer';
import { useLocation } from 'react-router-dom';
import GuestFeaturedProduct from '../../others/GuestFeaturedProduct';

const GuestLayout = () => {
      const location = useLocation();

  // ✅ Only show homepage sections on "/"
  const isHomePage = location.pathname === '/';
    return (
        <div>
             <Navbar />
            <Hero />
            <GuestFeaturedProduct />
            <WhyUs />
            <Customers />
            <Coupon />
            <Footer />
        </div>
    );
};

export default GuestLayout;