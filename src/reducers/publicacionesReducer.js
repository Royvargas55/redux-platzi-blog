/* eslint-disable import/no-anonymous-default-export */
import { TRAER_TODOS, TRAER_POR_USUARIO, CARGANDO, ERROR} from '../types/publicacionesTypes';

const INITIAL_STATE = {
    publicaciones: [],
    cargando: false,
    error: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TRAER_TODOS:
            return {
                ...state, 
                publicaciones: action.payload,
                cargando: false,
                error: null
            }
        case TRAER_POR_USUARIO:
            return {
                ...state, 
                publicaciones: action.payload,
                cargando: false,
                error: null
            }
        case CARGANDO:
            return {
                ...state, 
                cargando: true
            }
        case ERROR:
            return {
                ...state,
                error: action.payload,
                cargando: false
            }
        default: return state;
    }
}