export default function Dashboard() {
  const token = localStorage.getItem("token");

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>
      <p>Login Successful 🎉</p>
      <textarea rows="5" cols="50" value={token} readOnly />
    </div>
  );
}