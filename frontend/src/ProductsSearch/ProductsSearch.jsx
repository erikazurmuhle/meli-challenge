import React from "react";
import CardItem from "../CardItem/CardItem";
import { useSelector } from "react-redux";
import "./productsSearch.scss";

export default function ProductsSearch() {
  const products = useSelector((state) => state.SearchProducts.items);

  return (
    <section className="containerCards">
      {products.length
        ? products.map((producto, item) => (
            <CardItem key={item} producto={producto} />
          ))
        : null}
    </section>
  );
}
