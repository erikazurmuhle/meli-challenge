import React from "react";
import { useState } from "react";
import Searcher from "./Searcher";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchProd } from "../store/searchProducts";

function SearcherContainer() {
  const [productName, setProductName] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProductName(e.target.value);
    console.log("buscamos ", productName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchProd(productName));
    console.log("se mandoooooo", productName);
    history.push("/items?search=");
  };

  return (
    <div>
      <Searcher handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default SearcherContainer;
