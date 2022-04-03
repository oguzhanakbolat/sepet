import React, { useEffect, useState } from 'react';
import '../App.css';
import { useSepet } from '../contexts/sepet';
import { getAllProduct } from '../services/productsService';


function Home() {
  const [urunler, setUrunler] = useState([]);
  const { sepeteEkle } = useSepet();

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    const data = await getAllProduct();
    setUrunler(data.products);
  }
  


  return (
    <div className='urunlerContainer'>
      {
        urunler.map((item, index) => 
          <div key={index} className="urunler">
            <div className='imageContainer'>
              <img src={item.thumbnail} />
            </div>
            <h2>{item.title}</h2>
            <span>${item.price}</span>
            <button onClick={() => sepeteEkle(item)}>Sepete Ekle</button>
          </div>
        )
      }
    </div>
  );
}

export default Home;
