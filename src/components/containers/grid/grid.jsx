/* Container for the middlepanel that will contain the views used for this project */

import React from 'react';
import './grid.css'

const grid = (props) => (
        <div className="locations-grid">
                {props.children}
        </div>
);

export default grid;
