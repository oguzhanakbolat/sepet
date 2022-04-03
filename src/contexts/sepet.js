import React, { useContext, useState } from "react";

const SepetContext = React.createContext();

const SepetProvider = ({children}) => {
  const [sepetListe, setSepetListe] = useState([]);

  const sepeteEkle = data => {
    const eskiListe = [...sepetListe];
    const index = eskiListe.findIndex(x => x.id === data.id)

    if(index > -1) {
      eskiListe[index].count = eskiListe[index].count + 1;
    }
    else {
      eskiListe.push({...data, count: 1});
    }
    
    setSepetListe(eskiListe);
  }

  return (
    <SepetContext.Provider
      value={{
        sepetListe,
        sepeteEkle
      }}
    >
      {children}
    </SepetContext.Provider>
  )
}

function useSepet() {
  return useContext(SepetContext);
}

export {SepetProvider, SepetContext, useSepet}