import React, { useState, useRef } from 'react';
import { Button, Switch, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { FaFileUpload, FaTimes } from 'react-icons/fa';
import { useVendorProductCreateMutation } from '../../../../redux/slices/Apis/vendorsApi';

// Color and size options
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


const VAddnewProducts = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: [],
    shortDescription: '',
    fullDescription: '',
    images: [],
    price1: '',
    price2: '',
    price3: '',
    sku: '',
    stockQuantity: '',
    colors: [],
    sizes: [],
    inStock: true,
    deliveryOptions: {
      homeDelivery: { checked: false, price: '' },
      pickup: { checked: false, price: '' },
      partnerDelivery: { checked: false, price: '' }
    },
    deliveryTime: '',
    seoTitle: '',
    metaDescription: '',
    tags: []
  });

  const [showColorDropdown, setShowColorDropdown] = useState(false);
  const [showSizeDropdown, setShowSizeDropdown] = useState(false);
  const [vendorProductCreate] = useVendorProductCreateMutation()
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    
    if (formData.images.length + files.length > 5) {
      message.error('You can upload a maximum of 5 images');
      return;
    }

    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));

    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...newImages]
    }));
  };

  const removeImage = (index) => {
    setFormData(prev => {
      const newImages = [...prev.images];
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);
      return { ...prev, images: newImages };
    });
  };

  const toggleColor = (color) => {
    setFormData(prev => {
      const newColors = prev.colors.includes(color)
        ? prev.colors.filter(c => c !== color)
        : [...prev.colors, color];
      return { ...prev, colors: newColors };
    });
  };

  const toggleSize = (size) => {
    setFormData(prev => {
      const newSizes = prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size];
      return { ...prev, sizes: newSizes };
    });
  };

const handleSubmit = async () => {
  let optionCount = 1;

  const submissionData = {
    ...formData,
    images: formData.images.map(img => img.file),
    deliveryOptions: Object.entries(formData.deliveryOptions)
      .filter(([_, value]) => value.checked)
      .reduce((acc, [_, value]) => {
        acc[`option${optionCount}`] = value.price;
        optionCount++;
        return acc;
      }, {})
  };
const res =  await vendorProductCreate(submissionData)
  console.log('Submitted Product Data:', res);
  message.success('Product submitted successfully!');
};


  return (
    <div>
      {/* Header */}
      <div className="bg-[#CBA135] text-white space-y-2 p-5 rounded-t-md">
        <p className="text-[24px] popbold">Add New Products</p>
        <p className="text-[16px] popreg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, molestias!
        </p>
      </div>

      {/* Main Form */}
      <div className="p-6 bg-white space-y-6 shadow-sm rounded-b-md">
        <p className='popbold text-[20px]'>Basic Information</p>
        <hr />
        
        {/* Basic Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 popbold text-[14px] text-gray-700">Product Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter Product Name"
              className="w-full border border-[#D1D5DB] bg-[#EAE7E1] rounded-md px-4 py-2 focus:outline-none"
            />
          </div>
            <div className="relative">
              <label className="block mb-1 popbold text-[14px] text-gray-700">Category</label>
              <div 
                className="w-full border border-[#D1D5DB] bg-[#EAE7E1] rounded-md px-4 py-2 focus:outline-none cursor-pointer"
                onClick={() => setShowSizeDropdown(!showSizeDropdown)}
              >
                {formData.sizes.length > 0 ? formData.sizes.join(', ') : 'Select Category'}
              </div>
              {showSizeDropdown && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {FURNITURE_CATEGORIES.map(size => (
                    <div 
                      key={size}
                      className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${formData.sizes.includes(size) ? 'bg-blue-50' : ''}`}
                      onClick={() => toggleSize(size)}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              )}
            </div>
        </div>

        {/* Descriptions */}
        <div>
          <label className="block mb-2 popbold text-[14px] text-gray-700">Short Description</label>
          <textarea
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleInputChange}
            className="border border-gray-300 w-full bg-[#EAE7E1] rounded-md px-4 py-5 focus:outline-none focus:border-black focus:ring-0"
            placeholder="Type here..."
          />
        </div>
        <div>
          <label className="block mb-2 popbold text-[14px] text-gray-700">Full Description</label>
          <textarea
            name="fullDescription"
            value={formData.fullDescription}
            onChange={handleInputChange}
            className="border border-gray-300 w-full bg-[#EAE7E1] rounded-md px-4 py-11 focus:outline-none focus:border-black focus:ring-0"
            placeholder="Type here..."
          />
        </div>

        <p className='popbold text-[20px]'>Product Image</p>
        <hr />
        
        {/* Image Upload Section */}
        <div className="space-y-4">
          {/* Image Previews */}
          {formData.images.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {formData.images.map((image, index) => (
                <div key={index} className="relative">
                  <img 
                    src={image.preview} 
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

          {/* Upload Area */}
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

        {/* Pricing Section */}
        <p className='popbold text-[20px]'>Pricing</p>
        <hr />

        <div>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-1 popbold text-[14px] text-gray-700">Product Price</label>
              <input
                name="price1"
                value={formData.price1}
                onChange={handleInputChange}
                placeholder="Enter Price"
                className="w-full border border-[#D1D5DB] bg-[#EAE7E1] rounded-md px-4 py-2 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 popbold text-[14px] text-gray-700">Discount Price</label>
              <input
                name="price2"
                value={formData.price2}
                onChange={handleInputChange}
                placeholder="Enter Price"
                className="w-full border border-[#D1D5DB] bg-[#EAE7E1] rounded-md px-4 py-2 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 popbold text-[14px] text-gray-700">Commission Price</label>
              <input
                name="price3"
                value={formData.price3}
                onChange={handleInputChange}
                placeholder="Enter Price"
                className="w-full border border-[#D1D5DB] bg-[#EAE7E1] rounded-md px-4 py-2 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <p className='popbold text-[20px]'>Inventory & Variants</p>
        <hr />

        {/* Inventory Section */}
        <div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 popbold text-[14px] text-gray-700">SKU</label>
              <input
                name="sku"
                value={formData.sku}
                onChange={handleInputChange}
                placeholder="Enter SKU"
                className="w-full border border-[#D1D5DB] bg-[#EAE7E1] rounded-md px-4 py-2 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 popbold text-[14px] text-gray-700">Stock Quantity *</label>
              <input
                name="stockQuantity"
                value={formData.stockQuantity}
                onChange={handleInputChange}
                placeholder="Enter Quantity"
                className="w-full border border-[#D1D5DB] bg-[#EAE7E1] rounded-md px-4 py-2 focus:outline-none"
              />
            </div>
            
            {/* Color Selection */}
            <div className="relative">
              <label className="block mb-1 popbold text-[14px] text-gray-700">Color</label>
              <div 
                className="w-full border border-[#D1D5DB] bg-[#EAE7E1] rounded-md px-4 py-2 focus:outline-none cursor-pointer"
                onClick={() => setShowColorDropdown(!showColorDropdown)}
              >
                {formData.colors.length > 0 ? formData.colors.join(', ') : 'Select colors'}
              </div>
              {showColorDropdown && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {COLOR_OPTIONS.map(color => (
                    <div 
                      key={color}
                      className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${formData.colors.includes(color) ? 'bg-blue-50' : ''}`}
                      onClick={() => toggleColor(color)}
                    >
                      {color}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Size Selection */}
            <div className="relative">
              <label className="block mb-1 popbold text-[14px] text-gray-700">Size</label>
              <div 
                className="w-full border border-[#D1D5DB] bg-[#EAE7E1] rounded-md px-4 py-2 focus:outline-none cursor-pointer"
                onClick={() => setShowSizeDropdown(!showSizeDropdown)}
              >
                {formData.sizes.length > 0 ? formData.sizes.join(', ') : 'Select sizes'}
              </div>
              {showSizeDropdown && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {SIZE_OPTIONS.map(size => (
                    <div 
                      key={size}
                      className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${formData.sizes.includes(size) ? 'bg-blue-50' : ''}`}
                      onClick={() => toggleSize(size)}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* In Stock Switch */}
        <div className="flex items-center gap-2">
          <Switch 
            checked={formData.inStock} 
            onChange={(checked) => setFormData(prev => ({ ...prev, inStock: checked }))} 
          />
          <p className="text-gray-700">In Stock</p>
        </div>

        <p className='popbold text-[20px] mt-5'>Delivery Options</p>
        <hr />
        
        {/* Delivery Options */}
        <div className="pt-4 py-6">
          <div className="gap-4">
            {Object.entries(formData.deliveryOptions).map(([key, value]) => (
              <label key={key} className="flex items-center gap-2 text-gray-700 mb-2">
                <input 
                  type="checkbox" 
                  checked={value.checked}
                  onChange={(e) => handleDeliveryOptionChange(key, 'checked', e.target.checked)}
                />
                {key.split(/(?=[A-Z])/).join(' ')}
                <input 
                  value={value.price}
                  onChange={(e) => handleDeliveryOptionChange(key, 'price', e.target.value)}
                  className='border border-[#D1D5DB] bg-[#EAE7E1] rounded-md w-12 focus:outline-none' 
                />
              </label>
            ))}
            <div className="md:col-span-3 mt-5">
              <label className="block mb-1 text-sm font-semibold text-gray-700">
                Estimated Delivery Time (days)
              </label>
              <input
                name="deliveryTime"
                value={formData.deliveryTime}
                onChange={handleInputChange}
                placeholder="e.g., 3-5"
                className="w-52 border border-gray-300 bg-[#EAE7E1] rounded-md px-4 py-2 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <p className='popbold text-[20px]'>SEO & Tags</p>
        <hr />
        
        {/* SEO Section */}
        <div className="pt-2">
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700">SEO Title</label>
              <input
                name="seoTitle"
                value={formData.seoTitle}
                onChange={handleInputChange}
                placeholder="SEO optimized title"
                className="w-full border bg-[#EAE7E1] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700">Meta Description</label>
              <textarea
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleInputChange}
                className="border border-gray-300 bg-[#EAE7E1] w-full rounded-md px-4 py-8 focus:outline-none focus:border-black focus:ring-0"
                placeholder="Type here..."
              />
            </div>
            <div className="relative">
              <label className="block mb-1 popbold text-[14px] text-gray-700">Category</label>
              <div 
                className="w-full border border-[#D1D5DB] bg-[#EAE7E1] rounded-md px-4 py-2 focus:outline-none cursor-pointer"
                onClick={() => setShowSizeDropdown(!showSizeDropdown)}
              >
                {formData.sizes.length > 0 ? formData.sizes.join(', ') : 'Select Category'}
              </div>
              {showSizeDropdown && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {FURNITURE_CATEGORIES.map(size => (
                    <div 
                      key={size}
                      className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${formData.sizes.includes(size) ? 'bg-blue-50' : ''}`}
                      onClick={() => toggleSize(size)}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <Button className="bg-white border px-8 py-5 border-gray-400">Save as Draft</Button>
          <Button className="bg-[#CBA135] px-8 py-5 text-white" onClick={handleSubmit}>Submit Product</Button>
        </div>
      </div>
    </div>
  );
};

export default VAddnewProducts;