// Balchypros.jsx
import React from 'react';
import { Form } from 'react-bootstrap';

const Balchypros = ({ data, selectedValues, onSelectionChange }) => {
  return (
    <div>
      <h2>Balchypros Component</h2>
      <Form>
        <Form.Group controlId="GruboscBlacha">
          <Form.Label>Grubosc Blacha</Form.Label>
          <Form.Control
            as="select"
            value={selectedValues.GruboscBlacha}
            onChange={(e) => onSelectionChange('GruboscBlacha', e.target.value)}
          >
            {data.GruboscBlacha.map((value, index) => (
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

export default Balchypros;
