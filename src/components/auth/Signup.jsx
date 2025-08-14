import { useState } from "react";
import { Button, Input } from "antd";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useCustomerSignupMutation } from "../../redux/slices/apiSlice";
import Swal from "sweetalert2";

const Signup = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    agree_to_terms: true
  });
  const [agree, setAgree] = useState(false);

  const navigate = useNavigate()
  // const [signupUser, { isLoading }] = useSignupUserMutation();
  const [customerSignup] = useCustomerSignupMutation(

  )

const isLoading = false
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

const handleSubmit = async () => {
  try {
    const res = await customerSignup(formData).unwrap();

    // Save access token to localStorage
    localStorage.setItem("access_token", res.access_token);

    // Show success alert
    await Swal.fire({
      icon: "success",
      title: "Account Created!",
      text: "Your account has been created successfully.",
      confirmButtonColor: "#CBA135",
    });

    console.log("Signup successful:", res);
    navigate('/login')

  } catch (error) {
    console.error("Signup failed:", error);

    // Show error alert
    Swal.fire({
      icon: "error",
      title: "Signup Failed",
      text: error?.data?.message || "Something went wrong. Please try again.",
      confirmButtonColor: "#CBA135",
    });
  }
};

  return (
    <div className="relative w-full h-screen">
      <img className="w-full h-full object-cover absolute inset-0" src="/image/auth2.png" alt="" />
      <img className="top-12 right-16 absolute z-10" src="/image/footer.png" alt="" />

      <div
        className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 p-12 py-16 rounded-xl w-[90%] max-w-xl text-white space-y-5"
        style={{
          background: "linear-gradient(109.52deg, rgba(205, 205, 205, 0.37) 0%, rgba(25, 22, 15, 0.37) 100%)",
          backdropFilter: "blur(9px)",
          WebkitBackdropFilter: "blur(40px)",
        }}


      >
        <h2 className="text-[34px] font-semibold text-center">Create your account</h2>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-[#CBA135] cursor-pointer font-medium">Sign In</Link>
        </p>

        <div className="space-y-6">
          <div>
            <label className="text-sm block pb-1">Full Name</label>
            <Input
              className="h-[48px] rounded-[16px] placeholder-[#A7A1A1] bg-white"
              placeholder="Enter Your Full Name"
              value={formData.full_name}
              onChange={(e) => handleChange("full_name", e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm block pb-1">Email Address</label>
            <Input
              className="h-[48px] placeholder-[#A7A1A1] rounded-[16px] bg-white"
              placeholder="Enter your email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm block pb-1">Password</label>
            <div className="relative">
              <Input
                className="h-[48px] placeholder-[#A7A1A1] rounded-[16px] bg-white"
                placeholder="Enter your password"
                type="password"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
              />
              <MdOutlineRemoveRedEye size={19} className="absolute top-4 right-4 text-gray-500 cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              id="agree"
              className="accent-[#CBA135] w-4 h-4"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label htmlFor="agree" className="text-sm">
              I agree to the <span className="text-[#CBA135] underline cursor-pointer">Terms and Conditions</span>
            </label>
          </div>

          <Button
            className="w-full bg-[#CBA135] text-white font-medium py-5"
            type="primary"
            disabled={!agree || isLoading}
            onClick={handleSubmit}
          >
            {isLoading ? "Creating..." : "Sign Up"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
