const dbScreens = document.querySelector(".db-screens");
const dbContents = document.querySelector(".db-contents");
const displayContainer = document.querySelector(".display-container");
// const dbScreens = document.querySelector(".db-screens");
document.addEventListener("DOMContentLoaded", () => {
  const display1 = document.querySelector(".display-1");
  const display2 = document.querySelector(".display-2");
  const display3 = document.querySelector(".display-3");
  const display4 = document.querySelector(".display-4");
  const display5 = document.querySelector(".display-5");
  const gChrome = document.querySelector(".g-chrome");
  const gAndroid = document.querySelector(".g-android");
  const gMac = document.querySelector(".g-mac");
  const gIos = document.querySelector(".g-ios");
  const displayContainer = document.querySelector(".display-container");

  gAndroid.addEventListener("click", () => {
    // Assuming you want to display the content of .display-2 when gAndroid is clicked
    displayContainer.innerHTML = "On the way";
  });

  gMac.addEventListener("click", () => {
    // Assuming you want to display the content of .display-3 when gMac is clicked
    displayContainer.innerHTML = "Be patient";
  });

  gIos.addEventListener("click", () => {
    // Assuming you want to display the content of .display-4 when gIos is clicked
    displayContainer.innerHTML = "Winter is coming";
  });
});
