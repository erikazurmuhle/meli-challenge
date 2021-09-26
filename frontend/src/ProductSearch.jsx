import React from "react";
import CardItem from "./CardItem";

export default function ProductSearch(products) {
  console.log("PRODUCTARD", products);
  return (
    <div>
      {products.length
        ? products.map((producto, item) => (
            <CardItem key={item} producto={producto} />
          ))
        : null}
    </div>
  );
}
