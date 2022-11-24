// --------------------------------------------
// FETCH API

const infoJson = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((res) => {
      let externalApiInfo = "";
      let newArray = res.slice(0, 3);
      newArray.forEach((element, index) => {
        externalApiInfo += `
        <div class="project-card" role="list-item">
          <div>
            <img
              class="project-card-img"
              src="./project-assets/projects-section/${index + 1}.jpg"
              alt="project-image-1"
            />
          </div>
          <h4 class="project-title">${element.title}</h4>
          <p class="project-description">${element.body}</p>
          <a href="./projects-template.html">Learn More</a>
        </div>
        `;
      });
      document.querySelector(".grid-container-projects").innerHTML +=
        externalApiInfo;
    });
};

infoJson();
