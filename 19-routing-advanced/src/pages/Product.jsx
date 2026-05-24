import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Navbar */}
      <div className="flex justify-center items-center h-12 bg-amber-950 gap-6 text-xl">
        <Link to="/product/mens">Mens</Link>
        <Link to="/product/womens">Womens</Link>
        <Link to="/product/kids">Kids</Link>
      </div>

        {/* <div className=" bg-gray-900  text-white ">
           <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-bold">Product Page</h1>
        </div> */}

      {/* Nested Pages */}
      <Outlet />

    </div>
  );
};

export default Product;