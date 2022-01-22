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

// form.setAttribute('name','myForm');
// form.setAttribute('onsubmit','return validateForm()');
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

  (labelItem.innerHTML = element.name),
    labelItem.setAttribute("for", element.for),
    (labelItem.style.color = "#777");
  labelItem.style.marginBottom = "5px";
  formControl.appendChild(labelItem);
  formControl.appendChild(newLine),
    itemInput.setAttribute("type", element.inputType);
  itemInput.setAttribute("placeholder", element.placeholder);
  itemInput.setAttribute("name", element.name);
  itemInput.id = element.id;
  itemInput.style.padding = "10px";
  itemInput.style.fontSize = "14px";
  itemInput.style.border = "2px solid #f0f0f0";
  itemInput.style.width = "92%";
  formControl.appendChild(itemInput);
  formControl.appendChild(newLine2);

  itemSmall.style.visibility = "hidden";
  itemSmall.style.fontSize = "smaller";
  itemSmall.id='small';
//   itemSmall.className = "small";
  itemSmall.innerHTML = element.errorMsg;
  formControl.appendChild(itemSmall);

  form.appendChild(formControl);
  formControl.style.marginBottom = "10px";
//   formControl.style.paddingBottom="20px";
  formControl.style.textAlign = "left";
});

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
// submit.setAttribute('onclick','validateForm()');
main.appendChild(submit);
submit.addEventListener("click", function (event) {
  event.preventDefault();
  // return validateForm();
  validateForm();
});

body.appendChild(main);

const usernameForm = document.getElementById("username");
const passwordForm = document.getElementById("password");
const emailForm = document.getElementById("email");
const password2Form = document.getElementById("password2");
const formInput = document.getElementById("form");

function validateForm() {
  var validateUsername = document.forms["formName"]["Username"].value;
  if (
    validateUsername.length < 3 ||
    validateUsername == " " ||
    validateUsername == null
  ) {
    document.getElementById("small").style.visibility = "visible";
    return false;
  }

  // var validateUserEmail = document.forms["formName"]["Email"].value;
  // var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  // if (validateUserEmail.value.match(mailformat)) {
  //   document.getElementById("small").style.visibility = "visible";
  //   return false;
  // }
}
