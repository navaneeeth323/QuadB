import React from 'react';
import './TableHeadings.css';

const TableHeadings = ({number,platform,ltp,price,difference,savings}) => {
    return (
       <div className="table-headings1">
          <h3>{number}</h3>
          <h3>{platform}</h3>
          <h3>{ltp}</h3>
          <h3>{price}</h3>
          <h3>{difference}</h3>
          <h3>{savings}</h3>
       </div>
    );
}

export default TableHeadings;