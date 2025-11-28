const cutFirst = (str) => str.slice(2);
const cutLast = (str) => str.slice(0, str.length - 2);
const cutFirstLast = (str) => cutFirst(str) + cutLast(str);
const keepFirst = (str) => str.slice(0, 2);
const keepLast = (str) => str.slice(str.length - 2);
const keepFirstLast = (str) => {
  if (str.length <= 3) {
    return str;
  }
  return keepFirst(str) + keepLast(str);
};
