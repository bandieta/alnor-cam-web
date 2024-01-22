import React from 'react';
import { Form } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';

const Chemoprops = ({ data, selectedValues, onSelectionChange }) => {
  return (
    <div>
      <Form>
        <Form.Group controlId="GruboscChemo">
          <FloatingLabel label='Grubosc Chemo'>
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
          </FloatingLabel>
        </Form.Group>

        <Form.Group controlId="MaterialChemo">
          <FloatingLabel label='Material Chemo'>
          <Form.Control
            as="select"
            value={selectedValues.MaterialChemo}
            onChange={(e) => onSelectionChange('MaterialChemo', e.target.value)}
          >
            {data.MaterialChemo.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </Form.Control>
          </FloatingLabel>
        </Form.Group>

        <Form.Group controlId="WykonanieChemo">
          <FloatingLabel label='Wykonanie Chemo'>
          <Form.Control
            as="select"
            value={selectedValues.WykonanieChemo}
            onChange={(e) => onSelectionChange('WykonanieChemo', e.target.value)}
          >
            {data.WykonanieChemo.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </Form.Control>
          </FloatingLabel>
        </Form.Group>


      </Form>
    </div>
  );
}

export default Chemoprops;
