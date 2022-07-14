import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import Modal from "react-modal";
import style from "./style.module.scss";

const Header = () => {


  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div className={style.header}>
        <h1>JAC Mystery Educator</h1>
        <ul className={style.navList}>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'Nasa-Observatory'}>Nasa Observatory</NavLink>
          <NavLink to={'Art Museum'}>Art Museum</NavLink>
          <NavLink to={'/User-Gallery'}>Gallery</NavLink>
          <NavLink to={'About-us'}>About us</NavLink>
          <button onClick={toggleModal}>Contact Us</button>
          <a href="sketchbox.html" target='_blank'>Create Your Own Art!</a>
        </ul>
      </div>

      <div className="contact">
        <Modal className={style.modal} overlayClassName={style.overlay} isOpen={isOpen} onRequestClose={toggleModal} contentLabel='Contact info'>
          <p>
            To get in touch with us, give us a call at 555-555-5555.
          </p>
          <p>
            To learn more about JAC Enterprises,
            <br />
            <a href="https://github.com/cljenkinsjr/jackr-enterprises-site" target="_blank">click here</a>
            .
          </p>
          <div className={style.close}>
            <button onClick={toggleModal}>&times;</button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Header;