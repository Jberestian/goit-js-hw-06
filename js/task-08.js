const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const objEl = {
    email: email.value,
    password: password.value,
  };

  console.log(objEl);

  event.currentTarget.reset();
});
