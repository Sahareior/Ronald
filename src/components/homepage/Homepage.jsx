import React from 'react';
import Navbar from './_components/Navbar';
import Hero from './_components/Hero';
import FeaturedProducts from './_components/FeaturedProducts';
import WhyUs from './_components/WhyUs';
import Customers from './_components/Customers';
import Coupon from './_components/Coupon';
import Footer from './_components/Footer';
import CustomerLayout from './layouts/CustomerLayout';
import GuestLayout from './layouts/GuestLayout';
import { Outlet, useLocation } from 'react-router-dom';

const Homepage = () => {
    const location= useLocation()
    console.log(location)
    return (
        <div>
            <Navbar />
<Outlet />
<Footer />
        </div>
    );
};

export default Homepage;