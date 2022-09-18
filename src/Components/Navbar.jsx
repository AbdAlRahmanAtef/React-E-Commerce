import React, {useContext} from "react";
import Logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CartContext } from './../context/CartContext';
function Navbar() {
  const {cart} = useContext(CartContext)
  // console.log(cart);
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link className="logo" to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <ul className="links">
            <li>
              <Link to="/" className="link btn">
                Home
              </Link>
            </li>
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
