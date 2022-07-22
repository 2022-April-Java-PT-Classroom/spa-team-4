import React from "react";
import style from "./style.module.scss"

const Footer = () =>{
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

    return(
        <div className={style.footer}>
          <small>
          <button onClick={scrollToTop}>Return to Top of the Page </button>| 
            &copy; <a href="jac/index.html" target="_blank">JAC Enterprises 2022</a>
          </small>
        </div>
    );
}

export default Footer;