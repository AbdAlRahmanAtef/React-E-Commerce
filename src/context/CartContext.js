import { createContext, useState } from "react";

export const CartContext = createContext();
const localStorageItems = "REACT_STORED_ITEMS";
export const CartProvider = ({ children }) => {
  // const initialItems = () => {
  //   let initialItems;
  //   if (localStorage.getItem(localStorageItems)) {
  //     initialItems = JSON.parse(localStorage.getItem(localStorageItems)) || [];
  //   }
  //   return initialItems;
  // };

  const initialItems = localStorage.getItem(localStorageItems)
    ? JSON.parse(localStorage.getItem(localStorageItems))
    : [];

  const caluculateCartTotal = (items) => {
    localStorage.setItem(localStorageItems, JSON.stringify(items));
    const itemsCount = items?.reduce((acc, currenct) => acc + currenct.qty, 0);
    const cartTotal = items?.reduce(
      (acc, currenct) => acc + currenct.qty * currenct.price,
      0
    );
    return { itemsCount, cartTotal };
  };

  const [cart, setcart] = useState({
    items: initialItems || [],
    // ...caluculateCartTotal(initialItems),
    itemsCount: 0,
    cartTotal: 0,
  });

  const addToCart = (product, sign) => {
    const { items = [] } = cart;
    const productIndex = items.findIndex((item) => item.id === product.id);
    if (productIndex === -1) {
      items.push({ ...product, qty: 1 });
    } else {
      if (sign === -1 && items[productIndex].qty >= 2) {
        items[productIndex].qty--;
      } else if (sign === 1 && items[productIndex].qty <= 9) {
        items[productIndex].qty++;
      } else {
        return;
      }
    }
    const total = caluculateCartTotal(items);
    setcart({ items, ...total });
    console.log(cart);
  };

  const removeFromCart = (product) => {
    const { items = [] } = cart;
    const productIndex = items.findIndex((item) => item.id === product.id);
    if (productIndex !== -1) {
      items.splice(productIndex, 1);
    }
    const total = caluculateCartTotal(items);
    setcart({ items, ...total });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
