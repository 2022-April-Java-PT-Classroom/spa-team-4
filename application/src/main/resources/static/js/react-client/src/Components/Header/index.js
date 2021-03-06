import React, { useState } from 'react';

import Modal from "react-modal";
import { NavLink } from "react-router-dom";
import style from "./style.module.scss";

const Header = () => {


  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={style.stick}>
      <div className={style.header}>
        <h1>
          <span className={style.bigger}>JAC</span>
          <span className={style.bigger}> M</span>ystery
          <span className={style.bigger}> E</span>ducator
        </h1>
        <ul className={style.navList}>
      
          <li>
            <NavLink to={'/'}><button>
            <img src="images/home.png" />
              Home
              </button></NavLink>
          </li>
          <li>
            <NavLink to={'Nasa-api'}><button>
              <img src="images/nasa.png" />
              Nasa Observatory
            </button></NavLink>

          </li>
          <li>
            <NavLink to={'/Museum-api'}><button>
              <img src="images/art.png" />
              Art Museum
              </button></NavLink>
          </li>
          <li>
            <NavLink to={'User-Gallery'}><button>
            <img src="images/userart.png" />
              User Art Gallery
              </button></NavLink>
          </li>
          <li>
            <NavLink to={'About-us'}><button>
            <img src="images/aboutus.png" />
              About Us
              </button></NavLink>
          </li>
          <li>
            <button onClick={toggleModal}>
              <img src="images/contact.png" />
              Contact Us
            </button>
          </li>
          <li>
            <a href="sketchbox.html" target='_blank'><button>
            <img src="images/createart.png" />
              Create Your Own Art!
              </button></a>
          </li>
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
            <a href="jac/index.html" target="_blank">click here</a>
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
