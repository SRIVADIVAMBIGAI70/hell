import { useState } from "react";

function Login({ onLogin }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {

    e.preventDefault();

    // Empty field check
    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    let role = "student";
    let name = "Student";

    // Admin login
    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {
      role = "admin";
      name = "Placement Admin";
    }

    // User object
    const user = {
      name: name,
      email: email,
      role: role,
      skills: []
    };

    onLogin(user);
  };

  return (
    <div className="login-page">

      <div className="login-box">

        <h1>Welcome Back</h1>

        <p>
          Login to your Placement Tracker account
        </p>

        <form onSubmit={login}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            className="primary-btn full"
            type="submit"
          >
            Login
          </button>

        </form>

        {/* Demo Admin Login */}
        <div className="demo-login">

          <p>
            <b>Admin Demo Login</b>
          </p>

          <p>
            Email: admin@gmail.com
          </p>

          <p>
            Password: admin123
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;