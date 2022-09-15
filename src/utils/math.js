/* eslint-disable no-plusplus */
export function average(arr) {
  let suma = 0;
  let cont = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > 0) {
      cont += 1;
      suma += arr[index];
    }
  }
  return cont > 0 ? suma / cont : 0;
}
