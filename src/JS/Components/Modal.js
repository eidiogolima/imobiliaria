import React from 'react';
import { Link } from 'react-router-dom';
import row from '../../assets/icons-main/bottom-row.svg';
import styles from '../../CSS/Components/Modal.module.css';
import Estados from '../../src/json/estados.json';
const Modal = () => {
  const [estado, setEstado] = React.useState('Selecionar');
  const [buy, setBuy] = React.useState('Selecionar');
  const [cidade, setCidade] = React.useState([]);
  const [type, setType] = React.useState([]);
  const [price, setPrice] = React.useState([]);
  const [filter, setFilter] = React.useState(false);
  const [search, setSearch] = React.useState('');

  

  const [width, setWidth] = React.useState('');


    window.addEventListener('resize', () => {
      let valor = window.innerWidth;
      setWidth(valor);
    });



  React.useEffect(() => {
    if (width >= 720) {
      console.log('Maior ' + width);
    } else {
      console.log('Menor ' + width);
    }
  }, [width]);

  const handleChangeEstado = ({ target }) => {
    const activeState = target.value;
    setEstado(activeState);
    const list = Estados.estados.filter((estado) => {
      return activeState.includes(estado.nomeEstado);
    });
    setCidade(list[0].cidades);
  };

  const activeFilter = ({ target }) => {
    setFilter(!filter);
    target.classList.toggle(styles.filterMenuMobile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <main id={styles.modalBg}>
      <section className="container" id={styles.home}>
        <div className={styles.modal}>
          
            <ul className={styles.searchBuy}>
              <Link to="comprar" className="font-1-s">
                {width < 700 ? 'Comprar' : ' Quero Comprar'}
              </Link>
              <Link to="vender" className="font-1-s">
              {width < 700 ? 'Vender' : ' Quero Vender'}
              </Link>
              <Link to="alugar" className="font-1-s">
              {width < 700 ? 'Alugar' : ' Quero Alugar'}
              </Link>
              <button
                onClick={activeFilter}
                id={styles.btnFilter}
                className="button-s"
              >
                Filtros
                {filter ? (
                  <img
                    src={row}
                    alt=""
                    style={{ transform: 'rotate(180deg)', transition: '.5s' }}
                  />
                ) : (
                  <img src={row} alt="" style={{ transition: '.5s' }} />
                )}
              </button>
            </ul>
         

          <form onSubmit={handleSubmit} className={styles.search + ' form'}>
            <input
              className="col-2"
              type="text"
              placeholder="Apartamento, Casa, Lote"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <button className="button-s">Buscar</button>
          </form>

          <div id={styles.btnMobile} onClick={activeFilter}>
            <button id={styles.btnDisabled} className="button-s">
              Filtros
              {filter ? (
                <img
                  src={row}
                  alt=""
                  style={{ transform: 'rotate(180deg)', transition: '.5s' }}
                />
              ) : (
                <img src={row} alt="" style={{ transition: '.5s' }} />
              )}
            </button>
          </div>

          {filter ? (
            <nav id={styles.nav}>
             
              <h3>Filtros</h3>
              <form onSubmit={handleSubmit} id={styles.modal}>
                <div className={styles.cardModal}>
                  <h4 className="font-1-s">Comprar/Alugar</h4>
                  <select
                    value={buy}
                    onChange={({ target }) => {
                      setBuy(target.value);
                    }}
                  >
                    <option disabled>Selecionar</option>
                    <option value="Comprar">Comprar</option>
                    <option value="Alugar">Alugar</option>
                  </select>
                </div>

                <div className={styles.cardModal}>
                  <h4 className="font-1-s">Estado</h4>
                  <select value={estado} onChange={handleChangeEstado}>
                    <option disabled>Selecionar</option>

                    {Estados.estados.map(({ nomeEstado, sigla, id }) => {
                      return (
                        <option key={id} id={id}>
                          {nomeEstado} - {sigla}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className={styles.cardModal}>
                  <h4 className="font-1-s">Cidade</h4>
                  <select name="Selecionar" id="">
                    <option value={estado} disabled>
                      Selecionar
                    </option>
                    {cidade.map(({ id_cidade, nomeCidade }) => {
                      return (
                        <option key={id_cidade} value={nomeCidade}>
                          {nomeCidade}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className={styles.cardModal}>
                  <h4 className="font-1-s">Tipo</h4>{' '}
                  <input
                    type="radio"
                    value="Casa"
                    checked={type === 'Casa'}
                    id="casa"
                    onChange={({ target }) => setType(target.value)}
                  />
                  <label className="font-2-xs" htmlFor="casa">
                    Casa
                  </label>
                  <input
                    type="radio"
                    value="apartamento"
                    id="apartamento"
                    checked={type === 'apartamento'}
                    onChange={({ target }) => setType(target.value)}
                  />
                  <label className="font-2-xs" htmlFor="apartamento">
                    Apartamento
                  </label>
                </div>

                <div className={styles.cardModal}>
                  <h4 className="font-1-s">Preço</h4>{' '}
                  <input
                    type="radio"
                    value="150"
                    checked={price === '150'}
                    onChange={({ target }) => setPrice(target.value)}
                    id="150"
                  />
                  <label className="font-2-xs" htmlFor="150">
                    R$ 150mil a 300mil
                  </label>
                  <input
                    type="radio"
                    value="300"
                    id="300"
                    checked={price === '300'}
                    onChange={({ target }) => setPrice(target.value)}
                  />
                  <label className="font-2-xs" htmlFor="300">
                    R$ 300mil a 500mil
                  </label>
                  <input
                    type="radio"
                    value="500"
                    id="500"
                    checked={price === '500'}
                    onChange={({ target }) => setPrice(target.value)}
                  />
                  <label className="font-2-xs" htmlFor="500">
                    R$ 500mil a 1mi
                  </label>
                </div>
                <button className="button-s" onClick={()=> setFilter(!filter)}>Aplicar</button>
                
              </form>
            </nav>
          ) : (
            ''
          )}
        </div>
      </section>
    </main>
  );
};

export default Modal;
