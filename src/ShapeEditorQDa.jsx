import React, { useState, useEffect } from 'react';
import { Form, FloatingLabel, Col, OverlayTrigger, Tooltip, Row } from 'react-bootstrap';
import { validateField, validateAndSetFields } from './ShapeEditorQDaValidator';

const ShapeEditorQDa = ({ dimensions, setDimensions }) => {
  const [validation, setValidation] = useState({
    a: { isValid: true, message: '' },
    b: { isValid: true, message: '' },
    L: { isValid: true, message: '' },
  });

  useEffect(() => {
    const fieldsValidation = validateAndSetFields(dimensions);
    setValidation(fieldsValidation);
  }, [dimensions]);

  const handleFieldChange = (fieldName, value) => {
    const validationInfo = validateField(fieldName, value);
    setValidation((prevValidation) => ({
      ...prevValidation,
      [fieldName]: validationInfo,
    }));

    if (validationInfo.isValid) {
      setDimensions((prevDimensions) => ({
        ...prevDimensions,
        [fieldName]: parseFloat(value),
      }));
    } else {
      setDimensions((prevDimensions) => ({
        ...prevDimensions,
        [fieldName]: '',
      }));
    }
  };

  const renderTooltip = (props, field) => {
    if (validation[field].message) {
      return <Tooltip id={`tooltip-${field}`} {...props}>{validation[field].message}</Tooltip>;
    }
    return <></>;
  }

  return (
    <Form>
      {['a', 'b', 'L'].map(field => (
        <Form.Group as={Col} controlId={`field${field}`} >
                <OverlayTrigger 
                    placement="right" 
                    overlay={(props) => renderTooltip(props, field)}
                    trigger={validation[field].message ? ["hover","focus"] : []}
                >
                    <FloatingLabel label={field}>
                        <Form.Control
                        type="text"
                        value={dimensions[field]}
                        placeholder={field}
                        onChange={(e) => handleFieldChange(field, e.target.value)}
                        className={!validation[field].isValid ? 'is-invalid' : ''}
                        />
                    </FloatingLabel>
                </OverlayTrigger>
        </Form.Group>
      ))}
    </Form>
  );
};

export default ShapeEditorQDa;