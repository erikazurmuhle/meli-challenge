import React from "react";
import "./breadcrumb.scss";

export default function BreadCrum({ category, categories }) {
  console.log("CAT", categories);
  return (
    <div className="breadcrum">
      <h6>
        {categories ? (
          categories.map((cat) => <span>{cat} &gt; </span>)
        ) : category ? (
          <span key={category} to="/items?category=">
            {category} hola &gt;{" "}
          </span>
        ) : null}
      </h6>
    </div>
  );
}
