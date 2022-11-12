import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './CSS/Default/Global.css';
import './CSS/Utilidades/Typografy.css'
import './CSS/Utilidades/Colors.css'
import Header from './JS/Global/Header';
import Vender from './JS/Pages/Vender';
import Home from './JS/Home/Home';
import Work from './JS/Pages/Work';
import Help from './JS/Pages/Help';
import WhatsApp from './JS/Pages/WhatsApp';
import Login from './JS/Login/Login';
import Register from './JS/Register/Register';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path = "/home" element= {<Home/>}/>
          <Route path = "vender" element= {<Vender/>}/>
          <Route path = "servicos" element= {<Work/>}/>
          <Route path = "ajuda" element= {<Help/>}/>
          <Route path = "whatsapp" element= {<WhatsApp/>}/>
          <Route path = "entrar" element= {<Login/>}/>
          <Route path = "cadastrar" element= {<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
