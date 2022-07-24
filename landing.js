const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function adduser() {
  db.collection("users").doc().set({
  name: document.getElementById("name").innerHTML, 
  codeword: document.getElementById("code").innerHTML
}).then(function() {
  console.log("user added");
  window.location.href = "https://safelineai.cyraalesha.repl.co/success.html";
});}