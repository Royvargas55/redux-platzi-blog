import React from 'react'
import { connect } from 'react-redux';

// Componentes
import Spinner from '../general/Spinner';
import Fatal from '../general/Fatal';

const Comentarios = (props) => {

    if(props.com_error) {
        return <Fatal error={props.com_error} />
    }

    if(props.com_cargando && !props.comentarios.length) {
        return <Spinner />
    }
    
    const ponerComentarios = () => (props.comentarios.map((comentario) => (
        <li>
            <b>
                <u>
                    { comentario.email }
                </u>
            </b>
            <br />
            { comentario.body }
        </li>
        ))
    );
    
    return (
        <ul>
            { ponerComentarios() }
        </ul>
    )
}

const mapStateToProps = (reducers) => {
    return reducers.publicacionesReducer
}

export default connect(mapStateToProps)(Comentarios);
