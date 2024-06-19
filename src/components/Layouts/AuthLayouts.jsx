import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;

  return (
    <>
      <div className="absolute top-6 right-0 left-0 flex justify-center">
        <span className="mx-2">Klik ➡️</span>
        <a href="https://fakestoreapi.com/users" target="_blank" className="text-red-500 hover:text-blue-500 underline">
          https://fakestoreapi.com/users
        </a>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-xs box-border p-8 rounded-lg shadow-lg">
          <h1 className=" text-3xl font-bold mb-2 text-blue-600">{title}</h1>
          <p className="font-medium text-slate-700">Welcome, Please enter your details</p>
          {children}
          {Navigation({ type })}
        </div>
      </div>
    </>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm m-5 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Sign Up
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm m-5 text-center">
        Have an account?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
