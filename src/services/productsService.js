import axios, { URL } from "../constants/axios";

export const getAllProduct = async () => {
  try {
    const res = await axios.get(URL.products);

    if(res.statusText === 'OK') {
      return res.data;
    }
    else {
      return {
        error: 'Data gelmedi'
      }
    }
  } catch (error) {
    console.log(error);
  }
}


export const getProduct = async id => {

}