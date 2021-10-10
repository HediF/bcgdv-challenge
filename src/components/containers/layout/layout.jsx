import React from 'react';
import './layout.css'

const layout = (props) => (
        <div className="main-container">
                {props.children}
        </div>
);

export default layout;
