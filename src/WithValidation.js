import React, { useState } from 'react';

function withValidation(Component, validator) {
  return (props) => {
    const [valid, setValid] = useState(true);
    const [message, setMessage] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    const [tooltipTimeout, setTooltipTimeout] = useState(null);

    const handleBlur = (e) => {
        const [isValid, validMessage] = validator(e.target.value);
        setValid(isValid);
        setMessage(validMessage);
    };

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
          onBlur={handleBlur}
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