import './App';
import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Quizs from './Quiz\'s/Quizs';
import Support from './Support/SupportPage';
import Home from './Home/HomePage';
import Footer from './Footer/Footer';
import RegisterPage from './Register/RegisterPage';
import NavBar from './NavBar/Navbar';
import AboutUs from './AboutUS/AboutUsPage';
import Profile from './Profile/Profile';
import Conceitos from './Conceitosbasicos/Conceitosbas'
import RDC from './RDC/RDC';
import Programacao from './Programacao/Programacao'
import './App.css'
import ADSI from './ADSI/ADSI';
import LoginPage from './Login/LoginPage';
import NavbarR from './Register/NavbarR';
import NavBarL from './Login/NavbarL';
import ProgCateg from './Prog-Categ/ProgCateg';

function App() {
  return (
    <Router>
    <div className="App">
      <div className='content'>
        <Switch>
          {/* Home */}
          <Route exact path="/">
            <NavBar />
            <Home />
            <Footer/>
          </Route>
          {/* Register */}
          <Route path="/register">
            <NavbarR />
            <RegisterPage />
            <Footer />
          </Route>
          {/* Esquecime */}
          <Route path="/esquecime">
            <NavBar />
          </Route>
          {/* Login */}
          <Route path="/login">
            <NavBarL />
            <LoginPage />
          </Route>
          {/* Conceitos Basicos */}
          <Route path="/conceitos-basicos">
            <NavBar />
            <Conceitos />
            <Footer />
          </Route>
          {/*Quiz's */}
          <Route path="/quizs">
            <NavBar/>
            <Quizs />
          </Route>
          {/* Support */}
          <Route path="/support">
            <NavBar />
            <Support />
          </Route>
          {/*AboutUs */}
          <Route path="/aboutus">
            <NavBar />
            <AboutUs />
          </Route>
          {/* Profile */}
          <Route path="/profile">
            <NavBar />
            <Profile />
          </Route>
          {/* Redes de Computadores */}
          <Route path="/redes-de-computadores">
            <NavBar/>
            <RDC/>
            <Footer />
          </Route>
          {/* Administracao de Sistemas Operativos */}
          <Route path="/administracao-de-sistemas-informaticos">
            <NavBar/>
            <ADSI />
            <Footer />
          </Route>
          {/* Programacao */}
          <Route exact path="/programacao">
            <NavBar/>
            <Programacao/>
            <Footer />
          </Route>
          {/* Programacao Categorias */}
          <Route path="/programacao/categorias">
            <NavBar />
            <ProgCateg />
            <Footer />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
