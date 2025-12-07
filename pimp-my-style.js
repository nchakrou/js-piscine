import { styles } from "./pimp-my-style.data.js";
let id = 0;
let flage = false;
export function pimp() {
  const clas = document.querySelector(".button");
  console.log(id)
  if (flage) {
      clas.classList.remove(styles[id]);
      id--;
      if (id < 0){
          clas.classList.remove("unpimp") 
          id = 0
          flage = false
      }
      return
    }
    if (id >= styles.length-1) {
        clas.classList.add(styles[id]);
        
        clas.classList.add("unpimp");
        flage = true;
        return
    }
    clas.classList.add(styles[id]);
  id++;
}
