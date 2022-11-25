import React from 'react';
import SubHeader from '../Ultilits/SubHeader';
import styles from '../../CSS/Components/MostViewed.module.css'

function MostViewed() {
  return (
    <section id = {styles.mostViewed}>
      <SubHeader
        title="Mais vistos"
        cor="var(--cor-p4)"
      />
    </section>
  );
}

export default MostViewed;
