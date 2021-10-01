import React from "react";
import "./searcher.scss";

export default function searcher({ handleChange, handleSubmit }) {
  return (
    <header role="banner" className="App-header">
      <img
        className="App-hearder_container-logo"
        src="Logo_ML@2x.png.png.png"
        alt="logo"
      ></img>
      <form className="App-header_form">
        <input
          onChange={handleChange}
          className="App-header-input"
          type="text"
          placeholder="Nunca dejes de buscar"
        />
        <button onClick={handleSubmit}>
          <img src="ic_Search@2x.png.png.png" alt="buscar" />
        </button>
      </form>
    </header>
  );
}
