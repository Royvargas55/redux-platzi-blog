import { combineReducers } from 'redux';

// Reducers
import usuariosReducer from './usuariosReducer';
import publicacionesReducer from './publicacionesReducer';
import tareasReducer from './tareasReducer';

export default combineReducers({
    usuariosReducer,
    publicacionesReducer,
    tareasReducer
});