import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  // if no dependency array => useEffect will be called on every render.
  // if dependency array is empty = [] => useEffect is called on initial render (just once).
  // if dependency array is [btnName] => useEffect is called only when dependency changes.

  useEffect(() => {
    console.log("useEffect is called!");
  }, [btnName]);

  console.log("Header rendered!!");

  const isOnline = useOnlineStatus();

  return (
    <div className="flex justify-between m-2 bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {isOnline ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about">
              About
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="px-4"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
