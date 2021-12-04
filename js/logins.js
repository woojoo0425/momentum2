const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const helloInput = document.querySelector("#hello-area h1");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    const loginId = loginInput.value;
    localStorage.setItem("loginId", loginId);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintHello(loginId);
}

function paintHello(loginId) {
    helloInput.innerText = "Hello " + loginId;
    helloInput.classList.remove(HIDDEN_CLASSNAME);
}

const savedLoginId = localStorage.getItem("loginId");
if (savedLoginId == null) {
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintHello(savedLoginId);
}