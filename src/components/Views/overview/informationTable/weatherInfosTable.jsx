import React from 'react';
import TableCell from './tableCell/tableCell';
import './weatherInfosTable.css';

const weatherInfosTable = props => {
              
        return (
            <table>
                <tbody>
                    <tr>
                        <th><TableCell/></th>
                        <th><TableCell/></th>
                    </tr>
                    <tr>
                        <th><TableCell/></th>
                        <th><TableCell/></th>
                    </tr>
                </tbody>
            </table>
        )
}

export default weatherInfosTable;
