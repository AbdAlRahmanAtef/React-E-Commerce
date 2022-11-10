import React from "react";
import { useContext } from "react";
import { CartContext } from "./../context/CartContext";
import { BiTrash } from "react-icons/bi";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";

const Cart = () => {
  const { cart, removeFromCart, addToCart } = useContext(CartContext);
  console.log(cart.items);
  return (
    <div className="carts">
      <div className="container">
        {cart.items.length === 0 ? (
          <div className="empty">Your Cart is empty.</div>
        ) : (
          <div>
            {cart.items.map((item) => (
              <div className="cart">
                <img src={item.images[1]} alt="" />
                <p title={item.title}>{item.title}</p>
                <div className="count">
                  <AiOutlinePlusSquare
                    onClick={() => addToCart(item, 1)}
                    size={30}
                  />
                  <span className="amount">{item.qty}</span>
                  <AiOutlineMinusSquare
                    onClick={() => addToCart(item, -1)}
                    size={30}
                  />
                </div>
                <BiTrash
                  className="remove"
                  onClick={() => removeFromCart(item)}
                  size={30}
                />
                <span className="total">Total: ${item.price * item.qty} </span>
              </div>
            ))}
            <div className="total-price">Total-Cost: ${cart.cartTotal}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
