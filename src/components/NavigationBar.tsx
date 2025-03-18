import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav style={{ backgroundColor: "#282c34", padding: "1rem" }}>
      <ul style={{ listStyleType: "none", display: "flex", gap: "1rem" }}>
        <li>
          <Link to="/" style={{ color: "#61dafb", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            style={{ color: "#61dafb", textDecoration: "none" }}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            style={{ color: "#61dafb", textDecoration: "none" }}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
