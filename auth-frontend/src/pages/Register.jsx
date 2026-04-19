import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import toast from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/register", data);
      toast.success("OTP sent to email");
      localStorage.setItem("email", data.email);
      navigate("/verify");
    } catch (err) {
      toast.error(err.response?.data || "Error");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required /><br/>
        <input name="email" placeholder="Email" onChange={handleChange} required /><br/>
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required /><br/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}