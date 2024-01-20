// ParentComponent.jsx
import React, { useState, useEffect } from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Balchypros from './Balchypros';
import Chemoprops from './Chemoprops';
import dataJson from './shapeProps.json';
import './ShapePropsComponent.css';

const ShapePropsComponent = ({selectedShape, isChemo, setIsChemo, systemKsztaltek, setSystemKsztaltek}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedValues, setSelectedValues] = useState({
    balchypros: {
      GruboscBlacha: "",
      Material: "",
      PlaszczZew: "",
      GruboscIzolacji: "",
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

  const customStyle = {
    padding: '0.2rem 0.2rem', // Adjust padding to make it smaller
    fontSize: '0.8rem',       // Adjust font size to make it smaller
    // Add any other styles to customize the appearance
  };

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
            <ToggleButtonGroup
              type="radio"
              name="systems"
              value={systemKsztaltek}
              onChange={(value) => setSystemKsztaltek(value)}
              style={customStyle}
            >
              <ToggleButton
                className="custom-sm-toggle"
                style={systemKsztaltek === "Prostokatne" ? { ...customStyle, backgroundColor: 'lightgray' } : {...customStyle}}
                value="Prostokatne"
                variant="secondary"
                onClick={() => setSystemKsztaltek("Prostokatne")}
              >
                Prostokatne
              </ToggleButton>
              <ToggleButton
                className="custom-sm-toggle"
                style={systemKsztaltek === "Prostokatne Izolowane" ? {...customStyle, backgroundColor: 'lightgray'} : {...customStyle}}
                value="Prostokatne Izolowane"
                variant="secondary"
                onClick={() => setSystemKsztaltek("Prostokatne Izolowane")}
              >
                Prostokatne Izolowane
              </ToggleButton>
              <ToggleButton
                className="custom-sm-toggle"
                style={systemKsztaltek === "Uzytkownika" ? { ...customStyle, backgroundColor: 'lightgray' } : {...customStyle}}
                value="Uzytkownika"
                variant="secondary"
                onClick={() => setSystemKsztaltek("Uzytkownika")}
              >
                Uzytkownika
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          {/* <div>{data.blachy}</div> */}

          { systemKsztaltek === "Prostokatne" ?
            (
              <div>
                <ToggleButtonGroup type="radio" name="options" defaultValue={isChemo ? 'chemo' : 'blachy'}>
                  <ToggleButton size="sm" variant="secondary" style={!isChemo ? { ...customStyle, backgroundColor: 'lightgray' } : {...customStyle}} value="blachy" onClick={() => setIsChemo(false)}>Balchypros</ToggleButton>
                  <ToggleButton size="sm" variant="secondary" style={isChemo ? { ...customStyle, backgroundColor: 'lightgray' } : {...customStyle}} value="chemo" onClick={() => setIsChemo(true)}>Chemoprops</ToggleButton>
                </ToggleButtonGroup>
              </div>
            ) : (<></>) 
          }

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
                izolowane={systemKsztaltek === "Prostokatne Izolowane"}
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
