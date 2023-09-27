import { createContext, useEffect, useState } from "react";
import { calculatePriceProduct } from "../utils/calculatePriceProduct";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productToAdd) => {
    let productInCart = cartItems.find(product => product.SKU === productToAdd.SKU);

    if (productInCart) {
      setCartItems(prevState => prevState.map(product => product.SKU === productToAdd.SKU ? { ...product, Quantity: product.Quantity + 1 } : { ...product }));
    } else {
      setCartItems(prevState => [...prevState, { ...productToAdd, Quantity: 1 }]);
    }

    console.log(cartItems);
  };

  const removeFromCart = (SKU) => {
    setCartItems(prevState => {
      const updatedCart = prevState.map((product) => product.SKU === SKU 
        ? { ...product, Quantity: product.Quantity > 0 ? product.Quantity - 1 : 0 } 
        : { ...product }
      )
      return updatedCart.filter(product => product.Quantity > 0)
    });
  };

  const quantityProduct = (SKU) => {
    let indexProductInCart = cartItems.findIndex((product) => product.SKU === SKU);
    if (indexProductInCart !== -1) {
      return cartItems[indexProductInCart].Quantity
    } else {
      return 0
    }
  }

  const updateCartItemCount = (newQuantity, SKU) => {
    setCartItems(prevState => prevState.map(product => product.SKU === SKU ? { ...product, Quantity: newQuantity } : { ...product }));
  };

  const getTotalCartAmount = () => {
    const totalAmount = cartItems.reduce((partialSum, product) => partialSum + calculatePriceProduct(product), 0);
    return totalAmount;
  };

  const checkout = () => {
    setCartItems([]);
  };

  const contextValue = {
    cartItems,
    addToCart,
    quantityProduct,
    getTotalCartAmount,
    updateCartItemCount,
    removeFromCart,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
