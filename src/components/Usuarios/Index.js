import React, { Component } from 'react';

// Conectar componente a su reducer
import { connect } from 'react-redux';

// Importar acciones
import * as usuariosActions from '../../actions/usuariosActions';

// Componentes
import Spinner from '../general/Spinner';
import Fatal from '../general/Fatal';
import Tabla from './Tabla';

class Usuarios extends Component {

  componentDidMount() {
    this.props.traerTodos();
  }

  ponerContenido = () => {
    if (this.props.cargando) return <Spinner />

    if (this.props.error) return <Fatal error={this.props.error}/>

    return <Tabla />
  }

  render() {
    return (
      <div>
        <h1>Usuarios</h1>
        { this.ponerContenido()}
      </div>
    );
  }

};

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps, usuariosActions)(Usuarios);

