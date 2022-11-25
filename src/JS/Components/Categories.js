import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../CSS/Components/Categories.module.css';
import SubHeader from '../Ultilits/SubHeader';

const Categories = () => {
  return (
    <section id={styles.categories}>
      <SubHeader title = "Categorias" cor = "var(--cor-p4)"/>
      <div className="container">
        <div id={styles.boxContainer}>


          <Link to="" className={styles.box}>
            <h2 className="font-1-l cor-2">
              150mil <br /> a <br /> 350mil
            </h2>
          </Link>

          <Link to="" className={styles.box}>
            <h2 className="font-1-l cor-2" >
              300mil <br /> a <br />
              500mil
            </h2>
          </Link>

          <Link to="" className={styles.box}>
            <h2 className="font-1-l cor-2">
              500mil <br /> a <br /> 1Milhão
            </h2>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
