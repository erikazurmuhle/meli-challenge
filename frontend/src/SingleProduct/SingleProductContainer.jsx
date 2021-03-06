import React, { useEffect } from "react";
import SingleProduct from "./SingleProduct";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProd } from "../store/singleProduct";

export default function SingleProductContainer() {
  const dispatch = useDispatch();
  const params = useParams();
  const productId = params.id;
  useEffect(() => {
    dispatch(getProd(productId));
  }, []);
  return (
    <React.Fragment>
      <SingleProduct />
    </React.Fragment>
  );
}
