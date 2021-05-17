import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

// Componentes
import Usuario from './Usuarios/Index';
import Menu from './Menu';
import Publicaciones from './Publicaciones';
import Tareas from './Tareas/index';
import TareasGuardar from './Tareas/Guardar';

const App = () => {
  return(
    <BrowserRouter>
      <Menu />
      <Switch>
        <div className="margen">
          <Route exact path="/" component={Usuario}/>
          <Route exact path="/tareas" component={Tareas}/>
          <Route exact path="/publicaciones/:key" component={Publicaciones}/>
          <Route exact path="/tareas/guardar" component={TareasGuardar}/>
          <Route exact path="/tareas/guardar/:usu_id/:tar_id" component={TareasGuardar}/>
          <Redirect from="*" to="/"/>
        </div>
      </Switch>
    </BrowserRouter>
  )
}

export default App;