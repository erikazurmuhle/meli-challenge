import React from "react";
import CardItem from "./CardItem";
import { useSelector } from "react-redux";

export default function ProductSearch() {
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
