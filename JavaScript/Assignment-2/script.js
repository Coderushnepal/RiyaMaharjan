var heading = document.createElement("h3");
heading.innerHTML = "Password";
heading.className = "password-header";
heading.classList.add("content");

var icon = document.createElement("i");
icon.className = "bi bi-eye-slash";
icon.addEventListener("click", function (event) {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.className = "bi bi-eye";
  } else {
    passwordInput.type = "password";
    icon.className = "bi bi-eye-slash";
  }
});

var passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.className = "passInput";
passwordInput.addEventListener("mouseover", function (event) {
  event.target.style.borderColor = "#1a77e8";
});
passwordInput.addEventListener("clicked", function (event) {
  event.target.style.borderColor = "#1a77e8";
});
passwordInput.addEventListener("mouseout", function (event) {
  event.target.style.borderColor = "#d9dddc";
});
passwordInput.placeholder = "Enter password";

var forgot = document.createElement("p");
forgot.innerHTML = "Forgot password ?";
forgot.classList.add("content");
forgot.classList.add("forgot");

var btn = document.createElement("button");
btn.innerHTML = "Next";
btn.classList.add("btn");

var container = document.createElement("div");
container.appendChild(heading);
container.appendChild(passwordInput);
container.appendChild(icon);

var container2 = document.createElement("div");
container2.appendChild(forgot);
container2.appendChild(btn);

var mainContainer = document.createElement("div");
mainContainer.className = "main";
mainContainer.appendChild(container);
mainContainer.appendChild(container2);
document.body.appendChild(mainContainer);
