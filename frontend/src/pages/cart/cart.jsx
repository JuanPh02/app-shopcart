import React, { useContext } from "react";
import axios from 'axios';
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./components/cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { NumericFormat } from "react-number-format";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Items del Carrito</h1>
      </div>
      <div className="cart">
        {
          cartItems.map((product, index) => <CartItem data={product} key={index} />)
        }
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <h2> Subtotal: <NumericFormat value={totalAmount} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </h2>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Tu Carrito está vacío</h1>
      )}
    </div>
  );
};
