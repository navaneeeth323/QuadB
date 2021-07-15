import React from 'react';
import './TableContainer.css';
import TableHeadings from './TableContents/TableHeadings';
import TableItem from './TableContents/TableItem';

const TableContainer = () => {
    return (
        <div className="table-container">
            <TableHeadings number="#" platform="Platform" ltp="Last Traded Price"
                price="Buy / Sell Price" difference="Difference" savings="Savings" />
            <TableItem number="1" platform="WazirX" ltp="₹ 25,29,148"
                price="₹ 25,26,908 / ₹ 25,29,148" difference="-0.13 %" savings="▼ ₹ 3,364"/>    
            <TableItem number="2" platform="Bitbns" ltp="₹ 25,27,297"
                price="₹ 25,26,275 / ₹ 25,38,116" difference="-0.21 %" savings="▼ ₹ 5,214"/>    
            <TableItem number="3" platform="Giotus" ltp="₹ 25,05,101"
                price="₹ 25,05,150 / ₹ 25,28,909" difference="-1.08 %" savings="▼ ₹ 27,411"/>    
            <TableItem number="4" platform="Colodax" ltp="₹ 25,83,138"
                price="₹ 25,75,167 / ₹ 26,08,984" difference="2.00 %" savings="▲ ₹ 50,625"/>    
            <TableItem number="5" platform="Zebpay" ltp="₹ 25,29,000"
                price="₹ 25,30,000 / ₹ 25,29,557" difference="-0.14 %" savings="▼ ₹ 3,512"/>    
            <TableItem number="6" platform="CoinDCX" ltp="₹ 25,21,390"
                price="₹ 25,21,391 / ₹ 25,29,174" difference="-0.44 %" savings="▼ ₹ 11,122"/>    
              
        </div>
    );
}

export default TableContainer;