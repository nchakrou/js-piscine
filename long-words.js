function longWords(arr) {
  const isBelowThreshold = (currentValue) => currentValue.length >= 5;
  return arr.every(isBelowThreshold);
}
function oneLongWord(arr) {
  return arr[arr.length - 1].length >= 10;
}
function noLongWords(arr) {
  const isBelowThreshold = (currentValue) => currentValue.length <= 7;
  return arr.every(isBelowThreshold);
}
