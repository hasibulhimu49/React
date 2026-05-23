import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        height: "50px",
        backgroundColor: "pink",
      }}
    >
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Navbar;
