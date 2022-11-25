import React from 'react';
import Head from '../Global/Head';
import styles from '../../CSS/Pages/Home.module.css';
import Modal from '../Components/Modal';
import Categories from '../Components/Categories';
import Foto from '../../assets/img/house-home.jpg';
import Notices from '../Components/Notices';
import MostViewed from '../Components/MostViewed';

function Home() {
  return (
    <>
      <Head
        title="Home | Imóvel"
        description="Alugar casa, apartamento ou lote nunca foi tão fácil, tem imóvel ? coloque para vender em poucos cliques "
      />

      <section id={styles.home}>
        <div className={styles.foto}>
          <img src={Foto} alt="" />
        </div>
        <div id={styles.modal}>
          <Modal />
        </div>
        <Categories />
        <Notices />
        <MostViewed />
      </section>
    </>
  );
}

export default Home;
