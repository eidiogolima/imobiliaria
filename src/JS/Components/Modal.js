import React from 'react'
import { Link } from 'react-router-dom';
import row from '../../assets/icons-main/bottom-row.svg';
import styles from '../../CSS/Components/Modal.module.css';

const Modal = () => {
  return (
    <main id={styles.modalBg}>
        <section className="container" id={styles.home}>
          <div className={styles.modal}>
            <ul className={styles.searchBuy}>
              <Link to="comprar" className="font-1-s">
                Quero Comprar
              </Link>
              <Link to="vender" className="font-1-s">
                Quero vender
              </Link>
              <Link to="alugar" className="font-1-s">
                Quero Alugar
              </Link>
              <button className="button-s">
                Filtros
                <img src={row} alt="" />{' '}
              </button>
            </ul>

            <div className={styles.search}>
              <form className="form">
                <input
                  className="col-2"
                  type="text"
                  placeholder="Apartamento, Casa, Lote"
                />
              </form>
              <button className="button-s">Buscar</button>
            </div>


            <div id = {styles.btnMobile}>
               <button id={styles.btnDisabled} className="button-s">
              Filtros
              <img src={row} alt="" />{' '}
            </button>
            </div>
           

          </div>
        </section>
      </main>
  )
}

export default Modal