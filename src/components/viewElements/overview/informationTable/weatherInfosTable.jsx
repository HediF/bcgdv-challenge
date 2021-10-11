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

    let sunrise = props.isMyLocation ? props.weatherInfos.current.sunrise : props.weatherInfos.sys.sunrise;
    let sunset = props.isMyLocation ? props.weatherInfos.current.sunset : props.weatherInfos.sys.sunset;
    let humidity = props.isMyLocation ? props.weatherInfos.current.humidity : props.weatherInfos.main.humidity;
    let visiblity = props.isMyLocation ? Math.round(props.weatherInfos.current.visibility / 1000) : Math.round(props.weatherInfos.visibility / 1000);

    return (
        <table id="information-table">
            <tbody>
                <tr>
                    <th>
                        <TableCell
                            type={CELL_TYPES_ENUM.SUNRISE}
                            content={sunrise}
                        />
                    </th>
                    <th>
                        <TableCell
                            type={CELL_TYPES_ENUM.SUNSET}
                            content={sunset}
                        />
                    </th>
                </tr>
                <tr>
                    <th>
                        <TableCell
                            type={CELL_TYPES_ENUM.HUMIDITY}
                            content={humidity} />
                    </th>
                    <th>
                        <TableCell
                            type={CELL_TYPES_ENUM.VISIBILITY}
                            content={visiblity} />
                    </th>
                </tr>
            </tbody>
        </table>
    )
}

export default weatherInfosTable;
