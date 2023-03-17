const grandparent = document.querySelector(".container");

grandparent.addEventListener("click", (e) => {
  // e.target.classList.add("active");
  // e.target.classList.remove("default");
  e.composedPath().forEach((em) => {
    if (em.classList != "container") {
    } else {
      em.childNodes.forEach((child) => {
        if (child.childNodes[1] != null) {
          child.childNodes[1].classList.remove("active");
          child.childNodes[1].classList.add("default");
        }
      });
    }
  });

  e.target.classList.remove("default");
  e.target.classList.add("active");
});

// container_cd.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     console.log(e.target);
//   });
// });
// container_cd.forEach((e) => {
//   e.addEventListener("click", () => {
//     e.childNodes.forEach((child) => {
//       console.log(child);
//     });
//   });
// });

// container_cd.forEach((e) => {
//   e.childNodes.forEach((c) => {
//     if (c.classList != null) {
//       c.addEventListener("click", () => {
//         c.classList.toggle("no-active");
//         console.log(c.parentElement);
//       });
//     }
//   });
// });
