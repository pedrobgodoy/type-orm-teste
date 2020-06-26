function getErrorByConstraint(constraint: string): string {
  switch (constraint) {
    case 'isEmail':
      return 'invalidEmail';
    default:
      return constraint;
  }
}

export function handleValidationError(errors: object): object {
  let objReturn = [];
  for (let i = 0; i < Object.keys(errors).length; i++) {
    const error = errors[i];
    const { property } = error;
    const constraint = Object.keys(error.constraints)[0];
    const result = { path: property, error: getErrorByConstraint(constraint) };
    objReturn = [...objReturn, result];
  }
  return objReturn;
}
