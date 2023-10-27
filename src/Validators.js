export function createMinValueValidator(minimum) {
    return (value) => {
      if (!value) {
        return [true, ""];
      } else if (value > minimum) {
        return [true, ""];
      } else {
        return [false, `Value must be larger than ${minimum}`];
      }
    };
  }

  export function createMaxValueValidator(maximum) {
    return (value) => {
      if (!value) {
        return [true, ""];
      } else if (value < maximum) {
        return [true, ""];
      } else {
        return [false, `Value must be smaller than ${maximum}`];
      }
    };
  }

  export const createGreaterThanValidator = (dimensions, field) => value => {
    return (Number(value) > Number(dimensions[field]) ? null : `Value should be greater than ${field}`);
  };

  export const createLessThanValidator = (dimensions, field) => value => {
    return (Number(value) < Number(dimensions[field]) ? null : `Value should be greater than ${field}`);
  };


  