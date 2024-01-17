// ParentComponent.jsx
import React, { useState, useEffect } from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Balchypros from './Balchypros';
import Chemoprops from './Chemoprops';
import dataJson from './shapeProps.json';

const ShapePropsComponent = ({isChemo, setIsChemo}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedValues, setSelectedValues] = useState({
    balchypros: {
      GruboscBlacha: "",
      Material: "",
      Wykonanie: "",
      Kl_szczel: "",
      L_wzmoc: "",
      RamkiWL: "",
      RamkiWYL: "",
      RamkiOd: ""
    },
    chemoprops: {
      GruboscChemo: "",
      MaterialChemo: "",
      WykonanieChemo: ""
    }
  });

  useEffect(() => {
    // Use the data imported from the JSON file
    setData(dataJson);
  }, []);

  useEffect(() => {
    console.log('Selected Values:', selectedValues);
  }, [selectedValues]);

  const handleSelectionChange = (component, field, value) => {
    setSelectedValues(prevState => ({
      ...prevState,
      [component]: {
        ...prevState[component],
        [field]: value
      }
    }));
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {data ? (
        <>



          <div>
            <ToggleButtonGroup type="radio" name="options" defaultValue={isChemo ? 'chemo' : 'blachy'}>
              <ToggleButton value="blachy" onClick={() => setIsChemo(false)}>Balchypros</ToggleButton>
              <ToggleButton value="chemo" onClick={() => setIsChemo(true)}>Chemoprops</ToggleButton>
            </ToggleButtonGroup>
          </div>
          
          {isChemo ? (
              <Chemoprops
                data={data.chemo}
                selectedValues={selectedValues.chemoprops}
                onSelectionChange={handleSelectionChange.bind(null, 'chemoprops')}
              />
            ) : (
              <Balchypros
                data={data.blachy}
                selectedValues={selectedValues.balchypros}
                onSelectionChange={handleSelectionChange.bind(null, 'balchypros')}
              />
            )}

        </>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default ShapePropsComponent;
