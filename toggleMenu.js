const btn = document.querySelector(`.toggleMenu button`);
const div = document.querySelector(`.toggleMenu`);
const menu = document.querySelector(`.menu`);
let flag = false;
btn.addEventListener(`click`, () => {
  if (flag) {
    flag = !flag;
    menu.style.display = `none`;
    btn.textContent = `Open Menu`;
    div.style.backgroundColor = `#333`;
  } else if (!flag) {
    menu.style.display = `block`;
    flag = !flag;
    btn.textContent = `Close Menu`;
    div.style.backgroundColor = `#777`;
  }
});
