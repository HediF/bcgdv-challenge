import React from 'react';
import TableCell from './tableCell/tableCell';
import './weatherInfosTable.css';

const CELL_TYPES_ENUM = {
    HUMIDITY: 'Humidity',
    VISIBILITY: 'Visibility',
    SUNSET: 'Sunset',
    SUNRISE: 'Sunrise',
}

const weatherInfosTable = props => {
              
        return (
            <table>
                <tbody>
                    <tr>
                        <th><TableCell type = {CELL_TYPES_ENUM.SUNRISE} content = {props.weatherInfos.sys.sunrise}/></th>
                        <th><TableCell type = {CELL_TYPES_ENUM.SUNSET} content = {props.weatherInfos.sys.sunset}/></th>
                    </tr>
                    <tr>
                        <th><TableCell type = {CELL_TYPES_ENUM.HUMIDITY} content = {props.weatherInfos.main.humidity}/></th>
                        <th><TableCell type = {CELL_TYPES_ENUM.VISIBILITY}  content = {Math.round(props.weatherInfos.visibility/1000)}/></th>
                    </tr>
                </tbody>
            </table>
        )
}

export default weatherInfosTable;
