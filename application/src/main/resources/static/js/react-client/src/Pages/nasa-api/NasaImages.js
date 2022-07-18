import React from "react";

const NasaImages = ({ images}) => {
 
  return images && images.map((image, index) => {

    
    return (
      <div key={index}>
        <img src={image.links && image.links[0].href} alt="" />
        <p></p>
      </div>
    );
  });
};

export default NasaImages;