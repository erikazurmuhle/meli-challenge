import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./breadcrumb.scss";
export default function BreadCrum() {
  const category = useSelector((state) => state.SearchProducts.categories);
  const singleCategory = useSelector(
    (state) => state.SingleProduct.item.category
  );
  console.log(category, singleCategory);
  return (
    <div className="breadcrum">
      {/* {category.length ? (
        category.map((cat) => (
          <Link key={cat} to="/items?category=">
            {cat} &gt;{" "}
          </Link>
        ))
      ) : singleCategory[0] ? (
        <Link key={singleCategory} to="/items?category=">
          {singleCategory} &gt;{" "}
        </Link>
      ) : null} */}
    </div>
  );
}
