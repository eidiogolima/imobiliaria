import React from 'react';
import styles from '../../CSS/Utilits/Card.module.css';
import sala from '../../assets/icons-main/sala-g.svg';
import cozinha from '../../assets/icons-main/Cozinha-g.svg';
import garage from '../../assets/icons-main/garage.svg';
import banheiro from '../../assets/icons-main/Banheiro-g.svg';
import heart from '../../assets/icons-main/heart.svg';
import buy from '../../assets/icons-main/buy.svg';
import { Link } from 'react-router-dom';

const Card = ({ ...props }) => {
  return (
    <div id={styles.card}>
      <Link>
      <img src={props.image} alt={props.alt} />
      </Link>
      <span className="font-2-s" id={styles.price}>
        {props.price}
      </span>

      <div id={styles.action}>
        <ul id={styles.descriprionList}>
          <div>
            <li className="font-2-xs cor-2">
  
                <img src={sala} alt="" />
 
              {props.sala} Sala
            </li>

            <li className="font-2-xs cor-2">
              {' '}
              <img src={garage} alt="" /> {props.quarto} Garagem{' '}
            </li>
          </div>
          <div>
            <li className="font-2-xs cor-2">
              <img src={cozinha} alt="" />
              {props.cozinha} Cozinha{' '}
            </li>
            <li className="font-2-xs cor-2">
              {' '}
              <img src={banheiro} alt="" />
              {props.banheiro} Banheiro{' '}
            </li>
          </div>

          <button>
            <img src={heart} alt="" />
          </button>

          <button>
            <img src={buy} alt="" />
          </button>
        </ul>
      </div>

      <div id={styles.button}>
        <button className="button-s">Ver Imovel</button>
      </div>
    </div>
  );
};

export default Card;
