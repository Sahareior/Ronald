import { Select, Input, Button, Tooltip, Switch } from 'antd';
import { CheckCircleOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './OrderTracking.css'
const { TextArea } = Input;
import { Steps } from 'antd';
import Breadcrumb from '../others/Breadcrumb';
import { FaAddressBook } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { FaCarSide, FaLocationDot } from 'react-icons/fa6';
import { TiMessage } from 'react-icons/ti';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import TrackingMap from './ToolComponents/TrackingMap';
const OrderTracking = () => {

const onChange = checked => {
  console.log(`switch to ${checked}`);
};

return (
<div className="bg-[#FAF8F2] pb-10">
  <div className="mx-20 px-4">
    <Breadcrumb />

    {/* Header */}
    <div className="my-8">
      <h2 className="text-[30px] font-bold">Order Tracking</h2>
      <p className="text-[16px] text-gray-600">Track your order and manage delivery details</p>
    </div>

    {/* Grid layout: Left (main) + Right (sidebar) */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* LEFT COLUMN: Steps + Delivery + Notifications */}
      <div className="space-y-6 lg:col-span-2">
        
        {/* Steps */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <Steps
            size="small"
            current={2}
            items={[
              { title: 'Order Placed' },
              { title: 'Processing' },
              { title: 'Shipped' },
              { title: 'Out for Delivery' },
              { title: 'Delivered' },
            ]}
          />
          <div className="bg-[#EAE7E1] p-5 mt-6 rounded-md">
            <p className="text-[16px] font-semibold">Current Status: Shipped</p>
            <p className="text-[14px]">Your order is on the way. Expected delivery: July 20, 2025</p>
          </div>
        </div>

        {/* Delivery Details */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-6">Delivery Details</h2>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Location Type</label>
            <Select
              defaultValue="Home"
              className="w-full h-[46px]"
              options={[
                { value: 'Home', label: 'Home' },
                { value: 'Office', label: 'Office' },
                { value: 'Other', label: 'Other' },
              ]}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Landmark Description</label>
          <input
  type="text"
  placeholder="Near Central Mosque, opposite University"
  className="h-[46px] w-full border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-0 focus:border-gray-400"
/>

          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">GPS Pinning</label>
            <div className="flex gap-2">
             <input
  type="text"
  placeholder="Longitude"
  className="h-[46px] w-full border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-0 focus:border-gray-400"
/>

            <input
  type="text"
   placeholder="Latitude"
  className="h-[46px] w-full border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-0 focus:border-gray-400"
/>

              <button className="w-24 h-[46px] bg-[#CBA135] rounded-[12px] flex justify-center items-center text-white">
                <FaLocationDot size={18} />
              </button>
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium">Note to Driver</label>
           <textarea
  rows={4}
  placeholder="Call when you arrive. House has a blue gate."
  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-400 resize-none"
/>

          </div>

          <Button
            type="primary"
            className="w-full bg-[#CBA135] text-white font-semibold py-5"
            icon={<EnvironmentOutlined />}
          >
            Use My Current Location
          </Button>
        </div>

        {/* Notification Preferences */}
        <div className="p-6 bg-white rounded-xl shadow-sm space-y-5">
          <h3 className="text-lg font-semibold text-gray-800">Notification Preferences</h3>

          {['SMS Notifications', 'Email Updates', 'Push Alerts'].map((label, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-[#EAE7E1] p-4 rounded-lg shadow-inner"
            >
              <div className="flex items-center gap-3 text-gray-700">
                <TiMessage className="text-2xl text-[#CBA135]" />
                <p className="text-sm font-medium">{label}</p>
              </div>
              <Switch defaultChecked onChange={onChange} />
            </div>
          ))}

          <div className="bg-[#FAF8F2] p-4 rounded-lg">
            <p className="text-[16px] font-semibold mb-1">Message Preview:</p>
            <p className="text-[14px]">
              "Your WRIKO order #Wriko240001 has been shipped. ETA: July 20."
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Order Summary */}
<div className='flex flex-col justify-between gap-6'>
          <div className="bg-white p-6 rounded-xl shadow-md h-fit">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

        <div className="space-y-4">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="flex justify-between gap-4">
              <div className="flex gap-4">
                <img
                  src="/image/featured/img1.png"
                  alt="Sofa"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h4 className="text-sm font-semibold">Luxury Velvet Sectional Sofa</h4>
                  <p className="text-xs text-gray-500">by Elegant Furniture Co.</p>
                  <p className="text-xs text-gray-500">Qty: 1</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-right">$3000.00</p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 mt-6 pt-4 space-y-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Subtotal (3 items)</span>
            <span>$7000.00</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery fee</span>
            <span>$80.00</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>$50.00</span>
          </div>
          <div className="flex justify-between">
            <span>Total Discount</span>
            <span className="text-green-600">-$100.00</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <h4 className="text-base font-semibold">Total</h4>
          <h4 className="text-xl font-bold text-[#CBA135]">$7030.00</h4>
        </div>

     <div className='bg-[#EAE7E1] rounded-2xl space-y-2 p-5 mt-5'>
        <p className='flex  items-center gap-2'><FaCarSide size={21} className='text-[#CBA135]' /> Delivery Info</p>
          <p className='text-[12px]'>Order: #Wriko240001</p>
          <p className='text-[12px]'>Expected: July 20, 2024</p>
          <p className='text-[12px]'>Carrier: XYZ</p>
     </div>

             <button className="w-full bg-[#2B2B2B] text-white font-semibold text-sm py-3 mt-5 rounded-md hover:bg-yellow-600">
          Contact Support
        </button>
      </div>
      {/* ........................................... */}
          <TrackingMap />
</div>


    </div>
  </div>
</div>
);
}



export default OrderTracking;