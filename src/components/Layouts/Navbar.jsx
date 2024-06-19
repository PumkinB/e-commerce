import { useContext, useEffect, useState } from "react";
import Button from "../Elements/Button/Button";
import { useLogin } from "../../hooks/useLogin";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPrice";

const Navbar = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "PRODUCT", link: "/products" },
  ];

  const [open, setOpen] = useState(false);
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className={`md:flex items-center justify-between py-4 px-7 text-slate-700 ${isDarkMode ? "bg-slate-900" : "bg-white"}`}>
        <div className={`flex items-center font-bold text-2xl cursor-pointer ${isDarkMode ? "text-white" : "text-slate-700"}`}>
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Designer
        </div>

        {/* hamburger */}
        <div onClick={() => setOpen(!open)} className={`text-3xl absolute right-8 top-6 cursor-pointer md:hidden ${isDarkMode ? "text-white" : "text-slate-700"}`}>
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center mr-3 md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1]  left-0  w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 md:duration-0 ease-in ${
            open ? "top-16" : "top-[-470px]"
          } ${isDarkMode ? "bg-slate-900" : "bg-white"}`}
        >
          {Links.map((Link) => (
            <li key={Link.name} className={`md:mx-4 md:my-0 my-7 ${isDarkMode ? "text-white" : "text-slate-700"}`}>
              <a href={Link.link} className=" font-semibold hover:text-slate-500">
                {Link.name}
              </a>
            </li>
          ))}
          <div className={`mx-0 my-3 underline font-bold text-lg md:mx-3 md:my-0 ${isDarkMode ? "text-white" : "text-slate-700"}`}>{username}</div>
          <Button classname={`${isDarkMode ? "bg-black" : "bg-indigo-600"} duration-0`} onClick={handleLogout}>
            Log Out
          </Button>
          <div className={`flex items-center p-2 rounded-md md:mx-5 my-2 text-lg py-2 px-3 text-white max-w-fit ${isDarkMode ? "bg-black" : "bg-indigo-600"}`}>
            Item: {totalCart} | Price: ${total}
          </div>
          <Button classname={`${isDarkMode ? "bg-black" : "bg-indigo-600"} duration-0`} onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? "Light" : "Dark"}
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
