import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const VerifyOtp = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  
  const email = localStorage.getItem("email");

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/verify", {
        email: email,   
        otp: otp
      });

      toast.success(res.data);

      navigate("/login");

    } catch (err) {
      toast.error(err.response?.data || "Invalid OTP");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form onSubmit={handleVerify} className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">Verify OTP</h3>

        <input
          type="text"
          placeholder="Enter OTP"
          className="form-control mb-3"
          onChange={(e) => setOtp(e.target.value)}
          required
        />

        <button className="btn btn-success w-100">Verify</button>
      </form>
    </div>
  );
};

export default VerifyOtp;