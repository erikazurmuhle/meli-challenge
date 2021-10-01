import React from "react";
import { useState } from "react";
import Searcher from "./Searcher";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchProd } from "../store/searchProducts";
import { resetState } from "../store/singleProduct";

function SearcherContainer({ product }) {
  const [productName, setProductName] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProductName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.item) {
      dispatch(resetState());
    }
    dispatch(searchProd(productName)).then((res) => {
      history.push("/items?search=");
      const input = document.querySelector("input");
      input.value = "";
      setProductName("");
    });
  };

  return (
    <React.Fragment>
      <Searcher
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        productName={productName}
      />
    </React.Fragment>
  );
}

export default SearcherContainer;
