import { motion } from "framer-motion";
import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

const Grid = (props) => {
  const { title, gridSize, gridData, tileData, feedGrid } = props.config;
  const [gridRowColSize, setGridRowColSize] = useState(gridSize);
  const [initDragableItemListSize, setInitDragableItemListSize] = useState(
    tileData.length
  );
  const ItemType = "ITEM";
  const [draggableItems, setDraggableItems] = useState(tileData);
  const [dropItems, setDropItems] = useState(gridData);

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const Backend = isMobile ? TouchBackend : HTML5Backend;

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
        className="tile"
        ref={drop}
        style={{
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
  const style = 'flex flex-col bg-black rounded-xl shadow-xl h-fit px-5 pb-5';
  const feedStyle = 'flex flex-col bg-transparent rounded-xl h-fit px-5 pb-5';
  const calculateTitleGridWidth = () => {
    if (initDragableItemListSize < gridRowColSize) return 1;
    return Math.ceil(initDragableItemListSize / gridRowColSize);
  };

  const getComputedStyle = () => {
    if (isMobile) {
      return {
        gridTemplateRows: `repeat(${calculateTitleGridWidth()}, minmax(0, 1fr))`,
        gridTemplateColumns: `repeat(${gridRowColSize}, minmax(0, 1fr))`,
      };
    }
    return {
      gridTemplateColumns: `repeat(${calculateTitleGridWidth()}, minmax(0, 1fr))`,
      gridTemplateRows: `repeat(${gridRowColSize}, minmax(0, 1fr))`,
    };
  };

  return (
    <div className={feedGrid ? feedStyle : style}>
      <span className="font-bold text-white my-3">🎨 {title}</span>
      {gridRowColSize > 0 && (
        <DndProvider backend={Backend}>
          <div className="flex flex-col-reverse md:flex-row">
            <div
              className="grid gap-3 overflow-y-auto mt-10 md:mr-10 md:mt-0"
              style={getComputedStyle()}
            >
              {draggableItems.map((item) => (
                <div key={item.id} className="drag-container-item">
                  <DraggableItem id={item.id} component={item.component} />
                </div>
              ))}
            </div>
            <div
              className="grid gap-3"
              style={{
                gridTemplateColumns: `repeat(${gridRowColSize}, minmax(0, 1fr))`,
              }}
            >
              {dropItems.map((_, index) => (
                <div key={index} className="">
                  <DropArea index={index} />
                </div>
              ))}
            </div>
          </div>
        </DndProvider>
      )}
    </div>
  );
};

export default Grid;
