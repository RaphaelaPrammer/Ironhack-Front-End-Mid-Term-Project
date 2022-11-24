// CONTACT POST
console.log("TESTCONTACT");

const addInfo = (preventForm) => {
  preventForm.preventDefault();

  let fullName = document.querySelector("#name").value;
  let email = document.querySelector("#mail").value;
  let phone = document.querySelector("phone").value;
  let message = document.querySelector("#message").value;

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "text/plain, application/json",
    },
    message: JSON.stringify({
      name: fullName,
      email: email,
      phone: phone,
      username: message,
    }),
  })
    .then((response) => response.json())
    .then((formData) => console.log(formData))
    .catch((error) => console.log(error));
};
document
  .querySelector(".contact-submit-btn")
  .addEventListener("submit", addInfo);
