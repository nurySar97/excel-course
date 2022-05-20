// Pure function
export function capitalize(string = '') {
  if (typeof string !== 'string') return '';
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

export const getArrayByCount = (number = 0, fill = 1) => new Array(number).fill(fill);
