import { LiaStarSolid } from "react-icons/lia";
import React, { useState } from 'react';
import DetailsModal from "../productDetailAndFilter/_components/DetailsModal";
import Sweeper from "../../others/Sweeper";

const Customers = () => {
       const [isModalOpen, setIsModalOpen] = useState(false);
    const reviews = ['1', '2', '3']; // Replace with real data as needed

    return (
        <section className=" p-12 bg-[#FAF8F2]">
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl popmed text-gray-800">What Our Customers Say</h2>
                
            </div>
          <p onClick={()=> setIsModalOpen(true)} className='text-[#CBA135] hover:text-yellow-700 px-12 py-3 cursor-pointer popbold '>Write a Review</p>
          
            <Sweeper />
            <DetailsModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
        </section>
    );
};

export default Customers;
