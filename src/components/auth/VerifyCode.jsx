import { Button, Input } from "antd";
import { Link } from "react-router-dom";

const VerifyCode = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <img
        className="w-full h-full object-cover absolute inset-0"
        src="/image/auth2.png"
        alt=""
      />

      {/* Footer Image */}
      <img
        className="top-12 right-16 absolute z-10"
        src="/image/footer.png"
        alt=""
      />

      {/* Verify Code Card */}
      <div
        className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 p-12 py-24 rounded-xl w-[90%] max-w-xl text-white space-y-8"
  style={{
    background: 'linear-gradient(109.52deg, rgba(205, 205, 205, 0.37) 0%, rgba(25, 22, 15, 0.37) 100%)',
 
    borderImage: 'linear-gradient(109.49deg, rgba(59, 44, 19, 0.6) 0%, rgba(166, 135, 31, 0.6) 100%)',
  
    backdropFilter: 'blur(9px)',
    WebkitBackdropFilter: 'blur(40px)',
  }}
      >
        <h2 className="text-[34px] font-semibold text-center">Verify Code</h2>

        <p className="text-center text-sm text-[#f3f3f3b0]">
          Please enter the 5-digit code sent to your email
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-between gap-3 max-w-sm mx-auto">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Input
                key={index}
                maxLength={1}
                className="!h-[48px] !w-[48px] text-center text-lg font-bold bg-white border border-[#CBA135] text-white"
              />
            ))}
        </div>

        <div>
          <Link className="w-full" to="/reset">
            <Button
              className="w-full bg-[#CBA135] text-white font-medium py-5"
              type="primary"
            >
              Verify
            </Button>
          </Link>
        </div>

        <div className="text-center text-sm pt-4">
          Didn't receive the code?{" "}
          <span className="text-[#CBA135] cursor-pointer hover:underline">
            Resend
          </span>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
