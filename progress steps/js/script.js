const prev_button = document.querySelector(".btn-prev");
const next_button = document.querySelector(".btn-next");
const cont = document.querySelector(".container").children;
let n = 0;

next_button.addEventListener("click", () => {
  if (n <= 4) {
    cont.item(n + 1).classList.add("active");
    cont.item(n + 2).classList.add("active");
    n += 2;
  } else {
  }
});
prev_button.addEventListener("click", () => {
  if (n > 0 && n <= 6) {
    cont.item(n).classList.remove("active");
    cont.item(n - 1).classList.remove("active");
    n -= 2;
  }
});
