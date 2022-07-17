import React, { useEffect, useState } from "react";

import NasaImages from "./NasaImages.js"
import axios from "axios";
import style from "./style.module.scss"

// import Axios from "axios"




const Nasa = () => {
  function nasaApiSearch(){
    var nasaUrl = 'https://images-api.nasa.gov/search?q=' + document.getElementById('nasaSearch').value;
    console.log(nasaUrl)
    return nasaUrl
  }
  
  const [nasaImages, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=> {
    const fetchData = async () => {
      
      const nasa = await axios.get(nasaApiSearch());
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
      <input type="text" id="nasaSearch" placeholder="Search Nasa Database..."/>
        <button value="Submit" onClick={nasaApiSearch}>Browse the Stars</button>
      <section>
        {loading ? <h3>Loading ...</h3> : <NasaImages images={nasaImages}/>}
      </section>
    </div>
  );
}

export default Nasa;