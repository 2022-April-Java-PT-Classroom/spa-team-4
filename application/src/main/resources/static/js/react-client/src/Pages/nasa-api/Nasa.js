import React, { useEffect, useState } from "react";

import Axios from "axios"
import style from "./style.module.scss"

const App = () => {
  const [nasaImages, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=> {
    const fetchData = async () => {
        const nasa = await Axios("https://images-api.nasa.gov/search?q={q}");

    }
  });
} 