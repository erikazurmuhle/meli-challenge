import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SearcherContainer from "./Seacher/SearcherContainer";
import BreadCrum from "./BreadCrum";
import ProductSearch from "./ProductSearch";
import SingleProduct from "./SingleProduct";

function App() {
  return (
    <div className="App">
      <SearcherContainer />
      <div className="App_render">
        <BreadCrum />
        <div>
          <Switch>
            <Route path="/item/:id" exact component={SingleProduct} />
            <Route path="/items" exact component={ProductSearch} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
export default App;
