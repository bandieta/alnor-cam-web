import React from 'react';
import "./shapesDimensions.css"
import shapeDimensions from './shapeDimensions.json'; // Import the JSON file
import { useState } from 'react';

function ShapesDimensionsEditor({selectedShape, dimensions, setDimensions, rerenderKey}) {
  const dimensionLabels = getDimensionLabels(selectedShape);

  const handleDimensionChange = (key, value) => {
    setDimensions({
      ...dimensions,
      [key]: value,
    });
  };

  return (
       <DimensionsEditor key={rerenderKey} title={`${selectedShape} Dimensions`} dimensions={dimensions} handleDimensionChange={handleDimensionChange} dimensionLabels={dimensionLabels} />
  );
}

function DimensionInput({ label, value, onChange }) {
  return (
    <div className="dimension-input">
      <label>{label}: </label>
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

function getDimensionLabels(shapeName) {
  if (shapeName in shapeDimensions) {
    return shapeDimensions[shapeName];
  } else {
    return null; // Handle the case where the shape is not found
  }
}



export default ShapesDimensionsEditor;


