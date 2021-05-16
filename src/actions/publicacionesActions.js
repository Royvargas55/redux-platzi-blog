import axios from 'axios';
import { TRAER_TODOS, TRAER_POR_USUARIO, CARGANDO, ERROR } from '../types/publicacionesTypes';
import * as usuariosTypes from '../types/usuariosTypes';

const { TRAER_TODOS: USUARIOS_TRAER_TODOS } = usuariosTypes;

export const traerTodos = () => async (dispatch) => {

    dispatch({
        type: CARGANDO
    })

    try {
        const respuesta = await axios.get('http://jsonplaceholder.typicode.com/posts');
        dispatch({
            type: TRAER_TODOS,
            payload: respuesta.data
        })
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Algo salió mal intentalo más tarde'
        })
    }
}

export const traerPorUsuario = (key) => async (dispatch, getState) => {
    const { usuarios } = getState().usuariosReducer;
    const { publicaciones } = getState().publicacionesReducer;
    const usuario_id = usuarios[key].id;

    const respuesta = await axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`);
    const publicaciones_actualizadas = [
        ...publicaciones,
        respuesta.data
    ];

    const publicaciones_key = publicaciones_actualizadas.length - 1;
    const usuarios_actualizados = [...usuarios];
    usuarios_actualizados[key] ={
        ...usuarios[key],
        publicaciones_key
    };

    dispatch({
        type: USUARIOS_TRAER_TODOS,
        payload: usuarios_actualizados
    });


    dispatch({
        type: TRAER_POR_USUARIO,
        payload: publicaciones_actualizadas
    });
}