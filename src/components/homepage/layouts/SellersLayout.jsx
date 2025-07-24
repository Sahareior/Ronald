import React from 'react';
import SellersHero from '../sellersHomepage/SellersHero';
import WhySell from '../sellersHomepage/WhySell';
import VendorFeatureOverview from '../sellersHomepage/VendorFeatureOverview';
import Customers from '../_components/Customers';
import HowItWorks from '../sellersHomepage/HowItWorks';
import GrowWithUs from '../sellersHomepage/GrowWithUs';
import WhyUs from '../_components/WhyUs';
import Footer from '../_components/Footer';
import SellersNavbar from '../sellersHomepage/SellersNavbar';
import SellerVideo from '../sellersHomepage/SellerVideo';
import { Outlet, useLocation } from 'react-router-dom';

const SellersLayout = () => {

      const location = useLocation();

  // ✅ Only show homepage sections on "/"
  const isHomePage = location.pathname === '/';
    return (
        <div>
            <SellersNavbar />
         {
            isHomePage && (
                <>
                   <SellersHero />
            <WhySell />
            <VendorFeatureOverview />
            <SellerVideo />
             <Customers />
             <HowItWorks />
             <GrowWithUs />
             <div className='bg-[#E6E3DD] space-y-4 py-16'>
                <h2 className='text-center text-[30px] popmed'>About Us</h2>
                <p className='text-center popmed max-w-5xl mx-auto text-[16px]'>
                    At WIROKO, we believe your home should reflect your taste, warmth, and comfort. That’s why we created a platform where trusted furniture makers meet quality-conscious shoppers. With timeless designs and a commitment to excellence, we help you furnish your space beautifully — with ease and elegance.
                </p>
              </div>
                </>
            )
         }
         <Outlet />
             <Footer />
        </div>
    );
};

export default SellersLayout;