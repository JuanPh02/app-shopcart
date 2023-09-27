import React, { useContext } from "react";
import { ShopContext } from "../../../context/shop-context";
import { NumericFormat } from "react-number-format";

export const Product = ({ data }) => {
  const { SKU, Name, Description, Weigth, ImageURL, Stock, Price } = data;
  const { addToCart, quantityProduct } = useContext(ShopContext);

  return (
    <div className="product">
      <img src={ImageURL} alt={`${Name} Image`} />
      <div className="description">
        <p>
          <b>{Name}</b>
        </p>
        <p> <NumericFormat value={Price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(data)}>
        Añadir a Carrito {quantityProduct(SKU) > 0 && <> ({quantityProduct(SKU)})</>}
      </button>
    </div>
  );
};
