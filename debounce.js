function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function opDebounce(fn, wait, leading = false) {
  let timer;

  return (...args) => {
    const isFirstCall = !timer;
    clearTimeout(timer);

    if (leading && isFirstCall) {
      fn(...args);
    }
    timer = setTimeout(() => {
      if (!leading) {
        fn(...args);
      }
      timer = null;
    }, wait);
  };
}
