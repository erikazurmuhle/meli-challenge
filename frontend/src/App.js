import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import SearcherContainer from "./Seacher/SearcherContainer";
import BreadCrumb from "./Breadcrumb/BreadCrumb";
import ProductsSearch from "./ProductsSearch/ProductsSearch";
import SingleProductContainer from "./SingleProduct/SingleProductContainer";

function App() {
  const [categories, setCategories] = useState([]);
  const [category, setcategory] = useState([]);
  const products = useSelector((state) => state.SearchProducts);
  const product = useSelector((state) => state.SingleProduct);

  useEffect(() => {
    if (product.title) {
      setcategory(product.item.category);
    }
    if (product.items) {
    }
    setCategories(products.categories);
  }, [product, products]);

  return (
    <div className="App">
      <SearcherContainer product={product} />
      <div className="App_render">
        <BreadCrumb category={category} categories={categories} />
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
