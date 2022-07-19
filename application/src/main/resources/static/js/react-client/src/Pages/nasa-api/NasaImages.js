import React from "react";
import style from "./style.module.scss"

const NasaImages = ({ images}) => {
 
  return images && images.map((image, index) => {

    
    return (
      <div className={style.images} key={index}>
        <img src={image.links && image.links[0].href} alt="" />
      </div>
    );
  });
};

export default NasaImages;