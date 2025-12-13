function interpolation({ step, start, end, callback, duration }) {
  const amountToAdd = (end - start) / step;
  const delay = duration / step;

  let count = 0;
  let currentPoint = start;

  const timer = setInterval(() => {
    if (count < step) {
      const distance = count / step;
      currentPoint = start + (count * amountToAdd)
      callback([distance, currentPoint]);
      count++;
    } else {
      clearInterval(timer);
    }
  }, delay);
}
