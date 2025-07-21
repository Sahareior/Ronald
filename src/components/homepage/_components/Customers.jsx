import { LiaStarSolid } from "react-icons/lia";
import React from 'react';

const Customers = () => {
    const reviews = ['1', '2', '3']; // Replace with real data as needed

    return (
        <section className=" p-12 bg-[#FAF8F2]">
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">What Our Customers Say</h2>
                <p className="text-gray-600 mt-2">Real experiences from satisfied customers</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {reviews.map((item, idx) => (
                    <div
                        key={idx}
                        className=" w-full md:w-[30%] p-6  bg-[#FFFFFF]  transition-all duration-300"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                className="w-12 h-12 object-cover rounded-full"
                                src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60"
                                alt="Customer profile"
                            />
                            <div>
                                <h4 className="font-semibold text-gray-800">Sahareior Sijan</h4>
                                <div className="flex gap-1 text-[#CBA135]">
                                    <LiaStarSolid />
                                    <LiaStarSolid />
                                    <LiaStarSolid />
                                    <LiaStarSolid />
                                    <LiaStarSolid />
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-700 italic mb-4">
                            “Absolutely love my new sofa! The quality is exceptional and it fits perfectly in my living room.”
                        </p>
                        <img
                            className="w-16 h-16 object-cover rounded-lg "
                            src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60"
                            alt="Product"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Customers;
