import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-amber-900 h-15 flex justify-end items-center">
      <nav className="flex  gap-16 pr-20 text-2xl ">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
      </nav>
    </div>
  );
};

export default Navbar;
