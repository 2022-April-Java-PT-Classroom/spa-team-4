import React, { useEffect, useState } from "react";

import Axios from "axios"
import NasaImages from "./NasaImages.js"
import style from "./style.module.scss"

const Nasa = () => {
  var nasaUrl = 'https://images-api.nasa.gov/search?q=';
  
  const [nasaImages, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [searchTerm, setSearchTerm] = useState('');

  function searchNasa(){
   var userSearch = nasaUrl + document.getElementById("apiEndPoint").value;
  //  console.log(userSearch)
  }
  
  useEffect(()=> {
    const fetchData = async () => {
      const nasa = await Axios(nasaUrl);
      setImages(nasa.data.collection.items);
    };
    
    
    if (nasaImages) {
      setLoading(false);
    }

    const timer = setTimeout(() => {
      !nasaImages && fetchData();
    }, 1000);
    return () => clearTimeout(timer);
  }, [nasaImages]);

  return (
    <div>
      <h2 className={style.nasaFont}>Nasa Images</h2>
      <input type="text" id="apiEndPoint" placeholder="Search Nasa Database..."/>
        <button type="submit" onClick={searchNasa}>Submit</button>
      <section>
        {loading ? <h3>Loading ...</h3> : <NasaImages images={nasaImages}/>}
      </section>
    </div>
  );
}

export default Nasa;