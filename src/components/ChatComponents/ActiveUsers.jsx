import React, { useState } from 'react';
import { Button, Input, Avatar } from 'antd';
import { ClockCircleOutlined, ThunderboltOutlined, SendOutlined } from '@ant-design/icons';
import { IoIosTimer } from 'react-icons/io';
import { MdOutlineReplyAll } from 'react-icons/md';
import ChatModal from './Chatmodal/ChatModal';

const ActiveUsers = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-[#F7F5EF]">
      <h2 className="text-3xl popbold text-[#333] mb-1">Need Help?</h2>
      <p className="text-gray-600 popreg mb-8">Chat with us or request a return below.</p>

      <div className=" rounded-xl shadow-lg flex md:flex-row flex-col items-start gap-6 p-8 bg-[#EAE7E1] w-full max-w-4xl">
        {/* Left Info Section */}
        <div className="flex-1 space-y-5">
          <h3 className="text-lg popbold text-gray-800">Live Support</h3>
          <div className="flex items-center popreg gap-2 text-sm text-gray-600">
            <IoIosTimer className="text-yellow-500" />
            Available: Mon–Sat, 9am–8pm
          </div>
          <div className="flex items-center popreg gap-2 text-sm text-gray-600">
            <MdOutlineReplyAll  className="text-orange-500" />
            Replies within 1 hour
          </div>
          <div className="flex items-center popreg gap-2 text-sm text-green-600 font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Online Now
          </div>
          <Button type="primary" className="bg-[#CBA135] hover:bg-[#b8972b] text-[14px] popbold py-5 px-7 text-white mt-4">
            Start Live Chat
          </Button>
        </div>

        {/* Chat Box */}
        <div className="flex-1 bg-gray-50 p-4 py-8 rounded-lg border border-gray-200 w-full">
          <div className="flex items-start gap-3 mb-3">
            <Avatar size="large" src="https://randomuser.me/api/portraits/men/32.jpg" />
            <div className="bg-white px-3 py-2 rounded-xl shadow text-sm text-gray-700">
              Hi! I'm Riday from WIROKO support.<br />How can I help you today?
            </div>
          </div>
          <div className="flex items-center gap-2 mt-12">
            <Input
              placeholder="Type your message..."
              className="rounded-full px-4 py-2"
            />
            <Button
            onClick={()=>setIsModalOpen(true)}
              shape="circle"
              icon={<SendOutlined />}
              className="bg-[#CBA135] text-white border-none hover:bg-[#b8972b]"
            />
          </div>
        </div>
      </div>
      <ChatModal isModalOpen={isModalOpen}
      setIsModalOpen ={setIsModalOpen}  />
    </div>
  );
};

export default ActiveUsers;
