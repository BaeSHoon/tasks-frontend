import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const NavigationBar = () => {
  const { isLoggedIn, user } = useAuth();

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
              <Link
                to="/logout"
                style={{ color: "#61dafb", textDecoration: "none" }}
              >
                logout
              </Link>
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
