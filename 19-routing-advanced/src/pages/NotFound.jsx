import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen bg-gray-900 flex flex-col justify-center items-center text-white">
      <h1 className="text-9xl font-extrabold text-red-500 drop-shadow-lg">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-3 text-gray-400 text-center max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

        <Link className="mt-8 px-6 py-3 bg-red-500 rounded-lg font-semibold hover:scale-105 transition-transform" to="/">Go Back Home</Link>

    </div>
  );
};

export default NotFound; 