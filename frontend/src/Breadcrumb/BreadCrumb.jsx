import React from "react";
import { Link } from "react-router-dom";
import SingleProduct from "../SingleProduct/SingleProduct";

import "./breadcrumb.scss";
export default function BreadCrum({ category, categories }) {
  console.log("RENDER BREAD", categories, category);

  return (
    <div className="breadcrum">
      {categories ? (
        categories.map((cat) => (
          <Link key={cat} to="/items?category=">
            {cat} &gt;{" "}
          </Link>
        ))
      ) : category ? (
        <Link key={category} to="/items?category=">
          {category} &gt;{" "}
        </Link>
      ) : null}
    </div>
  );
}
