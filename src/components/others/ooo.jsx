import { Button } from "antd";
import { FaBox } from "react-icons/fa";


const DashHome = () => {
    return (
        <div className='bg-[#FAF8F2]'>
          <h3 className='text-[40px] font-semibold'>Welcome back,<span className='text-[24px] text-[#CBA135]'> Home Decor Masters</span></h3>

<div className="grid grid-cols-4 gap-5 my-10">
<div
  className=" p-5 flex flex-col gap-4 bg-white h-[162px] rounded"
  style={{ boxShadow: '0px 1px 2px 0px #0000000D' }}
>
  <div className="flex justify-between items-center">
    <h2>Top Products</h2>
    <FaBox size={24} />
  </div>
  <h3 className="text-[22px] font-bold">127,500</h3>
  <h4 className="text-[#16A34A]">+12.5% from last month</h4>
</div>
<div
  className=" p-5 flex flex-col gap-4 bg-white h-[162px] rounded"
  style={{ boxShadow: '0px 1px 2px 0px #0000000D' }}
>
  <div className="flex justify-between items-center">
    <h2>Top Products</h2>
    <FaBox size={24} />
  </div>
  <h3 className="text-[22px] font-bold">127,500</h3>
  <h4 className="text-[#16A34A]">+12.5% from last month</h4>
</div>
<div
  className=" p-5 flex flex-col gap-4 bg-white h-[162px] rounded"
  style={{ boxShadow: '0px 1px 2px 0px #0000000D' }}
>
  <div className="flex justify-between items-center">
    <h2>Top Products</h2>
    <FaBox size={24} />
  </div>
  <h3 className="text-[22px] font-bold">127,500</h3>
  <h4 className="text-[#16A34A]">+12.5% from last month</h4>
</div>
<div
  className=" p-5 flex flex-col gap-4 bg-white h-[162px] rounded"
  style={{ boxShadow: '0px 1px 2px 0px #0000000D' }}
>
  <div className="flex justify-between items-center">
    <h2>Top Products</h2>
    <FaBox size={24} />
  </div>
  <h3 className="text-[22px] font-bold">127,500</h3>
  <h4 className="text-[#16A34A]">+12.5% from last month</h4>
</div>
</div>

<div className=" bg-white p-5">
    <div className="w-1/2 ">
    <h3 className="text-[20px]">Quick Actions</h3>
<div className="flex mt-6  items-center gap-3">
        <Button className="bg-[#CBA135] py-7 w-1/2 ">Add New Product</Button>
    <Button className="w-1/2 py-7">Request Payout</Button>
</div>
</div>
</div>
        
        
        </div>
    );
};

export default DashHome;