import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSepet } from "../contexts/sepet";
import SepetIcon from "../constants/icon/sepetIcon";

function Layout ({children}) {
  const { sepetListe } = useSepet();
  const [urunSayisi, setUrunSayisi] = useState(0);

  useEffect(() => {
    let sayi = 0;

    sepetListe.map(item => {
      sayi += item.count;
    });
  
    setUrunSayisi(sayi);
  }, [sepetListe]);
  

  return (
    <>
      <div className="Layout">
        <Link to="/"><span>Ana Sayfa</span></Link> 
        <Link to="/about"><span>Hakkımızda</span></Link> 
        <Link to="/basket"><span> 
        <SepetIcon color="#ffffff" size={36} text="Bu bir icondur"/>
        {urunSayisi} Ürün vardır</span></Link> 

    
      </div>
      {children}
    </>
  );
}

export default Layout;
