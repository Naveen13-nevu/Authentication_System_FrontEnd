import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)"
      }}
    >
      <div
        className="card text-center p-5 shadow-lg"
        style={{ borderRadius: "15px", width: "400px" }}
      >
        <h1 style={{ fontSize: "60px" }}>🎉</h1>

        <h2 className="mb-3">Login Successful</h2>

        <p className="text-muted">
          Welcome to your dashboard. Your authentication system is working perfectly.
        </p>

        <button
          className="btn btn-danger mt-3"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;