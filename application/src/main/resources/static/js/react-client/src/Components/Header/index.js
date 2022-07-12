import { NavLink } from "react-router-dom";
import React from "react";
import style from "./style.module.scss";

const Header = () => {
    
    return(
        <div className={style.header}>
            <h1>JAC Mystery Educator</h1>
            <ul className={style.navList}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'Contact'}>Contact</NavLink>
            <NavLink to={'Nasa-Observatory'}>Nasa Observatory</NavLink>
            <NavLink to={'Art Museum'}>Art Museum</NavLink>
            <NavLink to={'/User-Gallery'}>Gallery</NavLink>
            <NavLink to={'About-us'}>About us</NavLink>
            </ul>
        </div>
        );
}

export default Header;