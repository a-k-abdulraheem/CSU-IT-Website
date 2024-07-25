import {
  openAccessDatabases,
  subscribedDatabases,
} from "../data/database/databases.js";

const databaseOptnsContainer = document.querySelector(".database-options");
const optnOpenAccessDB = document.querySelector(".open-access-database-option");
const optnSubscribedDB = document.querySelector(".subscribed-database-option");
const containerDatabaseLinks = document.querySelector(
  ".database-links--container"
);
const containerOpenDatabase = document.querySelector(
  ".open-access-database--links"
);
const containerSubscribedDatabase = document.querySelector(
  ".subscribed-database--links"
);

const showAfterLoadingImages = function (containerElem, loadingElem) {
  let imgLoaded = 0;
  const images = containerElem.querySelectorAll("img");

  const checkLoadedImgs = function () {
    imgLoaded++;
    if (imgLoaded !== images.length) return;

    loadingElem.remove();
    containerElem.classList.remove("hidden--element");
  };

  images.forEach((img) => {
    // Successfully loaded
    img.addEventListener("load", checkLoadedImgs);
    // Unsuccessfully loaded
    img.addEventListener("error", checkLoadedImgs);
  });
};

const renderOpenAcsessDB = function () {
  let html = "";
  openAccessDatabases.forEach((section) => {
    html += `
      <div class="links--section">
        <div class="links--title section--title">${section.sectionTitle}</div>
        <div class="links">
          ${section.links.reduce(
            (acc, cur) =>
              acc +
              `
              <a
                ${cur.link ? ` href=${cur.link}` : ""}
                class="link"
                title="${cur.linkTitle}"
                style="background-color: ${cur.backGroundColor}"
              >
                <img
                  src="${cur.imgAdd}"
                  alt="${cur.altTxt}"
                  height="25px"
                  class="link--img"
                />
              </a>
            `,
            ""
          )}
        </div>
      </div>
    `;
  });
  containerOpenDatabase.innerHTML = '<div class="loading"></div>';

  containerOpenDatabase.innerHTML += `
    <div class="links--section--container hidden--element">
      ${html}
    </div>
  `;

  const hiddenElem = document.querySelector(".hidden--element");
  const loadingElem = document.querySelector(".loading");
  showAfterLoadingImages(hiddenElem, loadingElem);
};
renderOpenAcsessDB();

const renderSubscribedDD = function () {
  let html = "";
  subscribedDatabases.forEach((section) => {
    html += `
      <div class="link" style="background-color: ${section.backGroundColor}; ${
      section.color ? `color: ${section.color}` : ""
    }">
        <img
          src="${section.imgAdd}"
          alt=""
          height="25px"
          class="link--img"
        />
        <div class="link--desc">${section.linkDesc}</div>
      </div>
    `;
  });

  containerSubscribedDatabase.innerHTML = '<div class="loading"></div>';

  containerSubscribedDatabase.innerHTML += `
    <div class="links--section hidden--element">
      <div class="links">
        ${html}
      </div>
    </div>
  `;

  const hiddenElem = document.querySelector(".hidden--element");
  const loadingElem = document.querySelector(".loading");
  showAfterLoadingImages(hiddenElem, loadingElem);
};

const removeOpenDatabase = function () {
  containerOpenDatabase.innerHTML = "";
};

const removeSubscribedDatabase = function () {
  containerSubscribedDatabase.innerHTML = "";
};

databaseOptnsContainer.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("open-access-database-option")) {
    optnOpenAccessDB.classList.add("option--active");
    optnSubscribedDB.classList.remove("option--active");

    removeSubscribedDatabase();

    renderOpenAcsessDB();
  } else if (e.target.classList.contains("subscribed-database-option")) {
    optnSubscribedDB.classList.add("option--active");
    optnOpenAccessDB.classList.remove("option--active");

    removeOpenDatabase();

    renderSubscribedDD();
  }
});

// fix links
// footer
// index db section
