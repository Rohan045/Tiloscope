import { motion } from "framer-motion";
import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import "../styles/grid.css";
import Cell from "./cell.jsx";

const Grid = () => {
  const gridRowColSize = 5;
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const Backend = isMobile ? TouchBackend : HTML5Backend;

  const ItemType = "ITEM";

  const [draggableItems, setDraggableItems] = useState([
    { id: 1, component: <Cell color="blue" /> },
    { id: 2, component: <Cell color="green" /> },
    { id: 3, component: <Cell color="yellow" /> },
    { id: 4, component: <Cell color="red" /> },
    { id: 5, component: <Cell color="purple" /> },
    { id: 6, component: <Cell color="orange" /> },
    { id: 7, component: <Cell color="pink" /> },
    { id: 8, component: <Cell color="cyan" /> },
    { id: 9, component: <Cell color="magenta" /> },
    { id: 10, component: <Cell color="lime" /> },
  ]);

  const [dropItems, setDropItems] = useState(
    Array(gridRowColSize * gridRowColSize).fill(null)
  );

  const DraggableItem = ({ id, component }) => {
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
          cursor: "grab",
        }}
      >
        {component}
      </div>
    );
  };

  const DropArea = ({ index }) => {
    const [{ isOver }, drop] = useDrop(() => ({
      accept: ItemType,
      drop: (item) => handleDrop(index, item.id),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }));

    return (
      <div
        ref={drop}
        style={{
          height: "100px",
          width: "100px",
          border: "0.5px dashed #ccc",
          backgroundColor: isOver ? "lightgreen" : "white",
        }}
      >
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ type: "spring" }}
        >
          {dropItems[index]}
        </motion.div>
      </div>
    );
  };

  const handleDrop = (index, id) => {
    const itemToDrop = draggableItems.find((item) => item.id === id);
    if (!itemToDrop) return;

    setDraggableItems((prev) => prev.filter((item) => item.id !== id));
    setDropItems((prev) => {
      const newDropItems = [...prev];
      newDropItems[index] = itemToDrop.component;
      return newDropItems;
    });
  };

  return (
    <div className="centered h-[100vh]">
      <DndProvider backend={Backend}>
        <div className="flex flex-row">
          <div className="grid gap-4 grid-cols-2 overflow-y-auto mr-10">
            {draggableItems.map((item) => (
              <div key={item.id} className="drag-container-item">
                <DraggableItem id={item.id} component={item.component} />
              </div>
            ))}
          </div>
          <div className={"grid gap-4 grid-cols-" + gridRowColSize}>
            {dropItems.map((_, index) => (
              <div key={index} className="">
                <DropArea index={index} />
              </div>
            ))}
          </div>
        </div>
      </DndProvider>
    </div>
  );
};

export default Grid;
