import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/register", data);

      // ✅ STORE EMAIL (IMPORTANT FIX)
      localStorage.setItem("email", data.email);

      toast.success(res.data);

      navigate("/verify");

    } catch (err) {
      toast.error(err.response?.data || "Error");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form onSubmit={handleRegister} className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">Register</h3>

        <input type="text" name="name" placeholder="Name" className="form-control mb-2" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="form-control mb-2" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="form-control mb-3" onChange={handleChange} required />

        <button type="submit" className="btn btn-primary w-100">Register</button>

        <p className="mt-3 text-center">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} style={{ cursor: "pointer", color: "blue" }}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;