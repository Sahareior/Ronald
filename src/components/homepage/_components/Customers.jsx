import { LiaStarSolid } from "react-icons/lia";
import React, { useState } from 'react';
import DetailsModal from "../productDetailAndFilter/_components/DetailsModal";
import Sweeper from "../../others/Sweeper";

const Customers = ({ details }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const reviews = ['1', '2', '3']; // Replace with real data as needed

    return (
        <section className={`${details ? 'p-0' : 'px-4 py-10'} bg-[#FAF8F2]`}>
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl popmed text-gray-800">What Our Customers Say</h2>
            </div>

            {/* Disable click and style if details is true */}
            <p
                onClick={() => {
                    if (!details) {
                        setIsModalOpen(true);
                    }
                }}
                className={`${
                    details ? 'opacity-50 cursor-not-allowed hidden' : 'cursor-pointer hover:text-yellow-700'
                } text-[#CBA135] block px-12 py-3 popbold`}
            >
                Write a Review
            </p>

            <Sweeper />
            <DetailsModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
        </section>
    );
};

export default Customers;
