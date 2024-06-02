

let formData = { email: "", message: "" };

if (localStorage.getItem("feedback-form-state")) {
  formData = JSON.parse(localStorage.getItem("feedback-form-state"));
  document.getElementById('emailInput').value = formData.email;
  document.getElementById('messageInput').value = formData.message;
}

document.querySelector(".feedback-form").addEventListener('input', function(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

document.getElementById('submitButton').addEventListener('click', function(e) {
  e.preventDefault();
  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
  } else {
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData = { email: "", message: "" };
    document.getElementById('emailInput').value = "";
    document.getElementById('messageInput').value = "";
  }
});