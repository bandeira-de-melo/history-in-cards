export function invalidInputError(details: string[]){
  return {
    name: 'InvalidDataError',
    message: 'Invalid data',
    details,
  };
}