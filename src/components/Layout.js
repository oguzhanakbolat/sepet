import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSepet } from "../contexts/sepet";
import { SepetIcon } from "../constants/icon";

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
        <Link to="/basket">
          <strong> 
            <SepetIcon color="#fff" size={24}/>
            <b>{urunSayisi}</b>
          </strong>
        </Link> 
      </div>
      {children}
      <div>Footer</div>
    </>
  );
}

export default Layout;
