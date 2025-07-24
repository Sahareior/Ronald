import { Button } from 'antd';
import React from 'react';

const StayUpdated = () => {
    return (
        <div className='bg-[#666666] py-12 px-4 text-white'>
            <h2 className='text-[30px] text-center popbold mb-2'>Stay Updated</h2>
            <p className='text-[18px] text-center popreg mb-6'>
                Get the latest furniture trends and exclusive offers delivered to your inbox.
            </p>

            <div className='flex justify-center items-center max-w-xl mx-auto'>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className='h-[48px] w-full max-w-md px-4 rounded-l-md text-black focus:outline-none'
                />
                <Button className='px-6 rounded-none popbold rounded-r-md bg-[#CBA135] text-white h-[48px] border-none'>
                    Subscribe
                </Button>
            </div>
        </div>
    );
};

export default StayUpdated;
