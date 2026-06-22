import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./login.css";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (res.status === 401 || res.status === 400) {
          toast.error("Wrong username or password");
        } else if (res.status === 409) {
          toast.error(data.message || "Conflict: account issue, please try again");
        } else if (res.status === 404) {
          toast.error("Login endpoint not found");
        } else {
          toast.error(data.message || `Login failed (${res.status})`);
        }
        return;
      }

      console.log("Got token:", data.jwt);
      localStorage.setItem("token", data.jwt);
      toast.success("Logged in!");
      navigate("/");
    } catch (err) {
      toast.error("Could not reach the server");
      console.error(err);
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login-form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-submit-btn">
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;