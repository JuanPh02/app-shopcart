import React, { useContext } from "react";
import { NumericFormat } from 'react-number-format';
import { ShopContext } from "../../../context/shop-context";

export const CartItem = ({ data }) => {
  const { SKU, Name, Description, Weigth, Quantity, ImageURL, Stock, Price } = data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={ImageURL} />
      <div className="description">
        <p>
          <b>{Name}</b>
        </p>
        <p> Precio: <NumericFormat value={Price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
        <p> Total: <NumericFormat value={Price * Quantity} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(SKU)}> - </button>
          <input
            value={Quantity}
            onChange={(e) => updateCartItemCount(Number(e.target.value), SKU)}
          />
          <button onClick={() => addToCart(data)}> + </button>
        </div>
      </div>
    </div>
  );
};
