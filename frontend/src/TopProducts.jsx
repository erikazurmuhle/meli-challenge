import React from "react";

export default function TopProducts() {
  return (
    <div className="topProducts">
      <div className="topProducts_img">
        <img
          src="https://http2.mlstatic.com/D_NQ_NP_634738-MLA40164896984_122019-O.webp"
          alt="cabina fotos"
          title="cabina fotos"
        />
      </div>
      <div className="topProducts_info">
        <p>Nuevo-215 vendidos</p>
        <h2>Cabina de fotos</h2>
        <h1>$1500</h1>
        <button>Comprar</button>
      </div>
      <div className="topProducts_description">
        <h2>Descripcion del producto</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
          ab cumque vero illo quis accusamus dolorum, laborum iste nihil, sequi
          architecto. Fugiat optio consequatur quidem quos sed laboriosam quo?
        </p>
      </div>
    </div>
  );
}
