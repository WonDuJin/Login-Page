const loginForm = document.querySelector("#root");
const loginInput = document.querySelector("#root input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function loginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  greeting.innerText = `어서오너라 ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", loginSubmit);
