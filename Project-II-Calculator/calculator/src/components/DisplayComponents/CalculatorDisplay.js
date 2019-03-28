import React from 'react';
import './Display.css';

const Display = (props) => {
    return (
        <div className="display">
            <p className="display-text">{props.display}</p>
        </div>
    );
}

export default Display;