import React, { useEffect, useState, useCallback } from 'react';
import shapeDimensions from './shapeDimensions.json';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ShapeEditorQDa from './ShapeEditorQDa'

function ShapesDimensionsEditor({ selectedShape, dimensions, setDimensions }) {

    const handleDimensionChange = useCallback((key, value) => {
        setDimensions({
            ...dimensions,
            [key]: value,
        });
    }, [dimensions, setDimensions]);

    const dimensionLabels = getDimensionLabels(selectedShape);

    switch (selectedShape) {
        case 'QDa':
          return <ShapeEditorQDa
                    dimensions={dimensions} 
                    setDimensions={setDimensions} 
                 />;
        case 'B':
          return <></>;
        case 'C':
          return <></>;
        default:
          return <DimensionsEditor 
                    title={`${selectedShape} Dimensions`} 
                    handleDimensionChange={handleDimensionChange} 
                    dimensionLabels={dimensionLabels} 
                    dimensions={dimensions} 
                    key={selectedShape}   
                />
        ; // or a default component or an error message
      }



}

const DimensionInput = ({ label, value, onChange, ...props }) => {
    return (
      <>
      <FloatingLabel
        label={label}
      >
        <Form.Control type="input" 
           placeholder={label}
           value={value} 
           onChange={onChange}
           {...props} 
        />
      </FloatingLabel>
        
      </>
    );
  }

const getDimensionLabels = shapeName => {
    if (shapeName in shapeDimensions) {
        return shapeDimensions[shapeName];
    } else {
        return null; // Handle the case where the shape is not found
    }
}

const DimensionsEditor = ({ title, handleDimensionChange, dimensionLabels, dimensions }) => {
    return (
        <>
            <h3>{title}</h3>
            {dimensionLabels.map((label) => {
                return (
                    <DimensionInput
                        key={label}
                        label={label}
                        value={dimensions[label] || ''}
                        onChange={(event) => handleDimensionChange(label, event.target.value)}
                    />
                );
            })}
        </>
    );
};


export default ShapesDimensionsEditor;