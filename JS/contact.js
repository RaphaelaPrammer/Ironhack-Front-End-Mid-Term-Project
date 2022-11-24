// CONTACT POST
console.log("TESTCONTACT");

const addInfo = (preventForm) => {
  preventForm.preventDefault();

  let fullName = document.querySelector("#name").value;
  //   let email = document.querySelector("#mail").value;
  //   let phone = document.querySelector("#phone").value;
  let message = document.querySelector("#message").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: fullName,
      userId: 1,
      body: message,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Accept: "text/plain, application/json",
    },
  })
    .then((response) => response.json())
    .then((formData) => console.log(formData))
    .then(() => {
      let formDone = document.querySelector(".s-form-done");
      formDone.style.display = "block";
    })
    .then(() => inputs.reset())
    .catch((error) => {
      let formFail = document.querySelector(".s-form-fail");
      formFail.style.display = "block";
      console.log("ERROR");
    });
};

let inputs = document.querySelector("#email-form");
inputs.addEventListener("submit", addInfo);
