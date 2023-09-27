import React, { useEffect, useState } from "react";
import { Product } from "./components/product";
import "./shop.css";
import axios from "axios";

const apiUrl = 'http://localhost:8000'

export const Shop = () => {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await axios.get(`${apiUrl}/products`) 
      .then(response => {
        console.log(response);
        setProducts(response.data.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>ShopCart App</h1>
      </div>

      <div className="products">
        {products.map((product, idx) => (
          <Product data={product} key={idx} />
        ))}
      </div>
    </div>
  );
};
