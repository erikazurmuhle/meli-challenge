import React from "react";
import { Link } from "react-router-dom";
//import "./App.css";
import "./breadcrumb.css";
export default function BreadCrum() {
  return (
    <div className="breadcrum">
      <Link to="">
        Electrónica, Audio y Video &gt; iPod &gt; Reproductores &gt;{" "}
      </Link>
    </div>
  );
}
