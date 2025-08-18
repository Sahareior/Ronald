import React, { useState } from "react";
import HandleFileUpload from "./shared/HandleFileUpload";
import { Button, Checkbox, Select, Switch } from "antd";
import { MultiSelectDropdown } from "./shared/MultiSelectDropdown";
import { useGetCategoriesQuery, useVendorProductCreateMutation } from "../../../../redux/slices/Apis/vendorsApi";

// ✅ Reusable Input
const InputField = ({ label, name, placeholder, type = "text", value, onChange }) => (
  <div className="flex flex-col gap-1">
    <label className="popbold text-[14px] text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border border-gray-300 bg-[#F9FAFB] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
    />
  </div>
);

// ✅ Reusable Textarea
const TextareaField = ({ label, name, placeholder, value, onChange }) => (
  <div className="flex flex-col gap-1">
    <label className="popbold text-[14px] text-gray-700">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-gray-300 w-full bg-[#F9FAFB] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      rows={3}
    />
  </div>
);

const Section = ({ title, children }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <hr className="border-gray-300" />
    <div className="space-y-4">{children}</div>
  </div>
);

const NewVendorAddProducts = () => {
  const [images, setImages] = useState([]);
  const {data} = useGetCategoriesQuery()
     const [vendorProductCreate] = useVendorProductCreateMutation()
  // 🔹 State for all form data
  const [formData, setFormData] = useState({
    name: "",
    category: [],
    shortDescription: "",
    fullDescription: "",
    price1: "",
    price2: "",
    price3: "",
    sku: "",
    stockQuantity: "",
    colors: [],
    sizes: [],
    inStock: true,
    // Changed delivery options to be flat
    homeDeliveryEnabled: false,
    option1: "",
    pickUpEnabled: false,
    option2: "",
    partnerDeliveryEnabled: false,
    option3: "",
    deliveryTime: "",
    seoTitle: "",
    metaDescription: "",
    tag: [],
  });

  const handleImageUpload = (files) => {
    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    setImages([...images, ...newImages]);
  };

  const handleImageRemove = (index) => {
    const newImages = [...images];
    URL.revokeObjectURL(newImages[index].preview);
    newImages.splice(index, 1);
    setImages(newImages);
  };

  // 🔹 Handle generic input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Submit Handler
  const handleSubmit = async () => {
    // Create payload with formData and images merged
    const payload = {
      ...formData,
      images
    };
    
    console.log("🚀 Form Data:", payload);
    // const res = await vendorProductCreate(payload)
    // Here you would typically send this payload to your API
    // console.log(res)
  };

  console.log(data?.results,'ada')

  return (
    <div className="p-6 bg-white shadow-md rounded-lg space-y-8">
      {/* 🔹 Basic Info */}
      <Section title="Basic Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <InputField label="Product Name" name="name" value={formData.name} onChange={handleChange} />
               <MultiSelectDropdown
  label="category"
  options={data?.results.map(item => item.name) || []}   // ✅ extract only names
  selectedValues={formData.category}
  
  setSelectedValues={(values) =>
    setFormData((prev) => ({ ...prev, category: values })) // ✅ fix category, not sizes
  }
/>

        </div>
        <TextareaField label="Short Description" name="shortDescription" value={formData.shortDescription} onChange={handleChange} />
        <TextareaField label="Full Description" name="fullDescription" value={formData.fullDescription} onChange={handleChange} />
      </Section>

      {/* 🔹 Product Image */}
      <Section title="Product Image">
        <HandleFileUpload
          images={images}
          onImageUpload={handleImageUpload}
          onImageRemove={handleImageRemove}
          maxFiles={5}
          uploadText="Drag and drop your images here"
          browseText="or click to select files"
          buttonText="Select Images"
        />
      </Section>

      {/* 🔹 Pricing */}
      <Section title="Pricing">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <InputField label="Product Price" name="price1" value={formData.price1} onChange={handleChange} type="number" />
          <InputField label="Discount Price" name="price2" value={formData.price2} onChange={handleChange} type="number" />
          <InputField label="Commission Price" name="price3" value={formData.price3} onChange={handleChange} type="number" />
        </div>
      </Section>

      {/* 🔹 Inventory */}
      <Section title="Inventory & Variants">
        <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-center gap-5">
          <InputField label="SKU" name="sku" value={formData.sku} onChange={handleChange} />
          <InputField label="Stock Quantity" name="stockQuantity" value={formData.stockQuantity} onChange={handleChange} type="number" />

          <MultiSelectDropdown
            label="Colors"
            options={["Red", "Blue", "Green", "Black", "White"]}
            selectedValues={formData.colors}
            setSelectedValues={(values) => setFormData((prev) => ({ ...prev, colors: values }))}
          />

          <MultiSelectDropdown
            label="Sizes"
            options={["S", "M", "L", "XL", "XXL"]}
            selectedValues={formData.sizes}
            setSelectedValues={(values) => setFormData((prev) => ({ ...prev, sizes: values }))}
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="font-medium">Active Status:</span>
          <Switch checked={formData.inStock} onChange={(checked) => setFormData((prev) => ({ ...prev, inStock: checked }))} />
        </div>
      </Section>

      {/* 🔹 Delivery */}
      <Section title="Delivery Options">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Checkbox
              name="homeDeliveryEnabled"
              checked={formData.homeDeliveryEnabled}
              onChange={(e) => setFormData(prev => ({ ...prev, homeDeliveryEnabled: e.target.checked }))}
            >
              Home Delivery
            </Checkbox>
            <input
              type="number"
              name="option1"
              placeholder="Fee"
              value={formData.option1}
              onChange={handleChange}
              className="w-20 border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <Checkbox
              name="pickUpEnabled"
              checked={formData.pickUpEnabled}
              onChange={(e) => setFormData(prev => ({ ...prev, pickUpEnabled: e.target.checked }))}
            >
              PickUp
            </Checkbox>
            <input
              type="number"
              name="option2"
              placeholder="Fee"
              value={formData.option2}
              onChange={handleChange}
              className="w-20 border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <Checkbox
              name="partnerDeliveryEnabled"
              checked={formData.partnerDeliveryEnabled}
              onChange={(e) => setFormData(prev => ({ ...prev, partnerDeliveryEnabled: e.target.checked }))}
            >
              Partner Delivery
            </Checkbox>
            <input
              type="number"
              name="option3"
              placeholder="Fee"
              value={formData.option3}
              onChange={handleChange}
              className="w-20 border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>
        <InputField label="Estimated Delivery Time" name="deliveryTime" value={formData.deliveryTime} onChange={handleChange} />
      </Section>

      {/* 🔹 SEO */}
      <Section title="SEO & Tags">
        <InputField label="SEO Title" name="seoTitle" value={formData.seoTitle} onChange={handleChange} />
        <TextareaField label="Meta Description" name="metaDescription" value={formData.metaDescription} onChange={handleChange} />
        <Select
          value={formData.tag}
          style={{ width: "100%" }}
          onChange={(value) => setFormData((prev) => ({ ...prev, tag: value }))}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "yiminghe", label: "Yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />

        <div className="flex justify-end gap-4 mt-6">
          <Button className="bg-white border px-8 py-5 border-gray-400">Save as Draft</Button>
          <Button className="bg-[#CBA135] px-8 py-5 text-white" onClick={handleSubmit}>
            Submit Product
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default NewVendorAddProducts;