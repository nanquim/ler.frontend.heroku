import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Menu from './componentes/Menu'
import FormAssociar from './componentes/Formularios/Associar'
import FormContato from './componentes/Formularios/Contato'
import Sobre from './componentes/Paginas/Sobre'
import Blog from './componentes/Blog'

/* 
 TODO reutilizar forms, esta horrivel...
*/

 export default function App() {
  return (
    <Router>
      <Menu />
      <main>
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/associar" component={FormAssociar} />
          <Route path="/contato" component={FormContato} />
        </Switch>
      </main>
    </Router>
  );
}
