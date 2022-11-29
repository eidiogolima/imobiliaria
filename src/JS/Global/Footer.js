import React from 'react'
import { Link } from 'react-router-dom';

import styles from '../../CSS/Footer.module.css';



function Footer() {
  return (
    <footer id = {styles.footerBg}>
      <div id = {styles.footer} className='container'>

        <div id = {styles.logo}>
            <h1 className='font-1-x cor-2'>LOGO</h1>
        </div>


        <ul className= {styles.listItem}>
          <h4 className='font-1-s cor-3'>Fale com a gente</h4>

          <li className='font-2-xs cor-6'><Link to = "/contato">(11) 9999-99999</Link></li>
          <li className='font-2-xs cor-6'><Link to = "/contato">imoveis@contato.com</Link></li>
          <li className='font-2-xs cor-6'><Link to = "/duvidas">Duvidas Frequentes</Link></li>
        </ul>

        <ul className= {styles.listItem}>
          <h4 className='font-1-s cor-3'>Menu</h4>

          <li className='font-2-xs cor-6'><Link to = "home">Inicio</Link></li>
          <li className='font-2-xs cor-6'><Link to = "/contato">Contato</Link></li>
          <li className='font-2-xs cor-6'><Link to = "/whatsApp">WhatsApp</Link></li>
          <li className='font-2-xs cor-6'><Link to = "/noticias">Noticias</Link></li>
        </ul>


        <ul className= {styles.listItem}>
          <h4 className='font-1-s cor-3'>Imóveis</h4>

          <li className='font-2-xs cor-6'><Link to = "comprar">Casa</Link></li>
          <li className='font-2-xs cor-6'><Link to = "/comprar">Lote</Link></li>
          <li className='font-2-xs cor-6'><Link to = "/comprar">Apartamento</Link></li>
          <li className='font-2-xs cor-6'><Link to = "/comprar">Fazendas</Link></li>
        </ul>

        <ul className= {styles.listItem}>
          <h4 className='font-1-s cor-3'>Quem somos ?</h4>

          <li className='font-2-xs cor-6'><Link> clique para saber mais</Link> </li>
         
        </ul>


        



      </div>
      
      <span className='font-2-xs cor-5' id = {styles.copy}>© 2023 - Imobiliária todos os direitos reservados</span>

      
    </footer>
  )
}

export default Footer