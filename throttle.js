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

function opThrottle(fn, delay, leading = false) {
    let timer

    return function (...args) {

        if (!timer) {
            if (leading) fn(...args);

            timer = setTimeout(() => {
                timer = null;
                if (!leading) fn(...args);
            }, delay);
        }
    };
}
