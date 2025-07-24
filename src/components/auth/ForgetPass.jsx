import { Button, Input } from 'antd';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from 'react-router-dom';

const ForgetPass = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <img className="w-full h-full object-cover absolute inset-0" src="/image/auth.png" alt="" />

      {/* Footer Image */}
      <img className="top-12 right-16 absolute z-10" src="/image/footer.png" alt="" />





      {/* Login Card */}
      <div
        className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 p-12 py-24 rounded-xl w-[90%] max-w-xl text-white space-y-5"
        style={{
          background:
            'linear-gradient(111.03deg, rgba(169, 141, 45, 0.37) -4.98%, rgba(64, 49, 22, 0.37) 100%)',
          border: '1.5px solid',
          borderImageSource:
            'linear-gradient(109.49deg, rgba(59, 44, 19, 0.6) 0%, rgba(166, 135, 31, 0.6) 100%)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
        }}
      >

   <h2 className="text-[34px] font-semibold text-center">Forget Password</h2>
        {/* Phone Input */}
            <div className=' py-5'>
          <label className="text-sm block py-4 ">Email</label>
          <Input className='h-[48px] placeholder-[#CBA135] bg-white' placeholder="Enter your email" />
        </div>
         <Link to='/verify'>
         <Button className="w-full bg-[#CBA135] text-white font-medium py-5" type="primary">
          Get Otp
        </Button>
         </Link>
      </div>
    </div>
  );
};

export default ForgetPass;
