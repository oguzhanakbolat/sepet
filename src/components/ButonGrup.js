import React from "react";
import { Link } from "react-router-dom";

const ButonGrup = props => (
  <div className="butonGrup">
    <Link to={"/detail?" + props.id}>
      <button>Detay</button>
    </Link>
    
    <button onClick={props.sepetClick}>Sepete Ekle</button>
  </div>
)

export default ButonGrup;
