import React, { useEffect, useState } from 'react';
import data from './ShapesList.json'; // Adjust the path as needed
import './ShapeList.css';

function ShapeList({selectedShape, setSelectedShape}) {
  const [list, setList] = useState([]);

  useEffect(() => {
    // Use the data imported from the JSON file
    setList(data);
  }, []);

  return (
    <div>
      <h1>Shape List</h1>
      <ul className="shape-list">
        {list.map((shape, index) => (
          <li key={index}>
             <button className="shape-button" onClick={() => setSelectedShape(shape.symbol)}>
              <strong>
                {shape.symbol === selectedShape ? '['+shape.symbol+']' : shape.symbol}
                </strong> {shape.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShapeList;
