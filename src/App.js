import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './componentes/Menu';
import FormAssociar from './componentes/Formularios/Associar';
import FormContato from './componentes/Formularios/Contato';
import Sobre from './componentes/Paginas/Sobre';
import Blog from './componentes/Blog';
import Agenda from './componentes/Agenda';
import NaoEncontrado from './componentes/Paginas/404'
import './App.css';

const App = () => {
  return (
    <Router>
      <Menu />
      <main>
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/agenda" component={Agenda} />
          <Route path="/associar" component={FormAssociar} />
          <Route path="/contato" component={FormContato} />
          <Route component={NaoEncontrado} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
