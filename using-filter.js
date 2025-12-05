function filterShortStateName(arr) {
  return arr.filter((n) => n.length < 7);
}
function filterStartVowel(arr) {
  return arr.filter((n) => /^[aeiou]/i.test(n));
}
function filter5Vowel(arr) {
  return arr.filter((n) =>
    /[aeiou].*[aeiou].*[aeiou].*[aeiou].*[aeiou]/i.test(n)
  );
}

function filter1DistinctVowel(arr) {
  return arr.filter((n) => {
    let res = n.toLowerCase().match(/[aeiou]/g);
    return new Set(res).length == 1;
  });
}
function multiFilter(arr) {
return arr.filter((n) => {
    let cap = n.capital.length >=8
    let nam = /^[^aeiou]/i.test(n.name)
    let tage = /[aeiou]/.test(n.tag)
    return cap && nam && tage && n.region!=="South"
  });
}
