import React from "react";
import { Link } from "react-router-dom";
import "./cardItem.scss";

export default function CardItem({ producto }) {
  return (
    <React.Fragment>
      <Link className="cardItem" to={`/item/${producto.id}`}>
        <img
          src={producto.picture}
          alt={producto.title}
          title={producto.title}
        />
        <hgroup className="cardItem_info">
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
        </hgroup>
        <div className="cardItem_state">
          <h3>Argentina</h3>
        </div>
      </Link>
    </React.Fragment>
  );
}
