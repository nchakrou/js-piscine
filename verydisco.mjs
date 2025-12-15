const arch = process.argv.slice(2);

for (let l of arch) {
  let mid = Math.ceil(l.length / 2);
  console.log(l.slice(mid) + l.slice(0, mid));
}
