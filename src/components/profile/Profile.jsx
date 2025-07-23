import { useState } from "react";
import Breadcrumb from "../others/Breadcrumb";
import { Card, Input, Button, Avatar } from "antd";
import { EditOutlined, PhoneOutlined } from "@ant-design/icons";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import { FaPhoneAlt } from "react-icons/fa";

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
  return (
    <div className="bg-[#FAF8F2] min-h-screen pb-8 px-4">
      <div className="mx-40">
        <Breadcrumb />

        {/* Header */}
        <div className="mb-8 pt-4">
          <h1 className="text-[30px] font-bold">My Profile</h1>
          <p className="text-[16px] text-gray-600">
            Manage your personal information and account settings
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          {/* Profile Photo */}
          <div className="bg-white p-6 rounded-xl shadow-sm w-full md:w-[280px] h-56 flex flex-col items-center text-center">
            <h3 className="text-[18px] font-semibold mb-4">Profile Photo</h3>
            <Avatar
              size={100}
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop"
            />
            <Button type="link" className="text-[#CBA135] mt-3 p-0">
              Change Photo
            </Button>
          </div>

          {/* Profile Details */}
          <div className="flex-1 space-y-5 w-full">
            {/* Personal Info */}
            <Card className="rounded-xl max-w-lg shadow-sm border">
              <SectionHeader title="Personal Information" />
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                <div>
                  <p className="font-medium">Full Name</p>
                  <p>FA Kabita</p>
                </div>
                <div>
                  <p className="font-medium">Date of Birth</p>
                  <p>July 16, 2000</p>
                </div>
                <div>
                  <p className="font-medium">Gender</p>
                  <p>Female</p>
                </div>
                <div>
                  <p className="font-medium">National ID</p>
                  <p>****-****-1234</p>
                </div>
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="rounded-xl max-w-lg shadow-sm border">
              <SectionHeader title="Contact Information" />
              <div className="space-y-2 text-sm text-gray-700">
                <div>
                  <p className="font-medium">Phone Number</p>
                  <p>(+880) 1323-456789</p>
                </div>
                <div>
                  <p className="font-medium">Email Address</p>
                  <p>kabita@email.com</p>
                </div>
                <div>
                  <p className="font-medium">
                    Another Number / WhatsApp Num (if any)
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-4">
                    <PhoneInput
                      className="w-full sm:w-[250px] h-8 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
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
            <Card className="rounded-xl max-w-lg shadow-sm border">
              <SectionHeader title="Address" />
              <div className="text-sm text-gray-700 space-y-1">
                <p>23 Road, Block -G</p>
                <p>Sial Bari, Mirpur-2</p>
                <p>Dhaka-1216</p>
              </div>
            </Card>

            {/* Emergency Contact */}
            <Card className="rounded-xl max-w-lg shadow-sm border">
              <SectionHeader
                title="Emergency Contact"
                icon={<FaPhoneAlt className="text-red-600" />}
                color=""
              />
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                <div>
                  <p className="font-medium">Contact Name</p>
                  <p>Nazmu Islam</p>
                </div>
                <div>
                  <p className="font-medium">Relationship</p>
                  <p>Brother</p>
                </div>
                <div className="col-span-2">
                  <p className="font-medium">Phone Number</p>
                  <p>(+880) 1303-456700</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
