import React from "react";
import Baslik from "./Baslik";
import ButonGrup from "./ButonGrup";
import { useNavigate } from 'react-router-dom';
import Layout from "./Layout";

const Urun = ({ item, onClick }) => {

  return (
    <div className="urunler">
      <div className='imageContainer'>
        <img src={item.thumbnail} />
      </div>
      <Baslik title={item.title} />
      <span>${item.price}</span>
      <ButonGrup id={item.id} sepetClick={onClick} />
    </div>
  )
}

export default Urun;