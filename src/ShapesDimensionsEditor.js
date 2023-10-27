import React, { useEffect, useState, useCallback } from 'react';
import shapeDimensions from './shapeDimensions.json';
import shapeDimensionValidationRules from './shapeDimensionValidationRules.json';
import { createMinValueValidator, createMaxValueValidator } from './Validators';
import './shapesDimensions.css';
import './ShapeDimensionsEditor.css';

function ShapesDimensionsEditor({ selectedShape, dimensions, setDimensions }) {

    const handleDimensionChange = useCallback((key, value) => {
        setDimensions({
            ...dimensions,
            [key]: value,
        });
    }, [dimensions, setDimensions]);

    const dimensionLabels = getDimensionLabels(selectedShape);
    const validators = getValidators(selectedShape, dimensionLabels);

    useEffect(() => {
      if (Object.keys(dimensions).length > 0) {
         // Reset all dimension values to trigger re-validation
          setDimensions(
              Object.keys(dimensions).reduce((obj, key) => {
                  obj[key] = '';
                  return obj;
              }, {})
          );
      }
  }, [selectedShape, setDimensions]);

  return (
    <DimensionsEditor 
      title={`${selectedShape} Dimensions`} 
      handleDimensionChange={handleDimensionChange} 
      dimensionLabels={dimensionLabels} 
      validators={validators} 
      dimensions={dimensions} 
      key={selectedShape}   
    />
  );
}

const DimensionInput = ({ label, value, onChange, onBlur, ...props }) => {
  const [errorMessage, setErrorMessage] = useState('')
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const [isValid, message] = onBlur(value);
    setHasError(!isValid);
    setErrorMessage(isValid ? '' : message);
  }, [value, onBlur]);

    return (
        <div className={`dimension-input ${hasError ? 'has-error' : ''}`} style={{ position: 'relative' }}>
            <label>{label}: </label>
            <input 
                value={value} 
                onChange={onChange}
                onBlur={(event) => {
                    const [isValid, message] = onBlur(event.target.value);
                    setHasError(!isValid);
                    setErrorMessage(isValid ? '' : message);
                }}
                {...props} 
            />
            {errorMessage && 
                <div className="error-group">
                  <div className="error-mark">X</div>
                  <div className="error-message">{errorMessage}</div>
                </div>
            }
        </div>
    );
}

const getDimensionLabels = shapeName => {
    if (shapeName in shapeDimensions) {
        return shapeDimensions[shapeName];
    } else {
        return null; // Handle the case where the shape is not found
    }
}

const DimensionsEditor = ({ title, handleDimensionChange, dimensionLabels, validators, dimensions }) => {
    return (
        <div>
            <h2>{title}</h2>
            {dimensionLabels.map((label) => {
                return (
                    <DimensionInput
                        key={label}
                        label={label}
                        value={dimensions[label] || ''}
                        onChange={(event) => handleDimensionChange(label, event.target.value)}
                        onBlur={validators[label]}
                        style={{ maxWidth: '200px' }}
                    />
                );
            })}
        </div>
    );
};

function getValidators(selectedShape, dimensionLabels) {
    let validators = {};
    dimensionLabels.forEach((dim) => {
        validators[dim] = (value) => {
            for (let rule of shapeDimensionValidationRules[selectedShape]?.[dim] ?? []) {
                switch (rule.type) {
                    case 'minValue':
                        {
                            const [isValid, errorMessage] = createMinValueValidator(rule.value)(value);
                            if (!isValid) return [isValid, errorMessage];
                        }
                        break;
                    case 'maxValue':
                        {
                            const [isValid, errorMessage] = createMaxValueValidator(rule.value)(value);
                            if (!isValid) return [isValid, errorMessage];
                        }
                        break;
                    // Add all the cases needed
                    case 'greaterThan':
                    case 'lessThan':
                    default:
                        break;
                }
            }
            return [true, ''];
        }
    });
    return validators;
}

export default ShapesDimensionsEditor;