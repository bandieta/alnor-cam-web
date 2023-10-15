// "QDa": ["a", "b", "L"],
// "QBa": ["a", "b", "e", "f", "r"],
// "QBNa": ["a", "b", "e", "f", "r", "alfa"],
// "QPR6a": ["a", "b", "c", "d", "L", "h", "m"],
// "PR1a": ["a", "b", "d", "L", "h", "m"],
// "PR7a": ["a", "b", "d", "L", "e", "f", "h", "m"],
// "QPR2a": ["a", "b", "c", "d", "L", "h", "m", "e", "f"],
// "QBRa": ["a", "d", "b", "e", "f", "r", "alfa"],
// "QBR1a": ["a", "d", "c", "b", "e", "f", "r", "g", "alfa"],
// "QBFRa": ["a", "b", "d", "e", "f", "r"],
// "QBFa": ["a", "b", "e", "f", "r"],
// "QESa": ["a", "b", "e"],
// "TR1a": ["a", "b", "d", "w", "L", "e", "f", "l3"],
// "TR2a": ["a", "b", "d", "L", "l3", "e", "f"],
// "TRa": ["a", "b", "d", "h", "L", "q", "r", "i", "p"],
// "QPR3a": ["a", "b", "e", "L", "m", "h"],
// "QPR4a": ["a", "b", "d", "e", "L", "m", "h"],
// "TR6a": ["a", "e", "f", "L", "g"],
// "CZ1a": ["a", "b", "d", "w", "L", "d1", "w1", "e1", "f1", "e", "f", "l3", "l4"],
// "CZ2a": ["a", "b", "d", "L", "d1", "e1", "f1", "e", "f", "l3", "l4"],
// "TR3a": ["a", "b", "c", "d", "m", "k", "i", "j", "g", "f"],
// "TR4a": ["a", "b", "c", "d", "L", "g", "i", "j"],
// "TR5a": ["a", "b", "c", "d", "e", "L", "h", "g", "i", "j", "k"],
// "QD1a": ["a", "b", "L", "alfa", "e", "f"],
// "QD2a": ["a", "b", "L", "e", "f"],
// "TR7a": ["a", "b", "d", "h", "e", "r", "q", "i"]
// "TR8a": ["a", "b", "c", "d", "w", "g", "l", "l3", "m", "n", "e", "f", "i=j"],
// "TR9a": ["a", "b", "c", "d", "d1", "l", "l3", "m", "n", "e", "f", "i", "j"],
 
import React from 'react';
import { useState } from 'react';

function ShapesDimensionsEditor({selectedShape}) {

  const initialQDa = {
    a: 10,
    b: 20,
    L: 30,
  };

  const [dimensions, setDimensions] = useState(initialQDa);
  const handleDimensionChange = (key, value) => {
    setDimensions({
      ...dimensions,
      [key]: value,
    });
  };



  const renderContent = () => {
    switch (selectedShape) {
      case 'QDa':
        return <QDaDimensionsEditor dimensions={dimensions} handleDimensionChange={handleDimensionChange}/>;



      default:
        return <div>Default Option {dimensions.r} </div>;
    }
  };

  return (
    <div>
      {renderContent()}
    </div>
  );
}

function DimensionInput({ label, value, onChange }) {
  return (
    <div>
      <label>{label}:</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function DimensionsEditor({ title, dimensions, handleDimensionChange, dimensionLabels }) {
  return (
    <div>
      <h2>{title}</h2>
      {dimensionLabels.map((label) => (
        <DimensionInput
          key={label}
          label={label}
          value={dimensions[label]}
          onChange={(value) => handleDimensionChange(label, value)}
        />
      ))}
    </div>
  );
}



function QDaDimensionsEditor({ dimensions, handleDimensionChange }) {
  const dimensionLabels = ['a', 'b', 'L'];
    return ( <DimensionsEditor title="QDa Dimensions" dimensions={dimensions} handleDimensionChange={handleDimensionChange} dimensionLabels={dimensionLabels} />
  );
}

function QBaDimensionsEditor({ dimensions, handleDimensionChange }) {
  const dimensionLabels = ["a", "b", "e", "f", "r"];
    return ( <DimensionsEditor title="QBa Dimensions" dimensions={dimensions} handleDimensionChange={handleDimensionChange} dimensionLabels={dimensionLabels} />
  );
}





export default ShapesDimensionsEditor;


