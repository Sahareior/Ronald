import { Button, Input } from 'antd';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from 'react-router-dom';

const Congratulations = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <img className="w-full h-full object-cover absolute inset-0" src="/image/auth.png" alt="" />

      {/* Footer Image */}
      <img className="top-12 right-16 absolute z-10" src="/image/footer.png" alt="" />

{/*  figmaLink: https://www.figma.com/design/6v2lqdNf0AY9gMgOE0DYXh/Wiroko-01?node-id=3-4743&t=MrZmJD1BIY8Awpyb-0 */}



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
       

        {/* Phone Input */}
<div className='space-y-5'>
            
<img className='w-[181px] h-[181px] mx-auto' src="/image/auth/congo.png" alt="" />
        
 <h2 className="text-[24px] font-semibold text-center">Congratulations!</h2>

 <p className='text-[22px] text-center'>You are ready to explore our web!</p>
        {/* Login Button */}
        <Button className="w-full bg-[#CBA135] text-white font-medium py-5" type="primary">
          Explore
        </Button>


{/* Social Buttons */}


</div>
      </div>
    </div>
  );
};

export default Congratulations;
