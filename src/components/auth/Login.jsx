import { Button, Input } from 'antd';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addCustomerId, selectedLocation } from '../../redux/slices/customerSlice';
import { useCustomerLoginMutation } from '../../redux/slices/apiSlice';
import Swal from 'sweetalert2';


const Login = () => {
  const dispatch = useDispatch();
  const [customerLogin] = useCustomerLoginMutation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

const data = useSelector(state => state.customer.location)

    // if (email === 'customer@gmail.com') {
    //   dispatch(selectedLocation('customer'));
    //   navigate('/')
    // } else if (email === 'sells@gmail.com') {
    //   dispatch(selectedLocation('seller'));
    //   navigate('/')
    // } else {
    //   console.log('Unknown user');
    // }

const handleLogin = async (e) => {
  e.preventDefault();
  const loginData = { email, password };

  try {
    const res = await customerLogin(loginData).unwrap();
    console.log(res);

    // Save to localStorage
    localStorage.setItem("access_token", res.access_token);
    localStorage.setItem("customerId", res?.user?.id);

    const token = localStorage.getItem("access_token");

    if (token) {
      // Show success alert
      await Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome back, ${res?.user?.first_name || "Customer"}!`,
        confirmButtonColor: "#CBA135",
      });

      // Redux actions & navigation
      dispatch(selectedLocation("seller"));
      dispatch(addCustomerId(res?.user?.id));
      navigate("/");
    }
  } catch (error) {
    console.error("Login failed:", error);

    // Show error alert
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: error?.data?.message || "Invalid email or password.",
      confirmButtonColor: "#CBA135",
    });
  }
};


  console.log(data)

  return (
    <div className="relative w-full h-screen">
      <img className="w-full h-full object-cover absolute inset-0" src="/image/auth2.png" alt="" />
      <img className="top-12 shadow-md object-contain right-16 absolute z-10" src="/image/footer.png" alt="" />

<div
  className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 p-2 py-12 rounded-xl w-[90%] max-w-xl text-white space-y-5"
  style={{
    background: 'linear-gradient(109.52deg, rgba(205, 205, 205, 0.37) 0%, rgba(25, 22, 15, 0.37) 100%)',
 
    borderImage: 'linear-gradient(109.49deg, rgba(59, 44, 19, 0.6) 0%, rgba(166, 135, 31, 0.6) 100%)',
  
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(40px)',
  }}
>

        <h2 className="text-[34px] font-semibold text-center">Welcome Back</h2>
        <p className="text-sm text-center">
          Don’t have an account?{" "}
          <Link to='/signup' className="text-[#CBA135] cursor-pointer font-medium">Sign Up</Link>
        </p>

        <form onSubmit={handleLogin} className='space-y-7 px-11'>
          {/* Email Input */}
          <div>
            <label className="text-sm block py-1">Email</label>
            <Input
              className='h-[48px] rounded-[16px] bg-white text-black'
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="text-sm block pb-2">Password</label>
            <div className="relative">
              <Input
                className='h-[48px] rounded-[16px] bg-white'
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <MdOutlineRemoveRedEye size={19} className="absolute top-4 right-4 text-gray-500 cursor-pointer" />
            </div>
          </div>

          {/* Login Button */}
          <button htmlType="submit" className="w-full bg-[#CBA135] text-white popbold hover:bg-yellow-600 font-medium py-4 rounded-md" type="primary">
            Login
          </button>

          <Link to='/forget' className='block text-right'>Forget Password?</Link>
          
          <p className='text-center'>
            ____________________OR__________________
          </p>

          {/* Social Buttons */}
          <div className="flex justify-center gap-4 pt-6">
            <img className="bg-white p-2 w-12 h-10 rounded-[12px] object-contain" src="/image/auth/g.png" alt="Google" />
            <img className="bg-white p-2 w-12 h-10 rounded-[12px] object-contain" src="/image/auth/f.png" alt="Facebook" />
            <img className="bg-white p-2 w-12 h-10 rounded-[12px] object-contain" src="/image/auth/a.png" alt="Apple" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
