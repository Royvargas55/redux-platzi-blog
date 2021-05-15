import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Styles
import './css/index.css';
import './css/iconos.css';

// Redux  { applyMiddleware para hacer funcionar el middleware de reduxThunk}
import { createStore,  applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Reducers
import reducers from './reducers/index';

// Añadir middleware para realizar llamada asincronas
import reduxThunk from 'redux-thunk';

const store = createStore(
    reducers, // Todos los reducers
    {}, //Estado inicial
    applyMiddleware(reduxThunk)
);

ReactDOM.render(
<Provider store={ store }>
    <App />
</Provider>, document.getElementById('root'));