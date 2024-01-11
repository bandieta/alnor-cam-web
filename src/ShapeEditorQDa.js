import React, { useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';

const ShapeEditorQDa = ({dimensions, setDimensions}) => {

  const [isValid_a, setValid_a] = useState(true);
  const [validationMessage_a, setValidationMessage_a] = useState('');

  const [isValid_b, setValid_b] = useState(true);
  const [validationMessage_b, setValidationMessage_b] = useState('');

  const [isValid_L, setValid_L] = useState(true);
  const [validationMessage_L, setValidationMessage_L] = useState('');

  const handleFieldAChange = (event) => {
    const value = parseFloat(event.target.value);

    if (!isNaN(value))
    {
      setDimensions({ ...dimensions, ['a']: value});
      validateAndSetFields();
    }
    else 
    {
      setDimensions({ ...dimensions, ['a']: ''});

      setValid_a(false);
      setValidationMessage_a('Cannot be empty');
    }
  };

  const handleFieldBChange = (event) => {
    const value = parseFloat(event.target.value);

    if (!isNaN(value))
    {
      setDimensions({ ...dimensions, ['b']: value});
      validateAndSetFields();
    }
    else
    {
      setDimensions({ ...dimensions, ['b']: ''});

      setValid_b(false);
      setValidationMessage_b('Cannot be empty');
    }
  };

  const handleFieldLChange = (event) => {
    const value = parseFloat(event.target.value);

    if (!isNaN(value))
    {
      setDimensions({ ...dimensions, ['L']: value});

      validateAndSetFields();
    }
    else
    {
      setDimensions({ ...dimensions, ['L']: ''});

      setValid_L(false);
      setValidationMessage_L('Cannot be empty');
    }
  };

  const validateAndSetFields = () => {

    const valueA = dimensions['a'];
    const valueB = dimensions['b'];
    const valueL = dimensions['L'];
    
    setValid_a(true);
    setValidationMessage_a('');
    setValid_b(true);
    setValidationMessage_b('');
    setValid_L(true);
    setValidationMessage_L('');


    if (valueA <= valueB) {
      setValid_a(false);
      setValidationMessage_a('Field A must be higher than Field B.');
    } else if (valueA <= 200 || valueA >= 1000) {
      setValid_a(false);
      setValidationMessage_a('Field A must be between 200 and 1000.');
    } else if (valueB <= 400 || valueB >= 1500) {
      setValid_b(false);
      setValidationMessage_b('Field B must be between 400 and 1500.');
    }

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Additional logic to handle form submission if needed
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="fieldA">
        <FloatingLabel label='a'>
        <Form.Control
          type="text"
          value={dimensions['a']}
          placeholder='a'
          onChange={handleFieldAChange}
          isInvalid={!isValid_a}
        />
        <Form.Control.Feedback type="invalid">{validationMessage_a}</Form.Control.Feedback>
        </FloatingLabel>

      </Form.Group>

      <Form.Group controlId="fieldB">
        <FloatingLabel label='b'>
        <Form.Control
          type="text"
          value={dimensions['b']}
          placeholder='b'
          onChange={handleFieldBChange}
          isInvalid={!isValid_b}
        />
        <Form.Control.Feedback type="invalid">{validationMessage_b}</Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>


      <FloatingLabel label="L">
        <Form.Control 
           type="text" 
           placeholder='L'
           value={dimensions['L']}
           onChange={handleFieldLChange}
           isInvalid={!isValid_L}
        />
        <Form.Control.Feedback type="invalid">{validationMessage_L}</Form.Control.Feedback>
      </FloatingLabel>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ShapeEditorQDa;
