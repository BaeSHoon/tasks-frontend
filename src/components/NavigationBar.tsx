import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const NavigationBar = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const success = await logout();
    if (success) {
      navigate("/");
    }
  };

  return (
    <nav style={{ backgroundColor: "#282c34", padding: "1rem" }}>
      <ul style={{ listStyleType: "none", display: "flex", gap: "1rem" }}>
        <li>
          <Link to="/" style={{ color: "#61dafb", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link
                to="/info"
                style={{ color: "#61dafb", textDecoration: "none" }}
              >
                {user?.email}
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                style={{
                  color: "#61dafb",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link
              to="/login"
              style={{ color: "#61dafb", textDecoration: "none" }}
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavigationBar;
