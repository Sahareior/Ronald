import { useState } from 'react';
import { Button, Input } from 'antd';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from 'react-router-dom';

const Signup = () => {
  const [agree, setAgree] = useState(false);

  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <img className="w-full h-full object-cover absolute inset-0" src="/image/auth.png" alt="" />

      {/* Footer Image */}
      <img className="top-12 right-16 absolute z-10" src="/image/footer.png" alt="" />

      {/* Sign Up Card */}
      <div
        className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 p-12 py-16 rounded-xl w-[90%] max-w-xl text-white space-y-5"
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
        <h2 className="text-[34px] font-semibold text-center">Create your account</h2>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link to='/login' className="text-[#CBA135] cursor-pointer font-medium">Sign In</Link>
        </p>

        {/* Form Fields */}
        <div className="space-y-6">
          <div>
            <label className="text-sm block pb-1">Full Name</label>
            <Input className="h-[48px] rounded-[16px] placeholder-[#A7A1A1] bg-white" placeholder="Enter Your Full Name" />
          </div>

          <div>
            <label className="text-sm block pb-1">Email Address</label>
            <Input className="h-[48px] placeholder-[#A7A1A1] rounded-[16px] bg-white" placeholder="Enter your email" type="email" />
          </div>

          <div>
            <label className="text-sm block pb-1">Password</label>
            <div className="relative">
              <Input className="h-[48px] placeholder-[#A7A1A1] rounded-[16px] bg-white" placeholder="Enter your password" type="password" />
              <MdOutlineRemoveRedEye size={19} className="absolute top-4 right-4 text-gray-500 cursor-pointer" />
            </div>
          </div>

          {/* Terms Agreement Checkbox */}
          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              id="agree"
              className="accent-[#CBA135]  bg-[#CBA135] w-4 h-4"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label htmlFor="agree" className="text-sm">
              I agree to the <span className="text-[#CBA135] underline cursor-pointer">Terms and Conditions</span>
            </label>
          </div>

          {/* Sign Up Button */}
          <Button
            className="w-full bg-[#CBA135] text-white font-medium py-5"
            type="primary"
            disabled={!agree}
          >
            Sign Up
          </Button>


          <h5 className='text-center'>_______________ OR ______________</h5>

          {/* Social Buttons */}
          <div className="flex justify-center gap-4 pt-6">
            <img className="bg-white p-2 w-12 h-10 rounded-[12px] object-contain" src="/image/auth/g.png" alt="Google" />
            <img className="bg-white p-2 w-12 h-10 rounded-[12px] object-contain" src="/image/auth/f.png" alt="Facebook" />
            <img className="bg-white p-2 w-12 h-10 rounded-[12px] object-contain" src="/image/auth/a.png" alt="Apple" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
