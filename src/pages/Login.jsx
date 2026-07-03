import { useState   } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function  Login() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    

  const handleLogin = async () => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

    alert("Login Successful");
    navigate("/dashboard");
  } catch (error) {
    alert("Invalid Email or Password");
    console.error(error);
  }
};
  

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Admin Login</h1>

        <input
  type="email"
  placeholder="Editor Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
        

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;