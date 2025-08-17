import React, { useState, useRef } from "react";
import { Button, Switch } from "antd";
import { FaFileUpload, FaTimes } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { useFormik } from 'formik';

const COLOR_OPTIONS = [
  'White', 'Black', 'Gray', 'Beige', 'Brown', 'Red', 'Blue', 'Green', 
];

const SIZE_OPTIONS = [
  'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL',
];

const FURNITURE_CATEGORIES = [
  'Sofa', 
  'Chair', 
];

// Reusable Input Field
const InputField = ({ label, name, value, placeholder, onChange, extra }) => (
  <div>
    <label className="block mb-1 popbold text-[14px] text-gray-700">
      {label} {extra && <span className="ml-1 text-gray-500 font-normal">({extra})</span>}
    </label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border border-[#D1D5DB] bg-[#EAE7E1] rounded-md px-4 py-2 focus:outline-none"
    />
  </div>
);

// Reusable Textarea Field
const TextareaField = ({ label, name, value, placeholder, onChange }) => (
  <div>
    <label className="block mb-2 popbold text-[14px] text-gray-700">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="border border-gray-300 w-full bg-[#EAE7E1] rounded-md px-4 py-2 focus:outline-none focus:border-black focus:ring-0"
      placeholder={placeholder}
    />
  </div>
);

// Reusable Dropdown Select
const DropdownSelect = ({ label, options, selected, onToggle, placeholder, show, setShow }) => (
  <div className="relative">
    <label className="block mb-1 popbold text-[14px] text-gray-700">{label}</label>
    <div
      className="w-full border border-[#D1D5DB] bg-[#EAE7E1] rounded-md px-4 py-2 focus:outline-none cursor-pointer"
      onClick={() => setShow(!show)}
    >
      {selected.length > 0 ? selected.join(", ") : placeholder}
    </div>
    {show && (
      <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
        {options.map((opt) => (
          <div
            key={opt}
            className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${selected.includes(opt) ? "bg-blue-50" : ""}`}
            onClick={() => onToggle(opt)}
          >
            {opt}
          </div>
        ))}
      </div>
    )}
  </div>
);

// Reusable Delivery Option
const DeliveryOption = ({ label, optionKey, formik, onChange }) => (
  <label className="flex items-center gap-2 text-gray-700 mb-2">
    <input 
      type="checkbox" 
      checked={formik.values.deliveryOptions[optionKey].checked}
      onChange={(e) => onChange(optionKey, 'checked', e.target.checked)}
    />
    {label}
    <input 
      value={formik.values.deliveryOptions[optionKey].price}
      type='number'
      onChange={(e) => onChange(optionKey, 'price', e.target.value)}
      className='border border-[#D1D5DB] bg-[#EAE7E1] rounded-md w-20 pl-2 focus:outline-none' 
      placeholder="Price"
    />
  </label>
);

const VEditProducts = () => {
  const fileInputRef = useRef(null);
  const location = useLocation();
  console.log(location.state)
  // State for dropdown visibility
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showColorDropdown, setShowColorDropdown] = useState(false);
  const [showSizeDropdown, setShowSizeDropdown] = useState(false);
  const [showTagsDropdown, setShowTagsDropdown] = useState(false);
  const [images, setImages] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: "",
      category: [],
      shortDescription:  "",
      fullDescription:  "",
      price1:  "",
      price2:  "",
      price3: "",
      sku:  "",
      stockQuantity:"",
      colors: [],
      sizes: [],
      inStock:  0,
      deliveryOptions: {
        homeDelivery: { 
          checked:  false, 
          price:  "" 
        },
        pickup: { 
          checked:  false, 
          price:  "" 
        },
        partnerDelivery: { 
          checked:  false, 
          price:  "" 
        }
      },
      deliveryTime:  "",
      seoTitle:  "",
      metaDescription:  "",
      tags:  [],
    },
    onSubmit: values => {
      // Prepare data for submission
       const { deliveryOptions, ...rest } = values;
     const dataObj = {
    ...rest,
    option1: deliveryOptions.homeDelivery.price || "",
    option2: deliveryOptions.pickup.price || "",
    option3: deliveryOptions.partnerDelivery.price || "",
    images: images.map(img => img.file.name), // just names for console
  };

  console.log(dataObj);
    },
  });

  const toggleArrayItem = (key, value) => {
    const currentValues = [...formik.values[key]];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    
    formik.setFieldValue(key, newValues);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    
    // Limit to 5 images total
    if (images.length + files.length > 5) {
      alert('You can only upload up to 5 images');
      return;
    }
    
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    
    setImages(prev => [...prev, ...newImages]);
  };

  const removeImage = (index) => {
    const newImages = [...images];
    // Clean up memory
    URL.revokeObjectURL(newImages[index].preview);
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleDeliveryOptionChange = (option, field, value) => {
    formik.setFieldValue(`deliveryOptions.${option}`, {
      ...formik.values.deliveryOptions[option],
      [field]: value
    });
  };

  // Format price for display
  const formatPrice = (price) => {
    return price ? `$${parseFloat(price).toFixed(2)}` : '$0.00';
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-[#CBA135] text-white space-y-2 p-5 rounded-t-md">
        <p className="text-[24px] popbold">Edit Products</p>
        <p className="text-[16px] popreg">
       
        </p>
      </div>

      {/* Main Form */}
      <form onSubmit={formik.handleSubmit} className="p-6 bg-white space-y-6 shadow-sm rounded-b-md">
        <p className="popbold text-[20px]">Basic Information</p>
        <hr />
        
        <div className="grid md:grid-cols-2 gap-4">
          <InputField
            label="Edit Product Name"
            name="name"
            value={formik.values.name}
            placeholder="Enter Product Name"
            onChange={formik.handleChange}
          />
          
          <DropdownSelect
            label="Edit Category"
            options={FURNITURE_CATEGORIES}
            selected={formik.values.category}
            placeholder="Select Category"
            onToggle={(val) => toggleArrayItem("category", val)}
            show={showCategoryDropdown}
            setShow={setShowCategoryDropdown}
          />
        </div>

        <TextareaField
          label="Edit Short Description"
          name="shortDescription"
          value={formik.values.shortDescription}
          placeholder="Type here..."
          onChange={formik.handleChange}
        />

        <TextareaField
          label="Edit Full Description"
          name="fullDescription"
          value={formik.values.fullDescription}
          placeholder="Type here..."
          onChange={formik.handleChange}
        />

        <p className="popbold text-[20px]">Edit Product Image</p>
        <hr />
        
        <div className="space-y-4">
          {images.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {images.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={img.preview}
                    alt={`Preview ${index}`}
                    className="h-24 w-24 object-cover rounded-md border border-gray-200"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                  >
                    <FaTimes size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}
          
          <div
            className="bg-[#EAE7E1] p-6 flex flex-col items-center gap-2 rounded-md border border-dashed border-[#CBA135] cursor-pointer"
            onClick={() => fileInputRef.current.click()}
          >
            <FaFileUpload size={32} className="text-[#CBA135]" />
            <p className="text-gray-700 text-sm">Drag and drop product images here</p>
            <p className="text-gray-500 text-sm">or click to browse (Max 5 images)</p>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
            />
            <Button type="button" className="bg-[#CBA135] text-white mt-2">Browse Files</Button>
          </div>
        </div>

        <p className="popbold text-[20px]">Edit Pricing</p>
        <hr />
        
        <div className="grid md:grid-cols-3 gap-4">
          <InputField
            label="Product Price"
            name="price1"
            value={formik.values.price1}
            placeholder="Enter Price"
            onChange={formik.handleChange}
          />
          <InputField
            label="Discount Price"
            name="price2"
            value={formik.values.price2}
            placeholder="Enter Price"
            onChange={formik.handleChange}
          />
          <InputField
            label="Commission Price"
            name="price3"
            value={formik.values.price3}
            placeholder="Enter Price"
            onChange={formik.handleChange}
          />
        </div>

        {/* Inventory & Variants Section */}
        <p className="popbold text-[20px]">Edit Inventory & Variants</p>
        <hr />
        
        <div className="grid md:grid-cols-2 gap-4">
          <InputField
            label="SKU"
            name="sku"
            value={formik.values.sku}
            placeholder="Enter SKU"
            onChange={formik.handleChange}
          />
          
          <InputField
            label="Stock Quantity"
            name="stockQuantity"
            value={formik.values.stockQuantity}
            placeholder="Enter Quantity"
            onChange={formik.handleChange}
          />
          
          <DropdownSelect
            label="Edit Colors"
            options={COLOR_OPTIONS}
            selected={formik.values.colors}
            placeholder="Select colors"
            onToggle={(val) => toggleArrayItem("colors", val)}
            show={showColorDropdown}
            setShow={setShowColorDropdown}
          />
          
          <DropdownSelect
            label="Edit Sizes"
            options={SIZE_OPTIONS}
            selected={formik.values.sizes}
            placeholder="Select sizes"
            onToggle={(val) => toggleArrayItem("sizes", val)}
            show={showSizeDropdown}
            setShow={setShowSizeDropdown}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Switch 
            checked={formik.values.inStock} 
            onChange={(checked) => formik.setFieldValue("inStock", checked)} 
          />
          <p className="text-gray-700">In Stock</p>
        </div>

        {/* Delivery Options */}
        <p className="popbold text-[20px]">Edit Delivery Options</p>
        <hr />
        
        <div className="pt-4 py-6 space-y-3">
          <DeliveryOption 
            label="Home Delivery" 
            optionKey="homeDelivery" 
            formik={formik}
            onChange={handleDeliveryOptionChange} 
          />
          <DeliveryOption 
            label="Pickup" 
            optionKey="pickup" 
            formik={formik}
            onChange={handleDeliveryOptionChange} 
          />
          <DeliveryOption 
            label="Partner Delivery" 
            optionKey="partnerDelivery" 
            formik={formik}
            onChange={handleDeliveryOptionChange} 
          />
          
          <div className="mt-4">
            <label className="block mb-1 popbold text-[14px] text-gray-700">
              Estimated Delivery Time (days)
            </label>
            <input
              name="deliveryTime"
              value={formik.values.deliveryTime}
              onChange={formik.handleChange}
              placeholder="e.g., 3-5 days"
              className="w-full border border-[#D1D5DB] bg-[#EAE7E1] rounded-md px-4 py-2 focus:outline-none"
            />
          </div>
        </div>

        {/* SEO & Tags */}
        <p className="popbold text-[20px]">Edit SEO & Tags</p>
        <hr />
        
        <div className="space-y-4">
          <InputField
            label="SEO Title"
            name="seoTitle"
            value={formik.values.seoTitle}
            placeholder="Enter SEO title"
            onChange={formik.handleChange}
          />
          
          <TextareaField
            label="Meta Description"
            name="metaDescription"
            value={formik.values.metaDescription}
            placeholder="Enter meta description"
            onChange={formik.handleChange}
          />
          
          <DropdownSelect
            label="Edit Tags"
            options={FURNITURE_CATEGORIES}
            selected={formik.values.tags}
            placeholder="Select tags"
            onToggle={(val) => toggleArrayItem("tags", val)}
            show={showTagsDropdown}
            setShow={setShowTagsDropdown}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <Button type="button" className="bg-white border px-8 py-5 border-gray-400">Save as Draft</Button>
          <Button htmlType="submit" className="bg-[#CBA135] px-8 py-5 text-white">
            Update Product
          </Button>
        </div>
      </form>
    </div>
  );
};

export default VEditProducts;