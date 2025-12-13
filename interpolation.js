function interpolation({ step, start, end, fn, duration }) {
  const amountToAdd = (end - start) / step;
  const delay = duration / step;

  let count = 0;
  let currentPoint = start;

  const timer = setInterval(() => {
    if (count < step) {
      const distance = count / step;
      fn([distance, currentPoint]);
      currentPoint += amountToAdd;
      count++;
    } else {
      clearInterval(timer);
    }
  }, delay);
}
