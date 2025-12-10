function replica(tar, ...obj) {
  for (let key of obj) {
    for (let k in key) {
      if (typeof tar[k]== "object" &&typeof key[k] == "object" && !Array.isArray(key[k]) && !Array.isArray(tar[k])) {
      
        replica(tar[key], key[k]);
      } else {      
        tar[k] = key[k];
      }
    }
  }
  return tar;
}

