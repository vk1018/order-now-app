import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import StoreContext from "../Context/Store";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { food_list } = useContext(StoreContext);
  const location = useLocation();

  const totalCartCount = food_list.reduce(
    (acc, item) => acc + item.cartCount,
    0
  );
  localStorage.setItem("cartCount", totalCartCount);

  return (
    <div className="navbar">
      <h1 className="heading">Order Now</h1>
      <ul className="menu">
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
        >
          <li>Home</li>
        </Link>

        <a
          href="#explore-menu"
          className={`nav-link ${
            location.pathname === "/#explore-menu" ? "active" : ""
          }`}
        >
          Menu
        </a>

        <a
          href="#download"
          className={`nav-link ${
            location.pathname === "/#download" ? "active" : ""
          }`}
        >
          Downloads
        </a>
        <a
          href="#footer"
          className={`nav-link ${
            location.pathname === "/#footer" ? "active" : ""
          }`}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="searchicon" className="icon" />
        <Link to="/cart">
          {totalCartCount === 0 ? (
            <img src={assets.basket_icon} alt="basket" className="icon" />
          ) : (
            <div className="basket-con">
              <img src={assets.basket_icon} alt="basket" className="icon" />
              <div className="dot">{totalCartCount}</div>
            </div>
          )}
        </Link>

        <button>Signin</button>
      </div>
    </div>
  );
};
export default Navbar;
