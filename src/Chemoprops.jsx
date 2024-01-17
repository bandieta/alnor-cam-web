// Chemoprops.jsx
import React from 'react';
import { Form } from 'react-bootstrap';

const Chemoprops = ({ data, selectedValues, onSelectionChange }) => {
  return (
    <div>
      <h2>Chemoprops Component</h2>
      <Form>
        <Form.Group controlId="GruboscChemo">
          <Form.Label>Grubosc Chemo</Form.Label>
          <Form.Control
            as="select"
            value={selectedValues.GruboscChemo}
            onChange={(e) => onSelectionChange('GruboscChemo', e.target.value)}
          >
            {data.GruboscChemo.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        {/* Add other Form.Group elements for the remaining fields */}
        {/* ... */}
      </Form>
    </div>
  );
}

export default Chemoprops;
