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
    // Perform validation when dimensions change
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

  const renderTooltip = (message) => (
    <Tooltip id="tooltip">{message}</Tooltip>
  );

  return (
    <Form>
      <Form.Group as={Col} controlId="fieldA" className="mb-3">
        <Row>
          <Col xs={8}>
            <FloatingLabel label='a'>
              <Form.Control
                type="text"
                value={dimensions['a']}
                placeholder='a'
                onChange={(e) => handleFieldChange('a', e.target.value)}
                isInvalid={!validation.a.isValid}
              />
            </FloatingLabel>
          </Col>
          <Col xs={4} className="d-flex align-items-center">
            <OverlayTrigger placement="right" overlay={renderTooltip(validation.a.message)}>
              <div className="ms-2">
                <strong>!</strong>
              </div>
            </OverlayTrigger>
          </Col>
        </Row>
      </Form.Group>

      <Form.Group as={Col} controlId="fieldB" className="mb-3">
        <Row>
          <Col xs={8}>
            <FloatingLabel label='b'>
              <Form.Control
                type="text"
                value={dimensions['b']}
                placeholder='b'
                onChange={(e) => handleFieldChange('b', e.target.value)}
                isInvalid={!validation.b.isValid}
              />
            </FloatingLabel>
          </Col>
          <Col xs={4} className="d-flex align-items-center">
            <OverlayTrigger placement="right" overlay={renderTooltip(validation.b.message)}>
              <div className="ms-2">
                <strong>!</strong>
              </div>
            </OverlayTrigger>
          </Col>
        </Row>
      </Form.Group>

      <Form.Group as={Col} controlId="fieldL" className="mb-3">
        <Row>
          <Col xs={8}>
            <FloatingLabel label="L">
              <Form.Control
                type="text"
                value={dimensions['L']}
                placeholder='L'
                onChange={(e) => handleFieldChange('L', e.target.value)}
                isInvalid={!validation.L.isValid}
              />
            </FloatingLabel>
          </Col>
          <Col xs={4} className="d-flex align-items-center">
            <OverlayTrigger placement="right" overlay={renderTooltip(validation.L.message)}>
              <div className="ms-2">
                <strong>!</strong>
              </div>
            </OverlayTrigger>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
};

export default ShapeEditorQDa;
