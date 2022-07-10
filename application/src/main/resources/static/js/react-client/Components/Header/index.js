import React from "react";
import style from "./style.module.scss"

const Header = () => {
    
    return(
        <div className={style.header}>
            <h1>JAC Mystery Educator</h1>
            <ul>
                <li>Home</li>
                <li>Contact Us</li>
                <li>Nasa Observatory</li>
                <li>Art Museum</li>
                <li>Gallery</li>
                <li>About us</li>
            </ul>
        </div>
        );
}

export default Header;