import React from 'react';
import SubHeader from '../Ultilits/SubHeader';
import styles from '../../CSS/Components/Notices.module.css'
import photoNotices from '../../assets/img/Notices.jpg';
import { Link } from 'react-router-dom';

function Notices() {
  return (
    <section id={styles.notices}>
      <div id = {styles.subHeaderNotices}>
        <SubHeader
          title="Noticias"
          cor="var(--cor-p1)"
          paragraph="Indice imobiliário sobe mais de 1,5% ao mês e analistas ficam em alerta para possiveis oportunidades  Indice imobiliário sobe mais de 1,5% ao mês e analistas ficam em "
          paragraphColor="#591F89" fontColor="var(--cor-2)" fontColorParagraph="var(--cor-2)"
          padding = '10px'
          border="1px solid var(--cor-11)"
        />
      </div>

      <div className= "container" id = {styles.noticeImg} >
        <Link> <img src={photoNotices} alt="" />
        <p className='font-2-xs cor-2'>CEO DA INFORMA IMÓVEL É MANDADO EMBORA E EMPRESA PASSA POR CRISE, FUNDOS DE PAPEL CAIM MAIS DE 50% EM 2022, IMÓVEL É 70% MAIS VALORIZADO NO ANO DE 2022 CLIQUE PARA SABER MAIS  </p>
        </Link>
       
      </div>

      <div className='container' >
        <span  className='font-2-s' id = {styles.ads}>ADS</span>
      </div>


    </section>
  );
}

export default Notices;
