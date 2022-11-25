console.log("TESTSubscribe");

const addInfo = (preventForm) => {
  preventForm.preventDefault();

  let mailSubscribe = document.querySelector("#email-2").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: mailSubscribe,
      userId: 1,
      body: mailSubscribe,
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

let inputs = document.querySelector("#email-subscribe");
inputs.addEventListener("submit", addInfo);
