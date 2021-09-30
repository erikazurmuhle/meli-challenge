import React from "react";
import { Link } from "react-router-dom";
import "./cardItem.css";

export default function CardItem({ producto }) {
  return (
    <React.Fragment>
      <Link className="cardItem" to={`/item/${producto.id}`}>
        <img
          src={producto.picture}
          alt={producto.title}
          title={producto.title}
        />
        <div className="cardItem_info">
          <h1>
            ${producto.price.amount}
            {producto.free_shipping ? (
              <span className="cardItem_info--freeship">
                <img
                  src="ic_shipping.png"
                  alt="logo envio gratis"
                  title="envío gratis"
                />
              </span>
            ) : null}
          </h1>
          <h2>{producto.title}</h2>
        </div>
        <div className="cardItem_state">
          <h4>Argentina</h4>
        </div>
      </Link>
    </React.Fragment>
  );
}
