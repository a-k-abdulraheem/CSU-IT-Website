const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

// demo
let activeSlide = 1;

const updateSlider = function () {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - activeSlide) * 100}%)`;
  });

  document.querySelector(".slide--active").classList.remove("slide--active");
  document
    .querySelector(`[data-slide-indc="${activeSlide}"]`)
    .classList.add("slide--active");

  activeSlide++;
  activeSlide %= slides.length;
};

const activateSlider = () => setInterval(updateSlider, 3500);

const deactivateSlider = (intervalID) => clearInterval(intervalID);

let slidingID = activateSlider();
// To pause slider when the user hovers over the "see more" btn
slider.addEventListener("mouseover", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("slide__btn--see-more"))
    deactivateSlider(slidingID);
});
// To resume slider when the user hovers over the "see more" btn
slider.addEventListener("mouseout", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("slide__btn--see-more"))
    slidingID = activateSlider(slidingID);
});
// To navigate through sliders
document
  .querySelector(".slides__indicator")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("slide__indc")) {
      deactivateSlider(slidingID);
      activeSlide = e.target.dataset.slideIndc;

      updateSlider();

      slidingID = activateSlider();
    }
  });
