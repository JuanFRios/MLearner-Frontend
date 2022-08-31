/* eslint-disable no-plusplus */
export function average(arr) {
  let suma = 0;
  for (let index = 0; index < arr.length; index++) {
    suma += arr[index];
  }
  return suma / arr.length;
}
