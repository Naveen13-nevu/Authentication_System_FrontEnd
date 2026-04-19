import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import toast from "react-hot-toast";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/verify", { email, otp });
      toast.success("Account verified");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data || "Invalid OTP");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Verify OTP</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} required /><br/>
        <button type="submit">Verify</button>
      </form>
    </div>
  );
}