import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const email = localStorage.getItem("email");

  if (!email) {
    return <h4 className="text-center mt-5">No email found. Please register again.</h4>;
  }

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await API.post("/verify", { email, otp });
      toast.success("Account Verified ✅");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow col-md-4 mx-auto">
        <h4 className="text-center mb-3">Verify OTP</h4>

        <form onSubmit={handleVerify}>
          <input className="form-control mb-3" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />

          <button className="btn btn-success w-100">Verify</button>
        </form>
      </div>
    </div>
  );
}

export default VerifyOtp;