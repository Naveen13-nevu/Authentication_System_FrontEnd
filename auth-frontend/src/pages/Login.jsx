import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/login", data);
      localStorage.setItem("token", res.data.token);
      toast.success("Login success");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data || "Login failed");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} required /><br/>
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required /><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}