import React, { useState } from "react";

import Axios from "axios"
import NasaImages from "./NasaImages.js"
import style from "./style.module.scss"

const Nasa = () => {

  const [nasaInfo, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const fetchData = async () => {
      const nasa = await Axios(`https://images-api.nasa.gov/search?q=${searchTerm}`);
      setInfo(nasa.data.collection.items);
    };

    fetchData();

  }

  const searchTextChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <h2 className={style.nasaFont}>Nasa Images</h2>
      <div className={style.boxAlign}>
        <form onSubmit={submitHandler}>
          <input type="text" onChange={searchTextChangeHandler} placeholder="Search Nasa Database..." />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className={style.imageCentering}>
        <section className={style.grid}>
          <NasaImages images={nasaInfo} />
        </section>
      </div>
    </div>
  );
}

export default Nasa;