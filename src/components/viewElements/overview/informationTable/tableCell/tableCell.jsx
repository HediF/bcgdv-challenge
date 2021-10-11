import React from 'react';
import './tableCell.css';

const CELL_TYPES_ENUM = {
  HUMIDITY: 'Humidity',
  VISIBILITY: 'Visibility',
  SUNSET: 'Sunset',
  SUNRISE: 'Sunrise',
}

// Reusable table cell for the table in the stretch component
const tableCell = props => {

        // Converts date in seconds to normal date
        function convertToDate (sec) {
          let date = new Date(sec * 1000);
          let timestr = date.toLocaleTimeString();
          return timestr;
        }

        return (
           <div className="cell-container">
               <p className="cell-header">{props.type}</p>
               <p className="cell-info-content">{(props.type === CELL_TYPES_ENUM.SUNRISE) || (props.type === CELL_TYPES_ENUM.SUNSET) ? convertToDate(props.content) : props.content} {props.type === CELL_TYPES_ENUM.VISIBILITY ? 'Km' : void(0)}</p>
           </div>
         )
}

export default tableCell;
