import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../hooks/useAuth";

function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/portfolio">Portfolio</Link> |
      <Link to="/about">About</Link> |
      <Link to="/contact">Contact</Link> |

      {user ? (
        <>
          <Link to="/dashboard">Dashboard</Link> |
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/login"> Admin Login</Link>
      )}
    </nav>
  );
}

export default Navbar;