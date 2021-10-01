import React from "react";
import { Link } from "react-router-dom";
import SingleProduct from "../SingleProduct/SingleProduct";

import "./breadcrumb.scss";
export default function BreadCrum({ category, categories }) {
  console.log("CAT", categories);
  return (
    <div className="breadcrum">
      <p>
        {categories ? (
          categories.map((cat) => <span>{cat} &gt; </span>)
        ) : category ? (
          <span key={category} to="/items?category=">
            {category} hola &gt;{" "}
          </span>
        ) : null}
      </p>
    </div>
  );
}
