const Dashboard = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="text-center mt-5">
      <h2>Welcome 🎉</h2>
      <p>Your Token:</p>
      <textarea value={token} readOnly rows={5} cols={50} />
    </div>
  );
};

export default Dashboard;