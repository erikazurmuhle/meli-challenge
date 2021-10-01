import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./singleProduct.scss";

export default function SingleProduct() {
  const product = useSelector((state) => state.SingleProduct.item);

  return (
    <React.Fragment>
      {product && (
        <div className="topProducts">
          <div className="topProducts_img">
            <img
              src={product.picture}
              alt="cabina fotos"
              title="cabina fotos"
            />
          </div>
          <div className="topProducts_info">
            <p>
              {product.condition === "new" ? (
                <span>Nuevo </span>
              ) : (
                <span>Usado </span>
              )}
              - {product.sold_quantity} vendidos
            </p>
            <h2>{product.title}</h2>
            <h1>${product.price.amount}</h1>
            <button>Comprar</button>
          </div>
          <div className="topProducts_description">
            <h2>Descripcion del producto</h2>
            {product.description.length ? (
              <p>{product.description}</p>
            ) : (
              <p>Producto sin descripción</p>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
