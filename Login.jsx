import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const login = () => {
    if (data.email && data.password) {
      alert("Login Success");
      nav("/dashboard");
    } else {
      alert("Fill details");
    }
  };

  return (
    
  <div className="login-container">
    <div className="login-box">
      <h2>Login Page</h2>

      <label>Email</label>
      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) =>
          setData({ ...data, email: e.target.value })
        }
      />

      <label>Password</label>
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) =>
          setData({ ...data, password: e.target.value })
        }
      />
      <button >
        <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer" class="my-button">
         Login</a></button>
    </div>
  </div>
);
}