import React, { useState, useRef } from "react";
import { Button, Switch } from "antd";
import { FaFileUpload, FaTimes } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

const COLOR_OPTIONS = [
  'White', 'Black', 'Gray', 'Beige', 'Brown', 'Red', 'Blue', 'Green', 
  'Yellow', 'Orange', 'Pink', 'Purple', 'Gold', 'Silver', 'Bronze',
  'Ivory', 'Navy', 'Teal', 'Maroon', 'Olive', 'Lime', 'Cyan', 'Indigo',
  'Turquoise', 'Magenta', 'Coral', 'Salmon', 'Mint', 'Lavender', 'Charcoal'
];

const SIZE_OPTIONS = [
  'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL',
  'One Size', 'Twin', 'Full', 'Queen', 'King', 'California King',
  '30x30', '40x40', '50x50', '60x60', '70x70', '80x80',
  '20x30', '24x36', '30x40', '36x48', '40x60',
  'Small', 'Medium', 'Large', 'Extra Large'
];

const FURNITURE_CATEGORIES = [
  'Sofa', 
  'Chair', 
  'Table', 
  'Bed', 
  'Cabinet', 
  'Wardrobe', 
  'Desk', 
  'Bookshelf', 
  'Dresser', 
  'Nightstand'
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
const DeliveryOption = ({ label, optionKey, formData, onChange }) => (
  <label className="flex items-center gap-2 text-gray-700 mb-2">
    <input 
      type="checkbox" 
      checked={formData.deliveryOptions[optionKey].checked}
      onChange={(e) => onChange(optionKey, 'checked', e.target.checked)}
    />
    {label}
    <input 
      value={formData.deliveryOptions[optionKey].price}
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
  const { originalData } = location.state;
console.log(originalData)
  // State for dropdown visibility
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showColorDropdown, setShowColorDropdown] = useState(false);
  const [showSizeDropdown, setShowSizeDropdown] = useState(false);
  const [showTagsDropdown, setShowTagsDropdown] = useState(false);

  // Initialize form data with proper structure
  const [formData, setFormData] = useState({
    name: originalData.productName || "",
    category: originalData.categories || [],
    shortDescription: originalData.short_description || "",
    fullDescription: originalData.full_description || "",
    images: [],
    price1: originalData.price1 || "",
    price2: originalData.price2 || "",
    price3: originalData.price3 || "",
    sku: originalData.sku || "",
    stockQuantity: originalData.stock_quantity || 0,
    colors: [],
    sizes: [],
    inStock: originalData.stock_quantity > 0,
    deliveryOptions: {
      homeDelivery: { 
        checked: originalData.home_delivery || false, 
        price: originalData.option1 || "" 
      },
      pickup: { 
        checked: originalData.pickup || false, 
        price: originalData.option2 || "" 
      },
      partnerDelivery: { 
        checked: originalData.partner_delivery || false, 
        price: originalData.option3 || "" 
      }
    },
    deliveryTime: originalData.estimated_delivery_days || "",
    seoTitle: originalData.seo?.title || "",
    metaDescription: originalData.seo?.description || "",
    tags: originalData.tags || [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleArrayItem = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    
    // Limit to 5 images total
    if (formData.images.length + files.length > 5) {
      alert('You can only upload up to 5 images');
      return;
    }
    
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    
    setFormData((prev) => ({ 
      ...prev, 
      images: [...prev.images, ...newImages] 
    }));
  };

  const removeImage = (index) => {
    setFormData((prev) => {
      const newImages = [...prev.images];
      // Clean up memory
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);
      return { ...prev, images: newImages };
    });
  };

  const handleDeliveryOptionChange = (option, field, value) => {
    setFormData(prev => ({
      ...prev,
      deliveryOptions: {
        ...prev.deliveryOptions,
        [option]: {
          ...prev.deliveryOptions[option],
          [field]: value
        }
      }
    }));
  };

const handleSubmit = () => {
  // Prepare plain JS object
  const dataObj = {
    name: formData.name,
    category: formData.category,
    shortDescription: formData.shortDescription,
    fullDescription: formData.fullDescription,
    images: formData.images.map(img => img.file.name), // just names for console
    price1: formData.price1,
    price2: formData.price2,
    price3: formData.price3,
    sku: formData.sku,
    stockQuantity: formData.stockQuantity,
    colors: formData.colors,
    sizes: formData.sizes,
    inStock: formData.inStock,
    deliveryOptions: {
      homeDelivery: formData.deliveryOptions.homeDelivery,
      pickup: formData.deliveryOptions.pickup,
      partnerDelivery: formData.deliveryOptions.partnerDelivery
    },
    deliveryTime: formData.deliveryTime,
    seoTitle: formData.seoTitle,
    metaDescription: formData.metaDescription,
    tags: formData.tags
  };

  console.log(JSON.stringify(dataObj, null, 2));

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
          Editing: {originalData.name || "Product"} (ID: {originalData.prod_id || "N/A"})
        </p>
      </div>

      {/* Main Form */}
      <div className="p-6 bg-white space-y-6 shadow-sm rounded-b-md">
        <p className="popbold text-[20px]">Basic Information</p>
        <hr />
        
        <div className="grid md:grid-cols-2 gap-4">
          <InputField
            label="Edit Product Name"
            name="name"
            value={formData.name}
            
            placeholder="Enter Product Name"
            onChange={handleInputChange}
          />
          
          <DropdownSelect
            label="Edit Category"
            options={FURNITURE_CATEGORIES}
            selected={formData.category}
            placeholder="Select Category"
            onToggle={(val) => toggleArrayItem("category", val)}
            show={showCategoryDropdown}
            setShow={setShowCategoryDropdown}
          />
        </div>

        <TextareaField
          label="Edit Short Description"
          name="shortDescription"
          value={formData.shortDescription}
          placeholder="Type here..."
          onChange={handleInputChange}
        />

        <TextareaField
          label="Edit Full Description"
          name="fullDescription"
          value={formData.fullDescription}
          placeholder="Type here..."
          onChange={handleInputChange}
        />

        <p className="popbold text-[20px]">Edit Product Image</p>
        <hr />
        
        <div className="space-y-4">
          {formData.images.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {formData.images.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={img.preview}
                    alt={`Preview ${index}`}
                    className="h-24 w-24 object-cover rounded-md border border-gray-200"
                  />
                  <button
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
            <Button className="bg-[#CBA135] text-white mt-2">Browse Files</Button>
          </div>
        </div>

        <p className="popbold text-[20px]">Edit Pricing</p>
        <hr />
        
        <div className="grid md:grid-cols-3 gap-4">
          <InputField
            label="Product Price"
            name="price1"
            value={formData.price1}
            placeholder="Enter Price"
            extra={formatPrice(originalData.price1)}
            onChange={handleInputChange}
          />
          <InputField
            label="Discount Price"
            name="price2"
            value={formData.price2}
            placeholder="Enter Price"
            extra={formatPrice(originalData.price2)}
            onChange={handleInputChange}
          />
          <InputField
            label="Commission Price"
            name="price3"
            value={formData.price3}
            placeholder="Enter Price"
            extra={formatPrice(originalData.price3)}
            onChange={handleInputChange}
          />
        </div>

        {/* Inventory & Variants Section */}
        <p className="popbold text-[20px]">Edit Inventory & Variants</p>
        <hr />
        
        <div className="grid md:grid-cols-2 gap-4">
          <InputField
            label="SKU"
            name="sku"
            value={formData.sku}
            placeholder="Enter SKU"
            extra={originalData.sku || "N/A"}
            onChange={handleInputChange}
          />
          
          <InputField
            label="Stock Quantity"
            name="stockQuantity"
            value={formData.stockQuantity}
            placeholder="Enter Quantity"
            extra={originalData.stock_quantity}
            onChange={handleInputChange}
          />
          
          <DropdownSelect
            label="Edit Colors"
            options={COLOR_OPTIONS}
            selected={formData.colors}
            placeholder="Select colors"
            onToggle={(val) => toggleArrayItem("colors", val)}
            show={showColorDropdown}
            setShow={setShowColorDropdown}
          />
          
          <DropdownSelect
            label="Edit Sizes"
            options={SIZE_OPTIONS}
            selected={formData.sizes}
            placeholder="Select sizes"
            onToggle={(val) => toggleArrayItem("sizes", val)}
            show={showSizeDropdown}
            setShow={setShowSizeDropdown}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Switch 
            checked={formData.inStock} 
            onChange={(checked) => setFormData(prev => ({ ...prev, inStock: checked }))} 
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
            formData={formData} 
            onChange={handleDeliveryOptionChange} 
          />
          <DeliveryOption 
            label="Pickup" 
            optionKey="pickup" 
            formData={formData} 
            onChange={handleDeliveryOptionChange} 
          />
          <DeliveryOption 
            label="Partner Delivery" 
            optionKey="partnerDelivery" 
            formData={formData} 
            onChange={handleDeliveryOptionChange} 
          />
          
          <div className="mt-4">
            <label className="block mb-1 popbold text-[14px] text-gray-700">
              Estimated Delivery Time (days)
            </label>
            <input
              name="deliveryTime"
              value={formData.deliveryTime}
              onChange={handleInputChange}
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
            value={formData.seoTitle}
            placeholder="Enter SEO title"
            onChange={handleInputChange}
          />
          
          <TextareaField
            label="Meta Description"
            name="metaDescription"
            value={formData.metaDescription}
            placeholder="Enter meta description"
            onChange={handleInputChange}
          />
          
          <DropdownSelect
            label="Edit Tags"
            options={FURNITURE_CATEGORIES}
            selected={formData.tags}
            placeholder="Select tags"
            onToggle={(val) => toggleArrayItem("tags", val)}
            show={showTagsDropdown}
            setShow={setShowTagsDropdown}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <Button className="bg-white border px-8 py-5 border-gray-400">Save as Draft</Button>
          <Button className="bg-[#CBA135] px-8 py-5 text-white" onClick={handleSubmit}>
            Update Product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VEditProducts;