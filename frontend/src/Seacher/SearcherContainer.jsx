import React from "react";
import { useState } from "react";
import Searcher from "./Searcher";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchProd, resetState } from "../store/searchProducts";

function SearcherContainer({ products }) {
  const [productName, setProductName] = useState("");

  console.log("PRODSSSSSSS STATE", products);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    // if (products) {
    //   dispatch(resetState());
    // }
    setProductName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
