function longWords(arr) {
  const isBelowThreshold = (currentValue) => currentValue.length >= 5;
  return arr.every(isBelowThreshold);
}
function oneLongWord(arr) {
 const isBelowThreshold = (currentValue) => currentValue.length >= 10;
  return arr.some(isBelowThreshold);
}
function noLongWords(arr) {
  const isBelowThreshold = (currentValue) => currentValue.length < 7;
  return arr.every(isBelowThreshold);
}
