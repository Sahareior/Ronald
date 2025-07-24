import React from 'react';
import { Modal, Form, Button, Input, Divider } from "antd";

const ProfileModal = ({ activeSection, isModalOpen, setIsModalOpen }) => {
  const getTitle = () => {
    switch (activeSection) {
      case "personal":
        return "Edit Personal Information";
      case "contact":
        return "Edit Contact Info";
      case "address":
        return "Edit Address";
      case "emergency":
        return "Edit Emergency Contact";
      default:
        return "Edit Details";
    }
  };

  return (
    <Modal
      title={<h2 className="text-lg p-5 font-semibold text-[#333]">{getTitle()}</h2>}
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
      className="rounded-xl"
      bodyStyle={{ padding: '4px 6px' }}
    >
      <Form layout="vertical" className="space-y-4 p-6 text-black">
        {activeSection === "personal" && (
          <>
            <Divider orientation="left">Basic Info</Divider>
            <Form.Item label="Full Name" name="fullName">
              <Input placeholder="Enter full name" className='placeholder-slate-400 text-black' defaultValue="FA Kabita" />
            </Form.Item>
            <Form.Item label="Date of Birth" name="dob">
              <Input type="date" defaultValue="2000-07-16" />
            </Form.Item>
            <Form.Item label="Gender" name="gender">
              <Input placeholder="Gender" defaultValue="Female" />
            </Form.Item>
            <Form.Item label="National ID" name="nid">
              <Input placeholder="Enter NID" defaultValue="****-****-1234" />
            </Form.Item>
          </>
        )}

        {activeSection === "contact" && (
          <>
            <Divider orientation="left">Contact Info</Divider>
            <Form.Item label="Phone Number" name="phone">
              <Input placeholder="Enter phone number" defaultValue="+8801323456789" />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input placeholder="Enter email" defaultValue="kabita@email.com" />
            </Form.Item>
          </>
        )}

        {activeSection === "address" && (
          <>
            <Divider orientation="left">Address</Divider>
            <Form.Item label="Street" name="street">
              <Input placeholder="Enter street" defaultValue="23 Road, Block -G" />
            </Form.Item>
            <Form.Item label="Area" name="area">
              <Input placeholder="Enter area" defaultValue="Sial Bari, Mirpur-2" />
            </Form.Item>
            <Form.Item label="City" name="city">
              <Input placeholder="Enter city" defaultValue="Dhaka-1216" />
            </Form.Item>
          </>
        )}

        {activeSection === "emergency" && (
          <>
            <Divider orientation="left">Emergency Contact</Divider>
            <Form.Item label="Contact Name" name="emgName">
              <Input placeholder="Name" defaultValue="Nazmu Islam" />
            </Form.Item>
            <Form.Item label="Relationship" name="relationship">
              <Input placeholder="Relationship" defaultValue="Brother" />
            </Form.Item>
            <Form.Item label="Phone Number" name="emgPhone">
              <Input placeholder="Phone Number" defaultValue="+8801303456700" />
            </Form.Item>
          </>
        )}

        <Form.Item className="text-right mt-6">
          <Button
            type="primary"
            className="bg-[#CBA135] hover:bg-[#b8962e] text-white px-6"
            onClick={() => setIsModalOpen(false)}
          >
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ProfileModal;
