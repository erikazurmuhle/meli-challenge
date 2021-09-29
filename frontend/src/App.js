import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SearcherContainer from "./Seacher/SearcherContainer";
import BreadCrum from "./BreadCrum";
import ProductSearch from "./ProductSearch";
import SingleProductContainer from "./SingleProduct/SingleProductContainer";

function App() {
  return (
    <div className="App">
      <SearcherContainer />
      <div className="App_render">
        <BreadCrum />
        <React.Fragment>
          <Switch>
            <Route path="/item/:id" exact component={SingleProductContainer} />
            <Route path="/items" exact component={ProductSearch} />
          </Switch>
        </React.Fragment>
      </div>
    </div>
  );
}
export default App;
