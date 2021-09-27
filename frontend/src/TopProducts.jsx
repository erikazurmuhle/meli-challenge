import React from "react";
//import CardItem from "./CardItem";
import SingleProduct from "./SingleProduct";

export default function TopProducts({ result }) {
  console.log("SEARCHRESULT", result);
  const arrayProduct = result.products;
  return (
    // <div className="App_renderSearch">
    //   {arrayProduct && arrayProduct.length ? (
    //     arrayProduct.map((product, index) => (
    //       <CardItem key={index} product={product} />
    //     ))
    //   ) : (
    <SingleProduct />
    //   )}
    // </div>
  );
}
