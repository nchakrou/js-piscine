function throttle(fn, delay) {
  let timer;
  return function (...arg) {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...arg);
        timer = null;
      }, delay);
    }
  };
}

function opThrottle(fn, delay, leading = false, trailing = false) {
  let led = false
let timer =null
  return function (...arg) {
    if (leading) {
      if (!led) {
        fn(...arg);
        led = true
        setTimeout(() => { led = false; }, delay);
      }
    } else if (trailing) {
      if (timer) return;
      timer =setTimeout(() => {
        fn(...arg);
        timer = null;
        led = false;
      }, delay);
    }
  };
}
