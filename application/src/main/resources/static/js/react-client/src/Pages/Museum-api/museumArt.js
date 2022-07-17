import React from "react";

const museumArt = ({primaryImage}) => {

    return images.map((primaryImage, index) => {

        return (
            <div key={index}>
                <img src={primaryImage.links && primaryImage.links[0].href} alt="" />
                <p></p>
            </div>
        );
    }); 
};

export default museumArt;