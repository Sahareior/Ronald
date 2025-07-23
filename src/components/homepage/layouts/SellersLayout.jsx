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

const SellersLayout = () => {
    return (
        <div>
            <SellersNavbar />
            <SellersHero />
            <WhySell />
            <VendorFeatureOverview />
             <Customers />
             <HowItWorks />
             <GrowWithUs />
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

export default SellersLayout;