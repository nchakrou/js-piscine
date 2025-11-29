function RNA(str) {
  let res = "";
  for (let s of str) {
    if (s == "G") {
      res += "C";
    } else if (s == "C") {
      res += "G";
    } else if (s == "T") {
      res += "A";
    } else if (s == "A") {
      res += "U";
    }
  }
}
function DNA(str) {
  let res = "";
  for (let s of str) {
    if (s == "C") {
      res += "G";
    } else if (s == "G") {
      res += "C";
    } else if (s == "A") {
      res += "T";
    } else if (s == "U") {
      res += "A";
    }
  }
}
