import React, { useContext, useState } from "react";
import Logo from "../Images/logo.webp";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CartContext } from "./../context/CartContext";
function Navbar() {
  const { cart } = useContext(CartContext);
  const [bg, setbg] = useState(false);

  window.onscroll = () => {
    if (window.scrollY >= 100) {
      setbg(true);
    } else {
      setbg(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className={`container ${bg && "bg-colored"}`}>
          <Link className="logo" to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <ul className="links">
            <li>
              <Link
                data-count={cart.itemsCount}
                className="link btn cart"
                to="/cart"
              >
                <HiOutlineShoppingCart size={35} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
