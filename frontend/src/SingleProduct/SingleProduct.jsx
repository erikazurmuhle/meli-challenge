import React from "react";
import { useSelector } from "react-redux";
import "./singleProduct.scss";

export default function SingleProduct() {
  const singleProduct = useSelector((state) => state.SingleProduct.item);
  console.log("PPPPPPPPPP", singleProduct);
  return (
    <React.Fragment>
      {singleProduct ? (
        <div className="topProducts">
          <div className="topProducts_img">
            <img
              src={singleProduct.picture}
              alt="cabina fotos"
              title="cabina fotos"
            />
          </div>
          <div className="topProducts_info">
            <p>
              {singleProduct.condition === "new" ? (
                <span>Nuevo </span>
              ) : (
                <span>Usado </span>
              )}
              - {singleProduct.sold_quantity} vendidos
            </p>
            <h2>{singleProduct.title}</h2>
            <h1>${singleProduct.price.amount}</h1>
            <button>Comprar</button>
          </div>
          <div className="topProducts_description">
            <h2>Descripcion del producto</h2>
            {singleProduct.description.length ? (
              <p>{singleProduct.description}</p>
            ) : (
              <p>Producto sin descripción</p>
            )}
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
}
