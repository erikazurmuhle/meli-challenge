import React from "react";
import { useState } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SearcherContainer from "./Seacher/SearcherContainer";
import BreadCrum from "./BreadCrum";
import TopProducts from "./TopProducts";
import ProductSearch from "./ProductSearch";
import SingleProduct from "./SingleProduct";

function App() {
  const [result, setResult] = useState([]);
  const searchProd = (productName) => {
    const productsearch = axios.get(
      `http://localhost:3005/api/search/${productName}`
    );
    productsearch.then((response) => {
      console.log("PARASETEAR PROD", response.data);
      const prod = response.data;
      setResult(prod);
    });
  };
  return (
    <div className="App">
      <SearcherContainer searchProd={searchProd} />
      <div className="App_render">
        <BreadCrum />
        <Switch>
          <Route exact path="/">
            <TopProducts result={result} />
          </Route>
          <Route path="/:item" component={SingleProduct} />
        </Switch>
      </div>
    </div>
  );
}
export default App;
