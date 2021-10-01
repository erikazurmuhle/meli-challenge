import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import SearcherContainer from "./Seacher/SearcherContainer";
import BreadCrumb from "./Breadcrumb/BreadCrumb";
import ProductsSearch from "./ProductsSearch/ProductsSearch";
import SingleProductContainer from "./SingleProduct/SingleProductContainer";

function App() {
  return (
    <div className="App">
      <SearcherContainer />
      <div className="App_render">
        <BreadCrumb />
        <React.Fragment>
          <Switch>
            <Route path="/item/:id" exact component={SingleProductContainer} />
            <Route path="/items" exact component={ProductsSearch} />
          </Switch>
        </React.Fragment>
      </div>
    </div>
  );
}
export default App;
