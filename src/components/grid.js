import React from 'react';
import Cell from './cell.js';
import { useDrag, useDrop } from 'react-dnd';
import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import '../styles/grid.css';

function Grid() {
    const ItemType = 'ITEM';
    const DraggableItem = ({ id, ele }) => {
        const [{ isDragging }, drag] = useDrag(() => ({
            type: ItemType,
            item: { id },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }));

        return (
            <div
                ref={drag}
                style={{
                    opacity: isDragging ? 0.5 : 1,
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'teal'
                }}
            >
                {ele}
            </div>
        );
    };

    // Drop Area Component
    const DropArea = ({ onDrop, ele }) => {
        const [{ isOver }, drop] = useDrop(() => ({
            accept: ItemType,
            drop: (item) => onDrop(item.id),
            collect: (monitor) => ({
                isOver: monitor.isOver(),
            }),
        }));

        return (
            <div
                ref={drop}
                style={{
                    height: '100px',
                    width: '100px',
                    border: '0.5px dashed #ccc',
                    backgroundColor: isOver ? 'lightgreen' : 'white',
                    padding: '0px',
                }}
            >
                {ele}
            </div>
        );
    };
    const handleDrop1x1 = (id) => {
        setToggle1x1(id);
    };
    const handleDrop1x2 = (id) => {
        setToggle1x2(id);
    };
    const [toggle1x1, setToggle1x1] = useState(<DropArea onDrop={handleDrop1x1} />);
    const [toggle1x2, setToggle1x2] = useState(<DropArea onDrop={handleDrop1x2} />);
    const dropGridData = [
        <DropArea onDrop={handleDrop1x1} ele={toggle1x1}/>,
        <DropArea onDrop={handleDrop1x2} ele={toggle1x2}/>,
        <DropArea onDrop={handleDrop1x1} ele={toggle1x1}/>,
        <DropArea onDrop={handleDrop1x2} ele={toggle1x2}/>,
        <DropArea onDrop={handleDrop1x1} ele={toggle1x1}/>,
        <DropArea onDrop={handleDrop1x2} ele={toggle1x2}/>,
        <DropArea onDrop={handleDrop1x1} ele={toggle1x1}/>,
        <DropArea onDrop={handleDrop1x2} ele={toggle1x2}/>,
        <DropArea onDrop={handleDrop1x1} ele={toggle1x1}/>
    ];
    const dragGridData = [
        <DraggableItem id={<Cell color='teal'/>} ele={<Cell color = 'teal'/>} />,
        <DraggableItem id={<Cell color = 'green'/>} ele={<Cell color = 'green'/>} />,
        <DraggableItem id={<Cell color = 'yellow'/>} ele={<Cell color = 'yellow'/>} />
    ];
    return (
        <>
            <div className='grid-master'>
                <DndProvider backend={HTML5Backend}>
                    <div className='drag-container'>
                        {dragGridData.map((component, index) => (
                            <div className='drag-container-item'>{component}</div>
                        ))}
                    </div>
                    <div className='drop-container'>
                        {dropGridData.map((component, index) => (
                            <div className='drop-container-item'>{component}</div>
                        ))}
                    </div>
                </DndProvider>
            </div>
        </>
    );
}

export default Grid;