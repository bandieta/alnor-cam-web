import React, { useEffect, useState } from 'react';

function withValidation(Component, validator) {
  return (props) => {
    const [valid, setValid] = useState(true);
    const [message, setMessage] = useState("");

    useEffect(() => {
      const [isValid, validMessage] = validator(props.value);
      setValid(isValid);
      setMessage(validMessage);
    }, [props.value]);

    return (
      <div>
        <Component
          {...props}
          className={valid ? "" : "error"}
          onChange={(event) => {
            if(props.onChange) props.onChange(event);
          }}
          onFocus={() => setValid(true)}
        />
        {!valid && (
          <div className="error-message">
            {message}
          </div>
        )}
      </div>
    );
  };
}

export default withValidation;