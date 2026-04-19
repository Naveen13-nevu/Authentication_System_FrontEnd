import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container mt-5 text-center">
      <div className="card p-4 shadow col-md-5 mx-auto">
        <h2>Welcome 🎉</h2>
        <p>You are successfully logged in.</p>

        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;