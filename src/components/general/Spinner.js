import React from 'react'

// Styles

import '../../css/spinner.css';

export default function Spinner() {
    return (
        <div className="center">
            <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
