import React, { useState } from "react";
import { Modal, Input, Button, Avatar } from "antd";
import './Chat.css'
import {
  SendOutlined,
  PaperClipOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { FaPaperclip, FaShare } from "react-icons/fa6";
import { BsEmojiGrin } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const ChatModal = ({ isModalOpen, setIsModalOpen }) => {
  const [message, setMessage] = useState("");

  const demoMessages = [
    {
      sender: "user",
      avatar: "/user-icon.png",
      time: "Today at 2:30 PM",
      text: `I’m confused. My order #12345 payment isn’t showing as complete, but I’m sure I already made the payment. Could you please check what’s going on? I used my Visa card on 26.06.35. Please look into this urgently.`,
    },
    {
      sender: "admin",
      avatar: "/admin-avatar.jpg",
      time: "Today at 2:45 PM",
      text: `Thanks for letting us know about this, regarding order #12345. We understand your concern and are actively looking into the payment discrepancy for you. We'll get back to you with an update and a resolution as soon as possible.`,
    },
  ];

  return (
<Modal
  open={isModalOpen}
  onCancel={() => setIsModalOpen(false)}
  footer={null}
  closable={false}
  width={500}
  className="rounded-xl overflow-hidden custom-modal-position"
>

  {/* Header */}
  <div className="flex items-center justify-between border-b pb-12 p-4 mb-3">
    <div className="flex items-center flex-col gap-2">
      <img src="/image/logo.png" alt="logo" className="h-6" />
      <p className="popreg text-[14px] text-[#666666]">Today at 2:30 PM</p>
    </div>
    <div className="flex gap-3 text-gray-400 text-lg cursor-pointer">
      <MdDelete size={16} />
      <FaShare size={16} />
    </div>
  </div>

  {/* Message Thread */}
  <div className="space-y-6 px-6 py-4 max-h-80 overflow-y-auto pr-2">
    {demoMessages.map((msg, index) => (
      <div key={index} className="space-y-1">
        {msg.sender === "user" ? (
          <div>
            <div className="flex gap-2 items-start">
              <Avatar size="small" src={msg.avatar} />
              <div className="bg-gray-100 p-3 popreg rounded-lg text-sm max-w-[80%]">
                {msg.text}
              </div>
            </div>
            <p className="text-xs text-gray-500 pl-7 mt-1">{msg.time}</p>
          </div>
        ) : (
          <div>
            <div className="flex gap-2 justify-end items-start">
              <div className="bg-[#CBA135] text-white text-sm p-3 popreg rounded-lg max-w-[80%]">
                {msg.text}
              </div>
              <Avatar size="small" src={msg.avatar} />
            </div>
            <p className="text-xs text-gray-500 text-right popreg mr-9 mt-1">{msg.time}</p>
          </div>
        )}
      </div>
    ))}
  </div>

  {/* Input Section */}
  <div className="mt-6 border-t px-5 py-5 pb-8 pt-4">
    <Input.TextArea
      rows={3}
      placeholder="Type your reply..."
      className="rounded-lg"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />

    <div className="flex justify-between items-center mt-3">
      <div className="flex gap-3 text-gray-500 text-lg">
        <FaPaperclip />
        <BsEmojiGrin />
      </div>
      <Button
        type="primary"
        className="bg-[#CBA135] hover:bg-[#b8962e] px-5"
        icon={<SendOutlined />}
      >
        Send Reply
      </Button>
    </div>
  </div>
</Modal>


  );
};

export default ChatModal;
