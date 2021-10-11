import React from 'react';
import './grid.css'

// Displays children inside a grid layout
const grid = (props) => (
        <div className="locations-grid">
                {props.children}
        </div>
);

export default grid;
