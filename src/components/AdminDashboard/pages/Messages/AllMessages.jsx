import React from 'react';
import { Input, Select, Avatar, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';

const { Option } = Select;

const AllMessages = () => {
  const messages = [
    {
      id: 1,
      name: 'Fariha Tasnim',
      subject: 'Payment issue - Urgent',
      time: '2:30 PM',
      email: 'fariha.tasnim@gmail.com',
      message: "I'm confused. My order #12345 payment isn’t showing as complete...",
      status: 'Replied',
    },
    {
      id: 2,
      name: 'Mubin Hossan',
      subject: 'Delivery issue - Urgent',
      time: '1:15 PM',
      status: 'Replied',
    },
    {
      id: 3,
      name: 'Saba',
      subject: 'Payment issue - Urgent',
      time: '11:45 AM',
      status: 'Read',
    },
    {
      id: 4,
      name: 'Fariha Tasnim',
      subject: 'Payment issue - Urgent',
      time: '2:30 PM',
      status: 'Unread',
    },
  ];

  return (
<div>

  <div className='bg-white p-6 mt-2'> 
   <div className="flex items-center gap-2">
          <input className='w-[30%] border border-gray-300 rounded-md px-4 py-1 focus:outline-none' placeholder="Search messages..." />
          <Select defaultValue="Role" className="w-[120px] ">
            <Option value="Customer">Customer</Option>
            <Option value="Seller">Seller</Option>
          </Select>
        </div>

</div>
      <div className="flex h-[90vh] bg-white rounded-md  border overflow-hidden">
      {/* Left Panel - Messages List */}



      <div className="w-[30%] border-r p-4 space-y-4">
       
        <div className="space-y-2 overflow-y-auto max-h-[75vh] pr-1">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="p-3 rounded hover:bg-gray-100 cursor-pointer  border-b border-slate-100"
            >
<div className='flex items-center justify-between w-full gap-2'>
<div className='flex gap-3'>
              <Avatar src="https://as2.ftcdn.net/v2/jpg/03/83/25/83/1000_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg           " />
 
                  <div className="flex items-center justify-between">
                <span className="popbold text-gray-800">{msg.name}</span>
                {/* <span className="text-xs text-gray-500">{msg.time}</span> */}
              </div>
</div>
<div className='flex gap-2 items-center'>
              <span
                className={`mt-1 inline-block text-xs popreg px-2 py-0.5 rounded-full ${
                  msg.status === 'Unread'
                    ? 'bg-red-100 text-red-600'
                    : msg.status === 'Read'
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-green-100 text-green-600'
                }`}
              >
                {msg.status}
              </span>
              <span className="text-xs popreg text-gray-500">{msg.time}</span>
</div>
</div>
<div className='md:pl-11'>
                <div className="text-[14px] popmed  text-gray-700">{msg.subject}</div>
              <div className="text-xs popreg mt-1 text-gray-500">{msg.message?.slice(0, 45) || ''}</div>
</div>

            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - Chat Detail */}
      <div className="w-[70%] flex flex-col justify-between p-5">
        {/* Header */}
        <div className="flex  flex-col mb-3">
          <div className="flex items-center gap-3">
          <Avatar src="https://as2.ftcdn.net/v2/jpg/03/83/25/83/1000_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg           " />
            <div>
              <div className="text-[16px] popbold ">Fariha Tasnim</div>
              <div className="text-xs popreg text-gray-500">fariha.tasnim@gmail.com</div>
            </div>
          </div>
          <div className="text-[20px] mt-5 popbold">Payment issue – Urgent</div>
          <p className='popreg text-xs text-[#666666]'>Today at 2:30 PM</p>
<div className='h-[0.7px] w-full bg-slate-300 mt-6 px-0' />
        </div>
        {/* Conversation */}
<div className="flex flex-col gap-4 overflow-y-auto max-h-[80vh] px-2">
  {/* Customer Message */}
  <div className="flex gap-3 pl-14">
    <Avatar
      size={40}
      src="https://as2.ftcdn.net/v2/jpg/03/83/25/83/1000_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
    />
    <div className="max-w-[85%]">
      <div className="bg-[#ECECEC] px-4 py-3  rounded-lg text-sm text-[#0F0F0F] shadow-md ">
        Thanks for letting us know about this. Regarding order <span className="font-semibold">#12345</span>, we understand your
        concern and are actively looking into the payment discrepancy for you. We’ll get back to
        you with an update and a resolution as soon as possible.
      </div>
      <p className="text-xs text-right text-gray-500 mt-1">Today at 2:30 PM</p>
    </div>
  </div>
  <div className="flex gap-3 pl-14">
    <Avatar
      size={40}
      src="https://as2.ftcdn.net/v2/jpg/03/83/25/83/1000_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
    />
    <div className="max-w-[85%]">
      <div className="bg-[#ECECEC] px-4 py-3  rounded-lg text-sm text-[#0F0F0F] shadow-md ">
        Thanks for letting us know about this. Regarding order <span className="font-semibold">#12345</span>, we understand your
        concern and are actively looking into the payment discrepancy for you. We’ll get back to
        you with an update and a resolution as soon as possible.
      </div>
      <p className="text-xs text-right text-gray-500 mt-1">Today at 2:30 PM</p>
    </div>
  </div>
  <div className="flex gap-3 pl-14">
    <Avatar
      size={40}
      src="https://as2.ftcdn.net/v2/jpg/03/83/25/83/1000_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
    />
    <div className="max-w-[85%]">
      <div className="bg-[#ECECEC] px-4 py-3  rounded-lg text-sm text-[#0F0F0F] shadow-md ">
        Thanks for letting us know about this. Regarding order <span className="font-semibold">#12345</span>, we understand your
        concern and are actively looking into the payment discrepancy for you. We’ll get back to
        you with an update and a resolution as soon as possible.
      </div>
      <p className="text-xs text-right text-gray-500 mt-1">Today at 2:30 PM</p>
    </div>
  </div>
  <div className="flex gap-3 pl-14">
    <Avatar
      size={40}
      src="https://as2.ftcdn.net/v2/jpg/03/83/25/83/1000_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
    />
    <div className="max-w-[85%]">
      <div className="bg-[#ECECEC] px-4 py-3  rounded-lg text-sm text-[#0F0F0F] shadow-md ">
        Thanks for letting us know about this. Regarding order <span className="font-semibold">#12345</span>, we understand your
        concern and are actively looking into the payment discrepancy for you. We’ll get back to
        you with an update and a resolution as soon as possible.
      </div>
      <p className="text-xs text-right text-gray-500 mt-1">Today at 2:30 PM</p>
    </div>
  </div>

  {/* Admin Reply */}
  <div className="flex gap-3 ml-32">
    <div className="max-w-[85%]">
      <div className="bg-[#CBA135] px-4 py-3 popreg rounded-lg text-sm text-white shadow-md border-l-4 border-yellow-300">
        Thanks for letting us know about this. Regarding order <span className="font-semibold">#12345</span>, we understand your
        concern and are actively looking into the payment discrepancy for you. We’ll get back to
        you with an update and a resolution as soon as possible.
      </div>
      <p className="text-xs text-right text-gray-500 mt-1">Today at 2:30 PM</p>
    </div>
    <Avatar
      size={40}
      src="https://as2.ftcdn.net/v2/jpg/03/83/25/83/1000_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
    />
  </div>
</div>


        {/* Reply Box */}
        <div className="mt-5">
          <textarea
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
            rows={3}
            placeholder="Type your reply..."
          />
          <Button
            type="primary"
            icon={<SendOutlined />}
            className="mt-2 bg-yellow-500 hover:bg-yellow-600 border-none"
          >
            Send Reply
          </Button>
        </div>
      </div>
    </div>
</div>
  );
};

export default AllMessages;
