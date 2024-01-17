import React, { useEffect, useState } from 'react';
import data from './shapesList.json';
import './ShapeList.css';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Stack from 'react-bootstrap/Stack';

function ShapeList({selectedShape, setSelectedShape}) {
  const [list, setList] = useState([]);

  useEffect(() => {
    // Use the data imported from the JSON file
    setList(data);
  }, []);

  return (
    <ButtonGroup  vertical>

        {list.map((shape, index) => (
            <ShapeElement 
              shape={shape} 
              symbol={shape.symbol} 
              setSelectedShape={setSelectedShape} 
              selectedShape={selectedShape}
            /> 
        ))}

    </ButtonGroup >
  );
}

function ShapeElement({shape, symbol, setSelectedShape, selectedShape}) {
  return (
        <ToggleButton 
          onClick={() => setSelectedShape(shape.symbol)}
          checked={symbol === selectedShape}
          type="radio"
          variant='outline-light'
        >

          <Stack className="d-flex justify-content-between align-items-start">
            <div className="fw-bold"> {symbol} </div>
            <div className="ms-2 ms-auto"> {shape.name} </div>
          </Stack>


        </ToggleButton>
  );
} 

export default ShapeList;
