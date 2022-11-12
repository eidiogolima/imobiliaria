import React from 'react';
import styles from '../../CSS/Header.module.css';
import { Link } from 'react-router-dom';
import Accont from '../../assets/icons-main/acc.svg';
import AccontImg from '../../assets/icons-main/accontimg.svg';

const Header = () => {
  React.useEffect(() => {
    const btn = document.querySelector('.menuMobile');
    console.log(btn);
    const links = document.querySelectorAll('a');

    links.forEach((link) => {
     
      link.addEventListener('click', () => {
        link.classList.remove('active')
        btn.classList.remove(styles.activeMenu);
      });

      link.addEventListener('click', () =>{
        links.forEach((item)=>{
          item.classList.remove(styles.active)
        })
        link.classList.add(styles.active);
      });

      console.log(link);
    });
  });

  return (
    <header id={styles.headerBg}>
      <div className="container" id={styles.header}>
        <button
          onClick={({ target }) => target.classList.toggle(styles.activeMenu)}
          id={`${styles.menuMobile}`}
          className="menuMobile"
        ></button>

        <ul id={styles.accontDisableMobile}>
          <Link to="entrar" className="font-1-s">
            Entrar
          </Link>
          <Link to="cadastrar" className="font-1-s">
            Cadastrar
          </Link>
        </ul>
        <Link to="conta" id={styles.contaMobile}>
          <img src={AccontImg} alt="" />
        </Link>
        <Link to="home" id={styles.logoHeader}>
          <h1>LOGO</h1>
        </Link>

        <nav id={styles.nav}>
          <ul>
            <Link
              id={styles.menuText}
              className="font-2-xs cor-11"
              style={{ color: 'var(--cor-11)', fontWeight: '500' }}
            >
              Menu
            </Link>
            <Link to="vender" className="font-1-s">
              Vender
            </Link>
            <Link to="servicos" className="font-1-s">
              Serviços
            </Link>
            <Link to="ajuda" className="font-1-s">
              Ajuda
            </Link>
            <Link to="whatsapp" className="font-1-s">
              WhatsApp
            </Link>

            <ul id={styles.accontDisable}>
              <Link to="entrar" className="font-1-s">
                Entrar
              </Link>
              <Link to="cadastrar" className="font-1-s">
                Cadastrar
              </Link>
            </ul>
          </ul>
        </nav>
        <ul id={styles.accont}>
          <Link to="entrar" className="font-1-s">
            Entrar
          </Link>
          <Link to="cadastrar" className="font-1-s">
            Cadastrar
          </Link>
          <img src={Accont} alt="" />
        </ul>
      </div>
    </header>
  );
};

export default Header;
