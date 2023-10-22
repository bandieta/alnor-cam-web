import React, { useEffect, useState } from 'react';

function withValidation(Component, validator) {
  return (props) => {
    const [valid, setValid] = useState(true);
    const [message, setMessage] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    const [tooltipTimeout, setTooltipTimeout] = useState(null);

    useEffect(() => {
      const [isValid, validMessage] = validator(props.value);
      setValid(isValid);
      setMessage(validMessage);
    }, [props.value]);

    const handleMouseEnter = () => {
      setIsHovered(true);
      clearTimeout(tooltipTimeout);
    };

    const handleMouseLeave = () => {
      setTooltipTimeout(
        setTimeout(() => {
          setIsHovered(false);
        }, 500) // Adjust this delay as needed
      );
    };

    return (
      <div style={{ position: 'relative' }}>
        <Component
          {...props}
          className={valid ? "" : "error"}
          onChange={(event) => {
            if (props.onChange) props.onChange(event);
          }}
          onFocus={() => setValid(true)}
        />
        {!valid && (
          <div className="error-icon">
            <span
              className="error-icon-content"
              role="img"
              aria-label="Error"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              ❌
            </span>
            {isHovered && (
              <div className="error-tooltip">
                {message}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };
}

export default withValidation;
