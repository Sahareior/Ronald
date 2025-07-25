import { Button, Input } from 'antd';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from 'react-router-dom';

const Login = () => {
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
        <h2 className="text-[34px] font-semibold text-center">Welcome Back</h2>
        <p className="text-sm text-center">
          Don’t have an account?{" "}
          <Link to='/signup' className="text-[#CBA135] cursor-pointer font-medium">Sign Up</Link>
        </p>

        {/* Phone Input */}
<div className='space-y-7'>
            

        {/* Password Input */}
        <div className='-mt-9'>

            <div className=' py-5'>
          <label className="text-sm block py-1 ">Phone Number</label>
          <Input className='h-[48px] placeholder-[#CBA135] bg-white text-black' placeholder="015103264" />
        </div>
          <label className="text-sm block pb-2">Password</label>
          <div className="relative">
            <Input className='h-[48px] bg-white'  placeholder="Enter your password" type="password" />
            <MdOutlineRemoveRedEye size={19} className="absolute top-4 right-4 text-gray-500 cursor-pointer" />
          </div>
        </div>
        

        {/* Login Button */}
        <Button className="w-full bg-[#CBA135] text-white font-medium py-5" type="primary">
          Login
        </Button>
<Link to='/forget' className='block text-right '>
  Forget Password?
</Link>

{/* Social Buttons */}
<div className="flex justify-center gap-4 pt-6">
  <img
    className="bg-white p-2 w-12 h-10 rounded-[12px] object-contain"
    src="/image/auth/g.png"
    alt="Google"
  />
  <img
    className="bg-white p-2 w-12 h-10 rounded-[12px] object-contain"
    src="/image/auth/f.png"
    alt="Facebook"
  />
  <img
    className="bg-white p-2 w-12 h-10 rounded-[12px] object-contain"
    src="/image/auth/a.png"
    alt="Apple"
  />
</div>

</div>
      </div>
    </div>
  );
};

export default Login;
