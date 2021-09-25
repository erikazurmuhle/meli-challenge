import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Searcher from "./Searcher";
import BreadCrum from "./BreadCrum";
import TopProducts from "./TopProducts";
import ProductSearch from "./ProductSearch";
import SingleProduct from "./SingleProduct";

function App() {
  return (
    <div className="App">
      <Searcher />
      <div className="App_render">
        <BreadCrum />
        <Switch>
          <Route exact path="/" component={TopProducts} />
          <Route path="/search" component={ProductSearch} />
          <Route path="/:item" component={SingleProduct} />
        </Switch>
      </div>
    </div>
  );
}
export default App;
