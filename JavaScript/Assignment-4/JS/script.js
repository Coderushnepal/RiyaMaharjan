// Form Validator

var body = document.body;
body.style.backgroundColor = "#f9fafb";

var main = document.createElement("div");
main.style.boxSizing = "border-box";
(main.style.fontFamily = "Open sans"), "sans-serif";
main.style.width = "400px";
main.style.margin = "0px auto";
main.style.padding = "30px 40px";
main.style.backgroundColor = "#ffffff";
main.style.boxShadow = "0 2px 10px rgb(0 0 0 / 30%)";
main.style.borderRadius = "5px";

var error = document.createElement("h1");
error.setAttribute("id", "error");
main.appendChild(error);

//Title
var title = document.createElement("h1");
title.innerHTML = "Register With Us";
title.style.textAlign = "center";
title.style.fontSize = "24px";
title.style.margin = "0 0 20px";
main.appendChild(title);

//Form
var form = document.createElement("form");
form.setAttribute("action", "/");
form.setAttribute("method", "GET");
form.setAttribute("id", "formId");
form.setAttribute("name", "formName");
main.appendChild(form);

var labelInputs = [
  {
    name: "Username",
    placeholder: "Enter username",
    inputType: "text",
    for: "userName",
    errorMsg: "Username must be at least 3 characters",
    noError: " ",
    id: "username",
  },
  {
    name: "Email",
    placeholder: "Enter email",
    inputType: "email",
    for: "userEmail",
    errorMsg: "Email is not valid",
    noError: " ",
    id: "email",
  },
  {
    name: "Password",
    placeholder: "Enter password",
    inputType: "password",
    for: "userPassword",
    errorMsg: "Password must be at least 6 characters",
    noError: " ",
    id: "password",
  },
  {
    name: "Confirm Password",
    placeholder: "Enter password again",
    inputType: "password",
    for: "userConfirm",
    errorMsg1: "Password2 is required",
    errorMsg: "Passwords do not match",
    noError: " ",
    id: "password2",
  },
];

labelInputs.forEach((element) => {
  var formControl = document.createElement("div");
  var labelItem = document.createElement("label");
  var itemInput = document.createElement("input");
  var itemSmall = document.createElement("small");
  var newLine = document.createElement("br");
  var newLine2 = document.createElement("br");

  //label
  labelItem.innerHTML = element.name;
  labelItem.setAttribute("for", element.for), (labelItem.style.color = "#777");
  labelItem.style.marginBottom = "5px";
  formControl.appendChild(labelItem);
  formControl.appendChild(newLine),

  //Input
  itemInput.setAttribute("type", element.inputType);
  itemInput.setAttribute("placeholder", element.placeholder);
  itemInput.setAttribute("name", element.name);
  itemInput.id = element.id;
  itemInput.style.padding = "10px";
  itemInput.style.fontSize = "14px";
  itemInput.style.border = "2px solid #f0f0f0";
  itemInput.style.width = "92%";
  itemInput.style.borderRadius = "4px";
  formControl.appendChild(itemInput);
  formControl.appendChild(newLine2);

  //Error message
  itemSmall.style.visibility = "hidden";
  itemSmall.id = "error-" + element.id;
  itemSmall.innerHTML = element.errorMsg;
  formControl.appendChild(itemSmall);

  form.appendChild(formControl);
  formControl.style.marginBottom = "10px";
  formControl.style.textAlign = "left";
});

body.appendChild(main);

var submit = document.createElement("button");
submit.innerHTML = "Submit";
submit.style.width = "100%";
submit.style.backgroundColor = "#3498db";
submit.style.border = "2px solid #3498db";
submit.style.color = "#ffffff";
submit.style.fontSize = "16px";
submit.style.padding = "10px";
submit.style.borderRadius = "4px";
submit.setAttribute("type", "submit");
main.appendChild(submit);

submit.addEventListener("click", function (event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var password2 = document.getElementById("password2");
  var errorUsername = document.getElementById("error-username");
  var errorEmail = document.getElementById("error-email");
  var errorPassword = document.getElementById("error-password");
  var errorPassword2 = document.getElementById("error-password2");

  //username validation
  if (
    requiredValidator(username, errorUsername) &&
    lengthValidator(username, errorUsername, 3)
  ) {
    username.style.borderColor = "#2ecc71";
    errorUsername.style.visibility = "hidden";
  }

  //email validation
  if (
    requiredValidator(email, errorEmail) &&
    emailValidator(email, errorEmail)
  ) {
    email.style.borderColor = "#2ecc71";
    errorEmail.style.visibility = "hidden";
  }

  //password validatiom
  if (
    requiredValidator(password, errorPassword) &&
    lengthValidator(password, errorPassword, 6)
  ) {
    password.style.borderColor = "#2ecc71";
    errorPassword.style.visibility = "hidden";
  }

  //password confirmation
  if (
    confirmPasswordValidaor(password, password2, errorPassword2) &&
    requiredValidator(password2, errorPassword2)
  ) {
    password2.style.borderColor = "#2ecc71";
    errorPassword2.style.visibility = "hidden";
  }
}

function requiredValidator(itemInput, errorHolder) {
  if (itemInput.value === "") {
    errorHolder.style.visibility = "visible";
    var itemInfo = itemInput.id;
    itemInfoUpper = itemInfo[0].toUpperCase() + itemInfo.slice(1);
    errorHolder.innerHTML = `${itemInfoUpper} is required `;
    itemInput.style.borderColor = "red";
    errorHolder.style.color = "red";
    return false;
  }
  return true;
}

function lengthValidator(itemInput, errorHolder, length) {
  if (itemInput.value.length < length) {
    errorHolder.style.visibility = "visible";
    var itemInfo = itemInput.id;
    itemInfoUpper = itemInfo[0].toUpperCase() + itemInfo.slice(1);
    errorHolder.innerHTML = `${itemInfoUpper} must be at least ${length} characters`;
    itemInput.style.borderColor = "red";
    errorHolder.style.color = "red";
    return false;
  }
  return true;
}

function emailValidator(itemInput, errorHolder) {
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!mailFormat.test(itemInput.value)) {
    errorHolder.style.visibility = "visible";
    errorHolder.innerHTML = "Email is invalid";
    itemInput.style.borderColor = "red";
    errorHolder.style.color = "red";
    return false;
  }
  return true;
}

function confirmPasswordValidaor(password, password2, errorHolder) {
  if (password2.value !== password.value) {
    errorHolder.style.visibility = "visible";
    errorHolder.innerHTML = "Passwords do not match";
    password2.style.borderColor = "red";
    errorHolder.style.color = "red";
    return false;
  }
  return true;
}

