import React from "react";
import "./searcher.scss";

export default function searcher({ handleChange, handleSubmit, productName }) {
  return (
    <header role="banner" className="App-header">
      <img
        className="App-hearder_container-logo"
        src="Logo_ML@2x.png.png.png"
        alt="logo"
      ></img>
      <form onSubmit={handleSubmit} className="App-header_form">
        <input
          onChange={handleChange}
          className="App-header-input"
          type="text"
          placeholder="Nunca dejes de buscar"
          aria-label="Ingresá lo que que buscás"
          value={productName}
        />
        <button type="submit">
          <img src="ic_Search@2x.png.png.png" alt="buscar" />
        </button>
      </form>
    </header>
  );
}
