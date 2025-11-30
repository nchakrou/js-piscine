function sameAmount(str, reg1, reg2) {
  const res1 = str.match(new RegExp(reg1.source, "g"))||[];
  const res2 = str.match(new RegExp(reg2.source, "g"))||[];
  return res1.length == res2.length;
}
