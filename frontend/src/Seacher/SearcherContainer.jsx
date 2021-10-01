import React from "react";
import { useState } from "react";
import Searcher from "./Searcher";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchProd } from "../store/searchProducts";

function SearcherContainer() {
  const [productName, setProductName] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProductName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchProd(productName)).then((res) => {
      history.push("/items?search=");
      const input = document.querySelector("input");
      input.value = "";
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
