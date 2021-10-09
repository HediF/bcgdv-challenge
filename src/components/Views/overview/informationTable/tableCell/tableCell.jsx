import React from 'react';
import './tableCell.css';

const CELL_TYPES_ENUM = {
  HUMIDITY: 'Humidity',
  VISIBILITY: 'Visibility',
  SUNSET: 'Sunset',
  SUNRISE: 'Sunrise',
}

const tableCell = props => {
        return (
           <div className="cell-container">
               <p className="cell-header">{props.type}</p>
               <p className="cell-info-content">{props.content} {props.type === CELL_TYPES_ENUM.VISIBILITY ? 'Km' : void(0)}</p>
           </div>
         )
}

export default tableCell;
