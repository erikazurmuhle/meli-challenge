import React, { useEffect } from "react";
import { useState } from "react";
import Searcher from "./Searcher";
import axios from "axios";

import { useHistory } from "react-router-dom";

function SearcherContainer({ searchProd }) {
  const [productName, setProductName] = useState("");

  const history = useHistory();

  // useEffect(() => {
  //   console.log("NUEVA BUSQUEDA", products);
  // }, [products]);

  const handleChange = (e) => {
    setProductName(e.target.value);
    console.log("buscamos ", productName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchProd(productName);
    console.log("se mandoooooo", productName);
  };

  return (
    <div>
      <Searcher handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default SearcherContainer;
