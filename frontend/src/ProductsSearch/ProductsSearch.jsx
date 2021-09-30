import React from "react";
import CardItem from "../CardItem/CardItem";
import { useSelector } from "react-redux";
import "./productsSearch.css";

export default function ProductsSearch() {
  const products = useSelector((state) => state.SearchProducts.items);

  return (
    <div className="containerCards">
      {products.length
        ? products.map((producto, item) => (
            <CardItem key={item} producto={producto} />
          ))
        : null}
    </div>
  );
}
