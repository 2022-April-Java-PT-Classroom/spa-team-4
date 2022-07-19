import React from "react";
import style from "./style.module.scss"

const Footer = () =>{
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

    return(
        <div className={style.footer}>
          <small>
          <span id="top" onClick={scrollToTop}>Return to Top of the Page </span>| 
            &copy; JAC Enterprises 2022
          </small>
        </div>
    );
}

export default Footer;