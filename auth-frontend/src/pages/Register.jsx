import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/register", data);
      localStorage.setItem("email", data.email);
      toast.success("OTP sent to your email 📧");
      navigate("/verify");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow col-md-5 mx-auto">
        <h3 className="text-center mb-3">Create Account</h3>

        <form onSubmit={handleSubmit}>
          <input className="form-control mb-3" name="name" placeholder="Name" onChange={handleChange} required />
          <input className="form-control mb-3" name="email" placeholder="Email" onChange={handleChange} required />
          <input className="form-control mb-3" type="password" name="password" placeholder="Password" onChange={handleChange} required />

          <button className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;