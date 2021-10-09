import React from 'react';
import './tableCell.css';

const tableCell = props => {
              
        return (
           <div className="cell-container">
               <p className="cell-header">Sunrise</p>
               <p className="cell-info-content">20:26</p>
           </div>
         )
}

export default tableCell;
