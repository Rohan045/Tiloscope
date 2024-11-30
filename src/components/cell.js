import React from 'react';

function Cell(props) {
    return (
        <div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: props.color,
                border: '1px solid '
            }}>

        </div>
    );
}

export default Cell;