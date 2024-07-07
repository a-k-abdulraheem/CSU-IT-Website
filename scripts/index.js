const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

// demo
// let activeSlide = 1;
// setInterval(() => {
//   console.log(activeSlide);

//   slides.forEach((slide, i) => {
//     slide.style.transform = `translate(${(i - activeSlide) * 100}%, -${
//       i * 100
//     }%)`;
//   });
//   activeSlide++;
//   activeSlide %= slides.length;
// }, 3500);

document.addEventListener("DOMContentLoaded", (event) => {
  console.log(D);
  const slides = document.querySelector(".slider");
  const totalSlides = slider.children.length;
  let index = 0;

  function showNextSlide() {
    index = (index + 1) % totalSlides;
    slider.style.transform = `translateX(${-index * 100}%)`;
  }

  setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});
