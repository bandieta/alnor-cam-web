export const validateField = (fieldName, value) => {
    const floatValue = parseFloat(value);
  
    if (isNaN(floatValue)) {
      return { isValid: false, message: 'Cannot be empty' };
    }
  
    return { isValid: true, message: '' };
  };
  
  export const validateAndSetFields = (dimensions) => {
    const valueA = dimensions['a'];
    const valueB = dimensions['b'];
    const valueL = dimensions['L'];
  
    const validation = {
      a: validateField('a', valueA),
      b: validateField('b', valueB),
      L: validateField('L', valueL),
    };
  
    // if (valueA <= valueB) {
    //   validation.a = { isValid: false, message: 'Field A must be higher than Field B.' };
    // } else 
    
    if (valueA < 100) {
      validation.a = { isValid: false, message: 'Field A must be 100 or higher.' };
    }
  
    if (valueB < 100 ) {
      validation.b = { isValid: false, message: 'Field B must be 100 or higher.' };
    }
  
    if (valueL < 100) {
      validation.L = { isValid: false, message: 'Field L must be 100 or higher.' };
    }
  
    return validation;
  };
  