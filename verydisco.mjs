let arch = process.argv.slice(2);
if (arch.length == 1){
    arch = arch.join(" ")
    arch = arch.split(" ")
}

for (let l of arch) {
  let mid = Math.ceil(l.length / 2);
  console.log(l.slice(mid) + l.slice(0, mid));
}
