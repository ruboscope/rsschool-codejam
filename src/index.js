function sumOfOther(array) {
  const newArray = array.map((value, index) => array.reduce((acc, current) => acc + current) - value);
  return newArray;
}
