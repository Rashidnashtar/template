let countDownDate = new Date("oct 31 ,2022 23:59:59");
let counter = setInterval(() => {
  let datenow = new Date().getTime();
  let dateDiff = countDownDate - datenow;
  let Days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let secounds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = Days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".secounds").innerHTML = secounds;
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

let section = document.querySelector(".three");
let spans = document.querySelectorAll(".the-progress span");
let started = false;
let nums = document.querySelectorAll(".stats .number");
let sec = document.querySelector(".stats");
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 300) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= sec.offsetTop) {
    if (!started) {
      nums.forEach((el) => startCount(el));
      started = true;
    }
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
let megaToggler = document.querySelector(".mega-menu-toggler");
let megaMenu = document.querySelector(".mega-menu");
let visiable = false;
megaToggler.addEventListener("click", () => {
  if (!visiable) {
    megaMenu.style.cssText = "opacity: 1;z-index: 100;top: calc(100% + 1px)";
    visiable = !visiable;
    return;
  }
  megaMenu.style.cssText = "opacity:0";
  visiable = !visiable;
  return;
});
