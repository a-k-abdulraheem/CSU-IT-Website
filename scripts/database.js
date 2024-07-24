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
              <div
                class="link"
                title="${cur.linkTitle}"
                style="background-color: ${cur.backGroundColor}"
              >
                <a${cur.link ? ` href=${cur.link}` : ""}>
                  <img
                    src="${cur.imgAdd}"
                    alt="${cur.altTxt}"
                    height="25px"
                    class="link--img"
                  />
                </a>
              </div>
            `,
            ""
          )}
        </div>
      </div>
    `;
  });
  containerOpenDatabase.innerHTML = html;
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
  containerSubscribedDatabase.innerHTML = `
    <div class="links--section">
      <div class="links">
        ${html}
      </div>
    </div>
  `;
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

// containerDatabaseLinks.addEventListener("mouseover", function (e) {
//   e.preventDefault();
//   if (e.target.classList.contains("link")) {
//     [...e.target.closest(".links").children].forEach((elem) => {
//       if (e.target !== elem) elem.style.opacity = "0.2";
//     });
//   }
// });
