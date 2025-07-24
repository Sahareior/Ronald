import { useState } from "react";
import Breadcrumb from "../others/Breadcrumb";
import { Card, Input, Button, Avatar } from "antd";
import { EditOutlined, PhoneOutlined } from "@ant-design/icons";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import { FaEdit, FaPhoneAlt } from "react-icons/fa";
import ProfileModal from "./ProfileModal/ProfileModal";

const { Search } = Input;

const SectionHeader = ({ title, icon, color }) => (
  <div className="flex justify-between items-start mb-4">
    <div
      className={`flex items-center gap-2 text-[16px] font-semibold ${
        color || "text-gray-800"
      }`}
    >
      {icon && icon}
      {title}
    </div>
    <EditOutlined className="text-gray-500 cursor-pointer hover:text-[#CBA135]" />
  </div>
);

const Profile = () => {
  const [value, setValue] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
const [activeSection, setActiveSection] = useState(null);


const handleEditClick = (section) => {
  setActiveSection(section);
  setIsModalOpen(true);
};

  return (
    <div className="bg-[#FAF8F2] min-h-screen pb-8 px-4">
      <div className="mx-40">
        <Breadcrumb />

        {/* Header */}
        <div className="mb-8 pt-4">
          <h1 className="text-[30px] popbold font-bold">My Profile</h1>
          <p className="text-[16px] mt-2 popreg text-gray-600">
            Manage your personal information and account settings
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          {/* Profile Photo */}
          <div className="bg-white p-6 rounded-xl shadow-sm w-full md:w-[280px] h-56 flex flex-col items-center text-center">
            <h3 className="text-[18px] popbold mb-4">Profile Photo</h3>
            <Avatar
              size={100}
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop"
            />
            <Button type="link" className="text-[#CBA135] popmed mt-3 p-0">
              Change Photo
            </Button>
          </div>

          {/* Profile Details */}
          <div className="flex-1 space-y-5 w-full">
            {/* Personal Info */}
            <Card className="rounded-xl max-w-lg relative shadow-sm border">
              
              <h3 className="popbold text-[18px] py-5">Personal Information</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                <div>
                  <p className="popmed text-[#666666]">Full Name</p>
                  <p className="popbold">FA Kabita</p>
                </div>
                <div>
                  <p className="popmed text-[#666666]">Date of Birth</p>
                  <p className="popreg">July 16, 2000</p>
                </div>
                <div>
                  <p className="popmed text-[#666666]">Gender</p>
                  <p className="popreg">Female</p>
                </div>
                <div>
                  <p className="popmed text-[#666666]">National ID</p>
                  <p className="popreg">****-****-1234</p>
                </div>
              </div>
             <FaEdit
  size={16}
  onClick={() => handleEditClick("personal")}
  className="absolute text-[#CBA135] top-3 right-3 cursor-pointer"
/>

            </Card>

            {/* Contact Info */}
            <Card className="rounded-xl max-w-lg shadow-sm border">
             <h3 className="popbold text-[18px] py-5">Contact Information</h3>
              <div className="space-y-6 text-sm text-gray-700">
<div className="flex gap-28">
                  <div>
                  <p className="popmed text-[#666666]">Phone Number</p>
                  <p className="popreg">(+880) 1323-456789</p>
                </div>
                <div>
                  <p className="popmed text-[#666666]">Email Address</p>
                  <p className="popreg">kabita@email.com</p>
                </div>
</div>
                <div>
                  <p className="popmed text-[#666666]">
                    Another Number / WhatsApp Num (if any)
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 mt-4">
                    <PhoneInput
                      className="w-full sm:w-[250px] h-8 rounded-md px-4 border border-gray-300  focus:ring-0 focus:border-[#E5E7EB] transition-all"
                      placeholder="Enter phone number"
                      value={value}
                      onChange={setValue}
                    />
                    <Button
                      type="primary"
                      className="bg-[#CBA135] hover:bg-[#b8962e] text-white  rounded-md shadow-sm transition-all"
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Address */}
            <Card className="rounded-xl max-w-lg relative shadow-sm border">
              <h3 className="popbold text-[18px] py-5">Address</h3>
              <div className="text-sm text-gray-700 popreg space-y-1">
                <p>23 Road, Block -G</p>
                <p>Sial Bari, Mirpur-2</p>
                <p>Dhaka-1216</p>
              </div>
              <FaEdit
  size={16}
  onClick={() => handleEditClick("address")}
  className="absolute text-[#CBA135] top-3 right-3 cursor-pointer"
/>

            </Card>

            {/* Emergency Contact */}
            <Card className="rounded-xl max-w-lg shadow-sm relative border">
              <h3 className="popbold text-[18px] flex items-center gap-3 py-5">Emergency Contact <FaPhoneAlt className="text-red-600" /></h3>

              <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                <div>
                  <p className="popmed text-[#666666]">Contact Name</p>
                  <p className="popreg">Nazmu Islam</p>
                </div>
                <div>
                  <p className="popmed text-[#666666]">Relationship</p>
                  <p className="popreg">Brother</p>
                </div>
                <div className="col-span-2">
                  <p className="popmed text-[#666666]">Phone Number</p>
                  <p className="popreg">(+880) 1303-456700</p>
                </div>
              </div>
              <FaEdit
  size={16}
  onClick={() => handleEditClick("emergency")}
  className="absolute text-[#CBA135] top-3 right-3 cursor-pointer"
/>

            </Card>
          </div>
        </div>
      </div>
      <ProfileModal
      activeSection ={activeSection}
      isModalOpen={isModalOpen}
      setIsModalOpen ={setIsModalOpen}
      />
    </div>
  );
};

export default Profile;
