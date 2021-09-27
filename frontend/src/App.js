import React from "react";

import { Route, Switch } from "react-router-dom";
import "./App.css";
import SearcherContainer from "./Seacher/SearcherContainer";
import BreadCrum from "./BreadCrum";
import ProductSearch from "./ProductSearch";
import SingleProduct from "./SingleProduct";
import { useSelector } from "react-redux";

function App() {
  const products = useSelector((state) => state.productsSearch);
  return (
    <div className="App">
      <SearcherContainer />
      <div className="App_render">
        <BreadCrum />
        <Switch>
          <Route exact path="/items?search=">
            <ProductSearch products={products} />
          </Route>
          <Route path="/item/:id" component={SingleProduct} />
        </Switch>
      </div>
    </div>
  );
}
export default App;
