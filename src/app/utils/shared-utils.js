export function sortAlphabetically(arr, order) {
  arr.sort((a, b) => a.name.localeCompare(b.name));

  if (order) {
    arr.reverse();
  }

  return arr;
}

export function sortType(arr, order) {
  arr.sort((a, b) => a.type.localeCompare(b.type));

  if (order) {
    arr.reverse();
  }

  return arr;
}
