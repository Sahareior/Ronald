import React from 'react';
import Navbar from '../_components/Navbar';
import CustomerHero from '../customersHomepage/CustomerHero';
import ShopCategory from '../customersHomepage/ShopCategory';
import FeaturedProducts from '../_components/FeaturedProducts';
import WhyUs from '../_components/WhyUs';
import StayUpdated from '../customersHomepage/StayUpdated';
import Customers from '../_components/Customers';
import Footer from '../_components/Footer';

const CustomerLayout = () => {
    return (
        <div>
            <Navbar />
            <CustomerHero />
            <ShopCategory />
            <FeaturedProducts />
            <WhyUs />
            <StayUpdated />
              <Customers />
              <div className='bg-[#E6E3DD] space-y-4 py-16'>
                <h2 className='text-center text-[30px] font-semibold'>About Us</h2>
                <p className='text-center max-w-5xl mx-auto text-[16px]'>
                    At WIROKO, we believe your home should reflect your taste, warmth, and comfort. That’s why we created a platform where trusted furniture makers meet quality-conscious shoppers. With timeless designs and a commitment to excellence, we help you furnish your space beautifully — with ease and elegance.
                </p>
              </div>
              <Footer />
        </div>
    );
};

export default CustomerLayout;