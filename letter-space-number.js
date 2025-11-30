function letterSpaceNumber(str) {
  const regexp = /[a-zA-Z] \d(?![0-9a-zA-Z])/g;
  return str.match(regexp);
}
