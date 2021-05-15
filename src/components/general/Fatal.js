import React from 'react'

export default function Fatal(props) {
    return (
        <div className="center rojo">
            <h1>{props.error}</h1>
        </div>
    )
}
