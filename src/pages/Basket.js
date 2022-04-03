
import { useEffect, useState } from 'react';
import '../App.css';
import { DeleteIcon } from '../constants/icon';
import { useSepet } from '../contexts/sepet';

function Basket() {
  const { sepetListe, sepettenSil } = useSepet();
  const [toplam, setToplam] = useState(0);
  const [sayi, setSayi] = useState(0);

  useEffect(() => {
    let urunSayisi = 0;
    let toplamFiyat = 0;

    sepetListe.map(item => {
      urunSayisi = urunSayisi + item.count;
      toplamFiyat = toplamFiyat + item.price * item.count;
    });

    setToplam(toplamFiyat);
    setSayi(urunSayisi);
  }, [sepetListe]);

  const urunSil = item => {
    sepettenSil(item);
  }
  
  return (
    <>
    {
      sepetListe.length > 0 ?
        <>
          <div className="urunListesiHeader">
            <span>Ürün Adı</span>
            <span>Ürün Adeti</span>
            <span>Ürün Birim Fiyatı</span>
            <strong>Ürün toplam Fiyatı</strong>
          </div>
          {
            sepetListe.map((item, index)=> 
            <div key={index} className="urunListesi">
              <span>{item.title}</span>
              <span>{item.count}</span>
              <span>{item.price}</span>
              <strong>${(item.price *  item.count).toFixed(2)}</strong>
              <button onClick={() => urunSil(item)}>
                <DeleteIcon size={24} color="#fff" />
              </button>
            </div>
            )
          }

          <div className="urunListesi">
            <span>Toplam</span>
            <span>{sayi}</span>
            <span></span>
            <strong>${toplam.toFixed(2)}</strong>
          </div>
        </>
        :
        <div className='urunYok'>Sepetinize ekli ürün bulunmamaktadır.</div>
    }

    </>
  );
}

export default Basket;
