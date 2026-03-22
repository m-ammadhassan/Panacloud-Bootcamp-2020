import React, {useState} from 'react'

const Table = () => {

    const [tableNum, setTableNum] = useState(0);
    const [tableRow, setTableRow] = useState(0);
    const [tableLength, setTableLength] = useState([]);
    

    const methodGenerateTable = (num, row) => {
        let tableArray = [];
        for(let i=1; i<=row; i++)
        {
            tableArray.push(i); 
        }

        setTableLength(tableArray);
    }

    return (
        <div className="table-section padding text">
            <div className="table-section-title">
                <h3>Times Table Generator</h3>
            </div>

            <div className="table-section-body flex">
                <div className="table-controls">
                    <div className="table-control-num flex">
                        <h4>Select Table Number</h4>
                        <div className="table-buttons">
                            <button className="table-button" onClick={() => {setTableNum(tableNum + 1); setTableLength([])}}>+</button>
                            <span>{tableNum}</span>
                            <button className="table-button" onClick={() => {setTableNum(tableNum - 1); setTableLength([])}}>-</button>
                        </div>
                    </div>

                    <div className="table-control-row flex">
                        <h4>Select Table Rows</h4>
                        <div className="table-buttons">
                            <button className="table-button" onClick={() => {setTableRow(tableRow + 1); setTableLength([])}}>+</button>
                            <span>{tableRow}</span>
                            <button className="table-button" onClick={() => {setTableRow(tableRow - 1); setTableLength([])}}>-</button>
                        </div>
                    </div>

                    <div className="table-control-generate flex">
                        <button className="table-button" onClick={() => {methodGenerateTable(tableNum, tableRow)}}>Generate</button>
                    </div>
                </div>

                <div className="table-display flex">
                    {
                        tableLength.map((row) => (
                            <div key={row} className="table-display-row flex">
                                <div>{tableNum}</div>
                                <div> x </div>
                                <div>{row}</div>
                                <div> = </div>
                                <div>{tableNum * row}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Table