import React from "react";

export default function searcher() {
  return (
    <header className="App-header">
      <div className="App-header_container">
        <img src="Logo_ML@2x.png.png.png" alt="logo"></img>
        <form className="App-header_form">
          <input
            className="App-header-input"
            type="text"
            placeholder="Nunca dejes de buscar"
          />
          <button>
            <img src="ic_Search@2x.png.png.png" alt="buscar" />
          </button>
        </form>
      </div>
    </header>
  );
}
