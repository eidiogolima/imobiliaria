import React from 'react';
import Head from '../Global/Head';
import styles from '../../CSS/Pages/Home.module.css';
import Modal from '../Components/Modal';

function Home() {
  return (
    <>
      <Head
        title="Home | Imóvel"
        description="Alugar casa, apartamento ou lote nunca foi tão fácil, tem imóvel ? coloque para vender em poucos cliques "
      />

      <section id={styles.homeBg}>
        <div id={styles.home}>
          <Modal />
        </div>
      </section>
    </>
  );
}

export default Home;
