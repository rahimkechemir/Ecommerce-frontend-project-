import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./signup.css";


function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // returns an error message string, or null if the field is valid
  function validate() {
    if (username.length < 5 || username.length > 32) {
      return "Username must be between 5 and 32 characters";
    }

    const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailLooksValid) {
      return "Please enter a valid email address";
    }

    if (password.length < 8 || password.length > 32) {
      return "Password must be between 8 and 32 characters";
    }
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
      return "Password must contain at least one letter and one number (letters and numbers only)";
    }

    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      toast.error(validationError);
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (res.status === 409) {
          toast.error("Username or email already taken");
        } else if (res.status === 400 || res.status === 403) {
          toast.error(data.message || "Please check your details and try again");
        } else {
          toast.error(data.message || `Signup failed (${res.status})`);
        }
        return;
      }

      toast.success("Account created! Please log in.");
      navigate("/login");
    } catch (err) {
      toast.error("Could not reach the server");
      console.error(err);
    }
  }

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="signup-form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="signup-form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="signup-form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <small className="signup-hint">
            8+ characters, at least one letter and one number, no symbols
          </small>
        </div>
        <button type="submit" className="signup-submit-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;