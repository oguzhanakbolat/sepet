import React, { useEffect, useState } from 'react';
import '../App.css';
import Urun from '../components/Urun';
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
        urunler.map((item, index) => <Urun item={item} key={index} onClick={() => sepeteEkle(item)} />)
      }

    </div>
  );
}

export default Home;
