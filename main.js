content = document.querySelector(".main-div .content");
childsOfContent = content.children;

leftBarNest = document.querySelector(".main-div .left-bar .left-bar-nest");
h1s = leftBarNest.querySelectorAll("h1");

h1Ids = [];
for (let index = 0; index < h1s.length; index++) {
  h1Ids[index] = h1s[index].id;
}

leftBarNest.addEventListener("click", (e) => {
  id = e.target.id;

  if (h1Ids.includes(id)) {
    Array.from(childsOfContent).forEach((childContent) => {
      if (childContent.id == id) {
        childContent.classList.remove("inactive");
      } else {
        childContent.classList.add("inactive");
      }
    });
  }
});
