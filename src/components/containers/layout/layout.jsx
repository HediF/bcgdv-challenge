import React from 'react';
import './layout.css'

// Main container of the App
const layout = (props) => (
        <div className="main-container">
                {props.children}
        </div>
);

export default layout;
