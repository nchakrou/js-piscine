let id3 = 1;
export function build(a) {
  const fn = setInterval(() => {
    if (id3 == a) {
      clearInterval(fn);
    }
    const div = document.createElement("div");
    if (id3 % 3 == 2) {
      div.dataset.foundation = "true";
    }
    div.setAttribute("id", `brick-${id3}`);
    document.body.append(div);
    id3++;
  }, 100);
}
export function repair(...ids) {
  ids.forEach((id) => {
    const f = document.getElementById(id);
    if (f.dataset.foundation) {
      f.dataset.repaired = "in progress";
    } else {
      f.dataset.repaired = "true";
    }
  });
}
export function destroy() {
  id3--;
  if (id3 > 0) {
    const two = document.getElementById(`brick-${id3}`);
    console.log(two);

    two.remove();
  }
}
