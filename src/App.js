import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './CSS/Default/Global.css';
import './CSS/Utilidades/Typografy.css'
import './CSS/Utilidades/Colors.css'
import Header from './JS/Global/Header';
import Vender from './JS/Pages/Vender';
import Home from './JS/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path = "/" element= {<Home/>}/>
          <Route path = "vender" element= {<Vender/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
