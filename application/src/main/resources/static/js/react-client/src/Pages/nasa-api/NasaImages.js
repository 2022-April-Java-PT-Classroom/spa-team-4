import React from "react";

const NasaImages = ({ images }) => {
  // console.log(images);
  return images.map((image, index) => {

    // console.log(image.links && image.links[0].href);
    return (
      <div key={index}>
        {/* <p>Test</p> */}
        <img src={image.links && image.links[0].href} alt="" />
        <p></p>
      </div>
    );
  });
};

export default NasaImages;