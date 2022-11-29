import React from 'react';
import SubHeader from '../Ultilits/SubHeader';
import styles from '../../CSS/Components/MostViewed.module.css'
import Card from '../Ultilits/Card';
import HouseFoto from '../../assets/img/Casa.jpg'
import house2 from '../../assets/img/house-2.jpg'
import house3 from '../../assets/img/house-3.jpg'

function MostViewed() {
  return (
    <section id = {styles.mostViewed}>
      <SubHeader
        title="Mais vistos"
        cor="var(--cor-p4)"
      />

      <div className='container' id = {styles.cards}>
        <Card price = 'R$ 290mil' image = {HouseFoto} alt = "Casa" sala = '2' quarto = '4' banheiro = '3' cozinha = '1'/>
        <Card price = 'R$ 300mil' image = {house2} alt = "Casa" sala = '2' quarto = '4' banheiro = '3' cozinha = '1'/>
        <Card price = 'R$ 450mil' image = {house3} alt = "Casa" sala = '2' quarto = '4' banheiro = '3' cozinha = '1'/>
        
      </div>

      
    </section>
  );
}

export default MostViewed;
