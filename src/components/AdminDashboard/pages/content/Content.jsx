import { FaCloudUploadAlt, FaTrashAlt, FaEdit, FaSave } from "react-icons/fa";
import { useState } from "react";

const Content = () => {
  const [bannerTitle, setBannerTitle] = useState("");
  const [subheading, setSubheading] = useState("");
  const [ctaLink, setCtaLink] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showBanner, setShowBanner] = useState(false);

  return (
    <div className="p-6 bg-[#fefcf7] min-h-screen space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] popbold">Homepage Banner Manager</h2>
        <button className="bg-[#CBA135] hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <FaSave /> Save Changes
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Form */}
        <div className="col-span-2 bg-white p-6 rounded-xl shadow space-y-4">
          {/* Upload Area */}
          <div className="border-2 border-dashed bg-[#CBA1351A] border-yellow-400 rounded-lg p-12 text-center text-sm text-gray-600">
            <FaCloudUploadAlt size={32} className="mx-auto text-yellow-500" />
            <p className="popreg">
              Drag & drop banner image or{" "}
              <span className="text-yellow-500 cursor-pointer">browse files</span>
            </p>
            <p className="text-xs popreg text-gray-400 mt-1">
              Recommended: 1920x600px, JPG/PNG
            </p>
          </div>

          {/* Form Fields */}
<div>
  <h5 className="text-[16px] popmed py-1">Banner Title</h5>
            <input
            type="text"
            placeholder="Enter banner title"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={bannerTitle}
            onChange={(e) => setBannerTitle(e.target.value)}
          />
</div>
  <h5 className="text-[16px] popmed py-1">Subheading (Optional)</h5>
          <input
            type="text"
            placeholder="Enter subheading"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={subheading}
            onChange={(e) => setSubheading(e.target.value)}
          />
            <h5 className="text-[16px] popmed py-1">CTA Link/URL</h5>
          <input
            type="text"
            placeholder="https://example.com"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={ctaLink}
            onChange={(e) => setCtaLink(e.target.value)}
          />

          {/* Date Pickers */}
          <div className="flex gap-4">
            <div className="w-full">
                <h5 className="text-[16px] popmed py-1">Start Date</h5>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            </div>
             <div className="w-full">
               <h5 className="text-[16px] popmed py-1">End Date</h5>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
             </div>
          </div>

          {/* Show Banner + Button */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-[16px] popreg">
              <input
                type="checkbox"
                checked={showBanner}
                onChange={(e) => setShowBanner(e.target.checked)}
              />
              Show Banner
            </label>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
              + Add Banner
            </button>
          </div>
        </div>

        {/* Preview */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-sm font-semibold mb-3">Preview</h3>
          <div className="space-y-4">
            <div className="bg-gray-300 h-32 rounded flex items-center justify-center">
              <FaCloudUploadAlt className="text-gray-500 text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Active Banners */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="text-sm font-semibold mb-2">Active Banners</h3>
        <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
          <div>
            <p className="font-medium">Summer Sale Banner</p>
            <p className="text-sm text-gray-500">Active until Aug 31, 2024</p>
          </div>
          <div className="flex gap-3 text-gray-600">
            <FaEdit className="cursor-pointer  text-[#CBA135] hover:text-blue-500" />
            <FaTrashAlt size={16} className="cursor-pointer text-[#EF4444] hover:text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
