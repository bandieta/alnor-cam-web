import React, { useEffect, useState } from 'react';
import data from './ShapesList.json';
import './ShapeList.css';

function ShapeList({selectedShape, setSelectedShape}) {
  const [list, setList] = useState([]);

  useEffect(() => {
    // Use the data imported from the JSON file
    setList(data);
  }, []);

  return (
    <div>

      <ul className="shape-list">
        {list.map((shape, index) => (
          <li key={index}>
            <ShapeElement 
              shape={shape} 
              symbol={shape.symbol} 
              setSelectedShape={setSelectedShape} 
              selectedShape={selectedShape}
            /> 
          </li>
        ))}
      </ul>
    </div>
  );
}

function ShapeElement({shape, symbol, setSelectedShape, selectedShape}) {
  return (
    <div className="shape-element">
        <button className="shape-button" onClick={() => setSelectedShape(shape.symbol)}>

          <strong>
              {symbol === selectedShape ? '['+symbol+']' : symbol}
          </strong> {shape.name}
        </button>
    </div>
  );
} 

export default ShapeList;
