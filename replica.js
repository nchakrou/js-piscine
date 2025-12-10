function replica(tar, ...obj) {
  for (let key of obj) {
    for (let k in key) {
      if (
        typeof tar[k] == "object" &&
        !Array.isArray(tar[k]) &&
        typeof key[k] == "object" &&
        !Array.isArray(key[k])
      ) {
        replica(tar[k], key[k]);
      } else {
        tar[k] = key[k];
      }
    }
  }
  return tar;
}
