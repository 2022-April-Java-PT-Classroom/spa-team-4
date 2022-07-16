import React, { useEffect, useState } from "react";

import Axios from "axios"
import NasaImages from "./NasaImages.js"
import style from "./style.module.scss"

const Nasa = () => {
  const [nasaImages, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(()=> {
    const fetchData = async () => {
        const nasa = await Axios("https://images-api.nasa.gov/search?q={q}");
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
      <input type="text" placeholder="Search Nasa Database..." onChange={(event) => {setSearchTerm(event.target.value);
      }}/>
        <button type="submit">Submit</button>
      <section>
        {loading ? <h3>Loading ...</h3> : <NasaImages images={nasaImages}/>}
      </section>
    </div>
  );
}

export default Nasa;