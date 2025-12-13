function throttle(fn, delay) {
  let timer;
  return function (...arg) {
    if (!timer) {
      fn(...arg);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
}

function opThrottle(fn, delay, obj={}) {
  let timer;

  return function (...args) {
    if (!timer) {
      if (obj.leading) fn(...args);

      timer = setTimeout(() => {
        timer = null;
        if (!obj.leading) fn(...args);
      }, delay);
    }
  };
}
