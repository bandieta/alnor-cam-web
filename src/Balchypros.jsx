// Balchypros.jsx
import React from 'react';
import { Form } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';

const Balchypros = ({ data, selectedValues, onSelectionChange }) => {
  return (
    <div>
      <h2>Balchypros Component</h2>
      <Form>
        <Form.Group controlId="GruboscBlacha">
          <FloatingLabel label='Grubosc Blacha'>
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
          </FloatingLabel>
        </Form.Group>


        <Form.Group controlId="Material">
          <FloatingLabel label='Material'>
          <Form.Control
            as="select"
            value={selectedValues.Material}
            onChange={(e) => onSelectionChange('Material', e.target.value)}
          >
            {data.Material.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </Form.Control>
          </FloatingLabel>
        </Form.Group>

        <Form.Group controlId="Wykonanie">
          <FloatingLabel label='Wykonanie'>
          <Form.Control
            as="select"
            value={selectedValues.Wykonanie}
            onChange={(e) => onSelectionChange('Wykonanie', e.target.value)}
          >
            {data.Wykonanie.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </Form.Control>
          </FloatingLabel>
        </Form.Group>

        <Form.Group controlId="Kl_szczel">
          <FloatingLabel label='Klucz szczelności'>
          <Form.Control
            as="select"
            value={selectedValues.Kl_szczel}
            onChange={(e) => onSelectionChange('Kl_szczel', e.target.value)}
          >
            {data.Kl_szczel.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </Form.Control>
          </FloatingLabel>
        </Form.Group>


        <Form.Group controlId="L_wzmoc">
          <FloatingLabel label='Liczba wzmocnień'>
          <Form.Control
            as="select"
            value={selectedValues.L_wzmoc}
            onChange={(e) => onSelectionChange('L_wzmoc', e.target.value)}
          >
            {data.L_wzmoc.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </Form.Control>
          </FloatingLabel>
        </Form.Group>

        <Form.Group controlId="RamkiWL">
          <FloatingLabel label='Ramki WL'>
          <Form.Control
            as="select"
            value={selectedValues.RamkiWL}
            onChange={(e) => onSelectionChange('RamkiWL', e.target.value)}
          >
            {data.RamkiWL.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </Form.Control>
          </FloatingLabel>
        </Form.Group>

        <Form.Group controlId="RamkiWYL">
          <FloatingLabel label='Ramki WYL'>
          <Form.Control
            as="select"
            value={selectedValues.RamkiWYL}
            onChange={(e) => onSelectionChange('RamkiWYL', e.target.value)}
          >
            {data.RamkiWYL.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </Form.Control>
          </FloatingLabel>
        </Form.Group>

        <Form.Group controlId="RamkiOd">
          <FloatingLabel label='Ramki Od'>
          <Form.Control
            as="select"
            value={selectedValues.RamkiOd}
            onChange={(e) => onSelectionChange('RamkiOd', e.target.value)}
          >
            {data.RamkiOd.map((value, index) => (
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

export default Balchypros;
