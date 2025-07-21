import React from 'react';
import Navbar from './_components/Navbar';
import Hero from './_components/Hero';
import FeaturedProducts from './_components/FeaturedProducts';
import WhyUs from './_components/WhyUs';
import Customers from './_components/Customers';
import Coupon from './_components/Coupon';
import Footer from './_components/Footer';

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <FeaturedProducts />
            <WhyUs />
            <Customers />
            <Coupon />
            <Footer />
        </div>
    );
};

export default Homepage;