import { Button, DatePicker, Input, Select, Steps, message } from 'antd';
import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaCar, FaCloudUploadAlt } from 'react-icons/fa';
import { FaHandshakeSimple } from 'react-icons/fa6';
import { FiChevronDown } from 'react-icons/fi';
import { usePostSellerMutation } from '../../../../redux/slices/apiSlice';

const { Option } = Select;

// Reusable components
const SectionHeader = ({ icon, title, subtitle }) => (
  <div className="flex items-center gap-3 mb-6">
    <p className='p-2 rounded-full bg-[#CBA135]'>{icon}</p>
    <div>
      <p className="text-[20px] font-bold">{title}</p>
      <p className="text-[14px] text-gray-600">{subtitle}</p>
    </div>
  </div>
);

const FileUploader = ({ title, name, onChange, multiple = false }) => {
  const handleFileChange = (e) => {
    const files = multiple ? Array.from(e.target.files) : e.target.files[0];
    onChange(name, files);
  };

  return (
    <div className="space-y-3 mt-7">
      <h2 className="popbold text-[18px] text-gray-800">{title}</h2>
      <div className="bg-[#EAE7E1] rounded-xl border border-dashed border-gray-400 p-6 flex flex-col items-center justify-center space-y-3 hover:shadow-md transition-all">
        <FaCloudUploadAlt className="text-4xl text-[#CBA135]" />
        <p className="popmed text-[16px] text-gray-700">Drag & drop images here</p>
        <p className="popreg text-[14px] text-gray-600 text-center">
          or click to browse (Min 1, Max 6 images)
        </p>
        <input
          type="file"
          id={name}
          className="hidden"
          accept="image/*"
          multiple={multiple}
          onChange={handleFileChange}
        />
        <label
          htmlFor={name}
          className="bg-[#CBA135] hover:bg-[#b8962e] text-white px-6 py-2 rounded-md shadow-sm transition-all cursor-pointer"
        >
          Browse Files
        </label>
      </div>
    </div>
  );
};

const SellerReg = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [postSeller] = usePostSellerMutation()
  const [formData, setFormData] = useState({
    // Contact Information
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    phone: '',

    // Business Information
    businessName: '',
    businessAddress: '',
    country: '',
    city: '',
    state: '',
    postalCode: '',
    date: '',
    businessType: '',
    taxpayerNumber: '',
    tradeRegisterNumber: '',

    // Verify Information
    frontId: [],
    backId: [],
    businessOwner: [],
    homeLocalizationPlan: '',
    businessLocalizationPlan: '',
    taxFile: '',
    tradeFile: '',
    
    // Verification
    captcha: ''
  });

  const steps = [
    {
      title: 'Contact Info',
      content: <ContactInfoStep formData={formData} setFormData={setFormData} />,
    },
    {
      title: 'Business Info',
      content: <BusinessInfoStep formData={formData} setFormData={setFormData} />,
    },
    {
      title: 'Verify',
      content: <VerifyInfoStep formData={formData} setFormData={setFormData} />,
    },
  ];

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const validateStep = (step) => {
    switch (step) {
      case 0: // Contact Info
        if (!formData.firstName || !formData.lastName || !formData.jobTitle || !formData.email || !formData.phone) {
          message.error('Please fill all required fields in Contact Information');
          return false;
        }
        return true;
      case 1: // Business Info
        if (!formData.businessName || !formData.businessAddress || !formData.country || 
            !formData.city || !formData.state || !formData.postalCode || !formData.date || 
            !formData.businessType || !formData.taxpayerNumber || !formData.tradeRegisterNumber) {
          message.error('Please fill all required fields in Business Information');
          return false;
        }
        return true;
      case 2: // Verify
        if (formData.frontId.length === 0 || formData.backId.length === 0 || 
            formData.businessOwner.length === 0 || !formData.homeLocalizationPlan || 
            !formData.businessLocalizationPlan || !formData.taxFile || !formData.tradeFile) {
          message.error('Please fill all required fields in Verification');
          return false;
        }
        return true;
      default:
        return true;
    }
  };

const handleApply = async () => {
  try {
    const formPayload = new FormData();

    // Append regular fields
    formPayload.append("job_title", formData.jobTitle);
    formPayload.append("phone_number", formData.phone);
    formPayload.append("legal_business_name", formData.businessName);
    formPayload.append("business_address", formData.businessAddress);
    formPayload.append("country", formData.country);
    formPayload.append("city_town", formData.city);
    formPayload.append("state_province", formData.state);
    formPayload.append("postal_code", formData.postalCode);
    formPayload.append("established_date", formData.date);
    formPayload.append("business_type", formData.businessType);
    formPayload.append("taxpayer_number", formData.taxpayerNumber);
    formPayload.append("trade_register_number", formData.tradeRegisterNumber);
    formPayload.append("status", "pending");
    formPayload.append("home_localization_plan", formData.homeLocalizationPlan);
    formPayload.append("business_localization_plan", formData.businessLocalizationPlan);
    formPayload.append("user", 9); // replace with logged-in user ID

    // Append files
    if (formData.frontId) {
      if (Array.isArray(formData.frontId)) {
        formData.frontId.forEach(file => formPayload.append("nid_front", file));
      } else {
        formPayload.append("nid_front", formData.frontId);
      }
    }

    if (formData.backId) {
      if (Array.isArray(formData.backId)) {
        formData.backId.forEach(file => formPayload.append("nid_back", file));
      } else {
        formPayload.append("nid_back", formData.backId);
      }
    }

    if (formData.businessOwner) {
      if (Array.isArray(formData.businessOwner)) {
        formData.businessOwner.forEach(file => formPayload.append("business_owner", file));
      } else {
        formPayload.append("business_owner", formData.businessOwner);
      }
    }

    if (formData.taxFile) {
      formPayload.append("taxpayer_doc", formData.taxFile);
    }

    if (formData.tradeFile) {
      formPayload.append("trade_register_doc", formData.tradeFile);
    }

    // Send via mutation
    await postSeller(formPayload).unwrap();
    message.success("Application submitted successfully!");
  } catch (error) {
    console.error(error);
    message.error("Failed to submit application");
  }
};


  return (
    <div className="bg-[#FAF8F2] px-6 md:px-20 py-20 pb-28">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="flex justify-center text-[#CBA135] mb-3">
          <FaHandshakeSimple size={48} />
        </div>
        <h2 className="text-[32px] md:text-[48px] popbold mb-3">🛍️ Partner with WIROKO</h2>
        <p className="text-[18px] md:text-[20px] text-gray-700">
          Join our curated network of premium furniture vendors and reach customers worldwide
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-4xl mx-auto mb-12">
        <Steps current={currentStep}>
          {steps.map((item) => (
            <Steps.Step key={item.title} title={item.title} />
          ))}
        </Steps>
      </div>

      {/* Current Step Content */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-xl">
        {steps[currentStep].content}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between max-w-3xl mx-auto mt-6">
        {currentStep > 0 && (
          <Button onClick={prevStep} className="bg-gray-200 hover:bg-gray-300 py-4 px-8">
            Previous
          </Button>
        )}
        {currentStep < steps.length - 1 ? (
          <Button onClick={nextStep} className="bg-[#CBA135] hover:bg-[#b8962e] text-white py-4 px-8 ml-auto">
            Next
          </Button>
        ) : (
          <Button 
            onClick={handleApply}
            className="bg-[#CBA135] hover:bg-[#b8962e] text-white py-4 px-8 ml-auto"
          >
            Apply Now
          </Button>
        )}
      </div>
    </div>
  );
};

// Step Components
const ContactInfoStep = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelect = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <SectionHeader
        icon={<CgProfile size={20} className="text-white" />}
        title="Contact Information"
        subtitle="Tell us how to reach you"
      />

      <div className="grid md:grid-cols-2 gap-4">
        <div className='mt-2'>
          <label className="block mb-1 popbold text-[14px] text-gray-700">First Name</label>
          <input 
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter First Name" 
            className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" 
          />
        </div>

        <div className='mt-2'>
          <label className="block mb-1 popbold text-[14px] text-gray-700">Last Name *</label>
          <input 
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name" 
            className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" 
          />
        </div>

        <div>
          <label className="block mb-1 popbold text-[14px] text-gray-700">Job Title *</label>
          <Select
            placeholder="Select Your Role"
            className="w-full h-[44px]"
            suffixIcon={<FiChevronDown className="text-gray-500" />}
            onChange={(value) => handleSelect('jobTitle', value)}
            defaultValue="Select Job Title"
            value={formData.jobTitle}
          >
            
            <Option value="owner">Owner</Option>
            <Option value="manager">Manager</Option>
            <Option value="designer">Designer</Option>
          </Select>
        </div>

        <div className='mt-2'>
          <label className="block mb-1 popbold text-[14px] text-gray-700">Email Address *</label>
          <input 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email Address" 
            className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" 
          />
        </div>
      </div>
      <div className='mt-2'>
        <label className="block mb-1 popbold text-[14px] text-gray-700">Phone Number *</label>
        <input 
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter Phone Number" 
          className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" 
        />
      </div>
    </>
  );
};

const BusinessInfoStep = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelect = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDate = (date, dateString) => {
    setFormData(prev => ({ ...prev, date: dateString }));
  };

  return (
    <>
      <SectionHeader
        icon={<CgProfile size={20} className="text-white" />}
        title="Business Information"
        subtitle="Details about your company"
      />

      <div className='mt-2'>
        <label className="block mb-1 popbold text-[14px] text-gray-700">Legal Business Name *</label>
        <input 
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          placeholder="Enter Business Name" 
          className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" 
        />
      </div>

      <div className='mt-2'>
        <label className="block mb-1 popbold text-[14px] text-gray-700">Business Address *</label>
        <input 
          name="businessAddress"
          value={formData.businessAddress}
          onChange={handleChange}
          placeholder="Enter Business Address" 
          className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" 
        />
      </div>
      
      <div className="grid md:grid-cols-2 mt-3 gap-4">
        <div>
          <label className="block mb-1 popbold text-[14px] text-gray-700">Country *</label>
          <input 
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Enter Country Name" 
            className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" 
          />
        </div>
        <div>
          <label className="block mb-1 popbold text-[14px] text-gray-700">City/Town *</label>
          <input 
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter City/Town Name" 
            className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" 
          />
        </div>
        <div>
          <label className="block mb-1 popbold text-[14px] text-gray-700">State/Province *</label>
          <input 
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Enter State/Province" 
            className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" 
          />
        </div>
        <div>
          <label className="block mb-1 popbold text-[14px] text-gray-700">Postal Code *</label>
          <input 
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="Enter Postal Code" 
            className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" 
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 mt-3 gap-4">
        <div>
          <label className="block mb-1 popbold text-[14px] text-gray-700">Date*</label>
          <DatePicker
            className="w-full h-[44px] border border-[#D1D5DB] rounded-md px-4 py-2 text-gray-700"
            placeholder="Enter Date"
            style={{ width: '100%' }}
            popupClassName="custom-datepicker-popup"
            onChange={handleDate}
          />
        </div>
        <div>
          <label className="block mb-1 popbold text-[14px] text-gray-700">Business Type *</label>
          <input 
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            placeholder="Enter Business Type" 
            className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" 
          />
        </div>
        <div>
          <label className="block mb-1 popbold text-[14px] text-gray-700">Tax payer Number*</label>
          <input 
            name="taxpayerNumber"
            value={formData.taxpayerNumber}
            onChange={handleChange}
            placeholder="Enter Taxpayer Number" 
            className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" 
          />
        </div>
        <div>
          <label className="block mb-1 popbold text-[14px] text-gray-700">Trade register number*</label>
          <input 
            name="tradeRegisterNumber"
            value={formData.tradeRegisterNumber}
            onChange={handleChange}
            placeholder="Enter register number" 
            className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" 
          />
        </div>
      </div>
    </>
  );
};

const VerifyInfoStep = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (name, files) => {
    setFormData(prev => ({ ...prev, [name]: files }));
  };

  return (
    <>
      <div className='flex items-center gap-3'>
        <p className='bg-[#CBA135] h-10 w-10 rounded-full flex justify-center items-center text-white'>
          <FaCar />
        </p>
        <div>
          <h3 className='popbold text-[24px]'>Verify Information</h3>
          <h4 className='text-sm popreg'>Your shipping and fulfillment capabilities</h4>
        </div>
      </div>

      <FileUploader 
        title="Front of National ID"
        name="frontId"
        onChange={handleFileChange}
         multiple={false}
      />

      <FileUploader 
        title="Back of national ID"
        name="backId"
        onChange={handleFileChange}
         multiple={false}
      />

      <FileUploader 
        title="Business owner"
        name="businessOwner"
        onChange={handleFileChange}
         multiple={false}
      />

      <div className="flex flex-col sm:flex-row mt-6 gap-4">
        <div className="flex-1 mt-2">
          <label className="block mb-1 popbold text-[14px] text-gray-700">
            Home localization plan *
          </label>
          <input
            name="homeLocalizationPlan"
            value={formData.homeLocalizationPlan}
            onChange={handleChange}
            placeholder="Enter Home localization plan"
            className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]"
          />
        </div>

        <div className="flex-1 mt-2">
          <label className="block mb-1 popbold text-[14px] text-gray-700">
            Business Localization plan *
          </label>
          <input
            name="businessLocalizationPlan"
            value={formData.businessLocalizationPlan}
            onChange={handleChange}
            placeholder="Enter Business Localization plan "
            className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row mt-6 gap-4">
        <div className="flex-1">
          <label className="block mb-1 popbold text-[14px] text-gray-700">
            Taxpayer Number *
          </label>
          <div className="flex gap-2">


              <FileUploader 
        title="Business owner"
        name="taxFile"
        onChange={handleFileChange}
         multiple={false}
      />

          </div>
        </div>

        <div className="flex-1">
          <label className="block mb-1 popbold text-[14px] text-gray-700">
            Trade Register Number *
          </label>
          <div className="flex gap-2">


              <FileUploader 
        title="Business owner"
        name="tradeFile"
        onChange={handleFileChange}
         multiple={false}
      />

          </div>
        </div>
      </div>

    </>
  );
};

export default SellerReg;