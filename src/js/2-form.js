

// document.addEventListener('DOMContentLoaded', function() {
//   let formData = { email: "", message: "" };

//   if (localStorage.getItem("feedback-form-state")) {
//     formData = JSON.parse(localStorage.getItem("feedback-form-state"));
//     document.getElementById('emailInput').value = formData.email;
//     document.getElementById('messageInput').value = formData.message;
//   }

//   document.querySelector(".feedback-form").addEventListener('input', function(e) {
//     formData[e.target.name] = e.target.value;
//     localStorage.setItem("feedback-form-state", JSON.stringify(formData));
//   });

//   document.getElementById('submitButton').addEventListener('click', function(e) {
//     e.preventDefault();
//     if (formData.email === "" || formData.message === "") {
//       alert("Please fill out all fields");
//     } else {
//       console.log(formData);
//       localStorage.removeItem("feedback-form-state");
//       formData = { email: "", message: "" };
//       document.getElementById('emailInput').value = "";
//       document.getElementById('messageInput').value = "";
//     }

//   });

// });

const form = document.querySelector(`.feedback-form`);

form.addEventListener("input", handlerInput);
function handlerInput(event) {
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const data = JSON.stringify({ email, message });
  localStorage.setItem("feedback-form-state", data);

}

const savedData = localStorage.getItem("feedback-form-state");
if (savedData) {
  const info = JSON.parse(savedData);
  form.elements.email.value = info.email;
  form.elements.message.value = info.message;
}

form.addEventListener('submit', handlerSubmit);
function handlerSubmit(event) {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === "" || message === "") {
    return alert("Please feel out all fields")
  }

  localStorage.removeItem("feedback-form-state");
  console.log({ email, message });

  form.reset();
}