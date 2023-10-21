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
  