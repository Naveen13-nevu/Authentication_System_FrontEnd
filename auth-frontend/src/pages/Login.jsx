import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/login", data);

      localStorage.setItem("token", res.data.token);

      toast.success("Login successful");

      navigate("/dashboard");

    } catch (err) {
      toast.error(err.response?.data || "Login failed");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form onSubmit={handleLogin} className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">Login</h3>

        <input type="email" name="email" placeholder="Email" className="form-control mb-2" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="form-control mb-3" onChange={handleChange} required />

        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;