import React from 'react';
import styles from '../../CSS/Pages/Search.module.css';

import SubHeader from '../../JS/Ultilits/SubHeader';
import MostViewed from '../Components/MostViewed';

const Search = () => {
  return (
    <section id={styles.search}>
      <div className='container' id={styles.best}>
        <span className="font-2-xs cor-7">(ATÉ 300MIL)</span>
        <h1 className="font-1-xl cor-10">Seu melhor imóvel a poucos KM de você</h1>
      </div>

    

      <div id = {styles.subHeader}>
      <SubHeader title="150mil a 300mil" cor="var(--cor-p4)" />
      </div>

      <MostViewed/>
      <MostViewed/>
      <MostViewed/>

    </section>
  );
};

export default Search;
