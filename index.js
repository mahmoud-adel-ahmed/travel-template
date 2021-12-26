// navbar toggle
let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").addEventListener("click", () => {
  navbar.classList.toggle("active");
});

window.onscroll = function () {
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  }
};

// video toggle
let control_btns = document.querySelectorAll(
  ".video-container .controls .control-btn"
);
let video = document.querySelector(".video-container .video");
control_btns.forEach((control_btn) => {
  control_btn.addEventListener("click", () => {
    let src = control_btn.getAttribute("data-src");
    video.src = src;
  });
});
