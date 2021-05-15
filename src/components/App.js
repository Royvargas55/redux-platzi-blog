import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

// Componentes
import Usuario from './Usuarios/Index';
import Menu from './Menu';
import Publicaciones from './Publicaciones';

const Tareas = () => {
  return <h1>Tareas</h1>
}

const App = () => {
  return(
    <BrowserRouter>
      <Menu />
      <Switch>
        <div className="margen">
          <Route exact path="/usuarios" component={Usuario}/>
          <Route exact path="/tareas" component={Tareas}/>
          <Route exact path="/publicaciones/:key" component={Publicaciones}/>
          <Redirect from="*" to="/usuarios"/>
        </div>
      </Switch>
    </BrowserRouter>
  )
}

export default App;