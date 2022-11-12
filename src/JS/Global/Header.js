import React from 'react';
import styles from '../../CSS/Header.module.css';
import { NavLink } from 'react-router-dom';
import Accont from '../../assets/icons-main/acc.svg';
import AccontImg from '../../assets/icons-main/accontimg.svg';

const Header = () => {
  

  React.useEffect(()=>{
    const btn = document.querySelector('.menuMobile');
    console.log(btn);
    const links = document.querySelectorAll('a');

    links.forEach((link) => {
      link.addEventListener('click', () => {
        btn.classList.remove(styles.active);
      });
    });
  })

  return (
    <header id={styles.headerBg}>
      <div className="container" id={styles.header}>
        <button
          onClick={({ target }) => target.classList.toggle(styles.active)}
          id={`${styles.menuMobile}`}
          className="menuMobile"
        ></button>

        <ul id={styles.accontDisableMobile}>
          <NavLink to="entrar" className="font-1-s">
            Entrar
          </NavLink>
          <NavLink to="cadastrar" className="font-1-s">
            Cadastrar
          </NavLink>
        </ul>
        <NavLink to="conta" id={styles.contaMobile}>
          <img src={AccontImg} alt="" />
        </NavLink>
        <NavLink to="home" id={styles.logoHeader}>
          <h1>LOGO</h1>
        </NavLink>

        <nav id={styles.nav}>
          <ul>
            <NavLink
              id={styles.menuText}
              className="font-2-xs cor-11"
              style={{ color: 'var(--cor-11)', fontWeight: '500' }}
            >
              Menu
            </NavLink>
            <NavLink to="vender" className="font-1-s">
              Vender
            </NavLink>
            <NavLink to="servicos" className="font-1-s">
              Serviços
            </NavLink>
            <NavLink to="ajuda" className="font-1-s">
              Ajuda
            </NavLink>
            <NavLink to="whatsapp" className="font-1-s">
              WhatsApp
            </NavLink>

            <ul id={styles.accontDisable}>
              <NavLink to="entrar" className="font-1-s">
                Entrar
              </NavLink>
              <NavLink to="cadastrar" className="font-1-s">
                Cadastrar
              </NavLink>
            </ul>
          </ul>
        </nav>
        <ul id={styles.accont}>
          <NavLink to="entrar" className="font-1-s">
            Entrar
          </NavLink>
          <NavLink to="cadastrar" className="font-1-s">
            Cadastrar
          </NavLink>
          <img src={Accont} alt="" />
        </ul>
      </div>
    </header>
  );
};

export default Header;
