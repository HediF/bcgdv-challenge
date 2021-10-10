import React from 'react';
import './grid.css'

const grid = (props) => (
        <div className="locations-grid">
                {props.children}
        </div>
);

export default grid;
