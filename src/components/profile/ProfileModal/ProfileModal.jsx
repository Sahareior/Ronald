import React, { useEffect } from 'react';
import { Modal, Form, Button, Input, Divider } from "antd";

const ProfileModal = ({ activeSection, isModalOpen, setIsModalOpen, userInfo,refetch }) => {
  const [form] = Form.useForm();
console.log(userInfo?._id)
  useEffect(() => {
    if (userInfo && activeSection) {
      if (activeSection === "personal") {
        form.setFieldsValue({
          fullName: userInfo.name,
          dob: userInfo.dob,
          gender: userInfo.gender,
          nid: userInfo.nationalId
        });
      } else if (activeSection === "contact") {
        form.setFieldsValue({
          phone: userInfo.phone,
          email: userInfo.email
        });
      } else if (activeSection === "address") {
        form.setFieldsValue({
          street: userInfo.street,
          area: userInfo.area,
          city: userInfo.city
        });
      } else if (activeSection === "emergency") {
        form.setFieldsValue({
          emgName: userInfo.emgName,
          relationship: userInfo.relationship,
          emgPhone: userInfo.emgPhone
        });
      }
    }
  }, [userInfo, activeSection, form]);

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

  const handleSave = async () => {
    const values = form.getFieldsValue();

   const res = await fetch(`http://localhost:5000/profile/${userInfo._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ section: activeSection, data: values })
    });
console.log(res)
refetch()
    setIsModalOpen(false);
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
      <Form layout="vertical" className="space-y-4 p-6 text-black" form={form}>
        {activeSection === "personal" && (
          <>
            <Divider orientation="left">Basic Info</Divider>
            <Form.Item label="Full Name" name="fullName">
              <Input placeholder="Enter full name" />
            </Form.Item>
            <Form.Item label="Date of Birth" name="dob">
              <Input type="date" />
            </Form.Item>
            <Form.Item label="Gender" name="gender">
              <Input placeholder="Gender" />
            </Form.Item>
            <Form.Item label="National ID" name="nid">
              <Input placeholder="Enter NID" />
            </Form.Item>
          </>
        )}

        {activeSection === "contact" && (
          <>
            <Divider orientation="left">Contact Info</Divider>
            <Form.Item label="Phone Number" name="phone">
              <Input placeholder="Enter phone number" />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input placeholder="Enter email" />
            </Form.Item>
          </>
        )}

        {activeSection === "address" && (
          <>
            <Divider orientation="left">Address</Divider>
            <Form.Item label="Street" name="street">
              <Input placeholder="Enter street" />
            </Form.Item>
            <Form.Item label="Area" name="area">
              <Input placeholder="Enter area" />
            </Form.Item>
            <Form.Item label="City" name="city">
              <Input placeholder="Enter city" />
            </Form.Item>
          </>
        )}

        {activeSection === "emergency" && (
          <>
            <Divider orientation="left">Emergency Contact</Divider>
            <Form.Item label="Contact Name" name="emgName">
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item label="Relationship" name="relationship">
              <Input placeholder="Relationship" />
            </Form.Item>
            <Form.Item label="Phone Number" name="emgPhone">
              <Input placeholder="Phone Number" />
            </Form.Item>
          </>
        )}

        <Form.Item className="text-right mt-6">
          <Button
            type="primary"
            className="bg-[#CBA135] hover:bg-[#b8962e] text-white px-6"
            onClick={handleSave}
          >
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ProfileModal;
