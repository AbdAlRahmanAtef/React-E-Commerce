import React from "react";
import { useContext } from "react";
import { CartContext } from "./../context/CartContext";

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
                <p>{item.title}</p>
                <div className="count">
                  <button
                    className="increase"
                    onClick={() => addToCart(item, 1)}
                  >
                    +
                  </button>
                  <span className="amount">{item.qty}</span>
                  <button
                    className="decrease"
                    onClick={() => addToCart(item, -1)}
                  >
                    -
                  </button>
                </div>
                <button className="remove" onClick={() => removeFromCart(item)}>
                  Remove
                </button>
                <span className="price">Price: ${item.price}</span>
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
