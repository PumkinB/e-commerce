import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/input";
import { login } from "../../services/auth.service";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // window.location.href = "/products";

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    // onSubmit={handleLogin}
    <form>
      <InputForm label="Username" type="text" placeholder="Jhon Doe" name="username" ref={usernameRef} />
      <InputForm label="Password" type="password" placeholder="*****" name="password" />
      {/* type="submit" */}
      {/* <Button classname="bg-indigo-600 w-full" type="submit">
        Login
      </Button> */}
      <Link to={"/products"} className="bg-indigo-600 w-full text-white font-bold py-2 px-6 rounded active:translate-y-1">
        Login
      </Link>
      {/* {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>} */}
    </form>
  );
};

export default FormLogin;
