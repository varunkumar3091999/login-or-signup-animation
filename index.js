const onSignupClick = () => {
  const transparantTab = document.getElementById("transparant-tab");
  const transparantTabContents = document.getElementById(
    "transparant-tab-contents"
  );
  const welcomeback = document.getElementById("welcome-back");

  const signupFields = document.getElementById("signup-fields");
  const signinFields = document.getElementById("signin-fields");

  transparantTabContents.classList.add("move-right-animation");

  welcomeback.classList.remove("welcome-back");
  welcomeback.classList.remove("d-none");
  welcomeback.classList.add("welcome-back-to-right");

  signinFields.classList.add("move-input-fields-to-right");

  signupFields.classList.add("signup-fields");

  transparantTab.classList.add("move-left-animation");

  signupFields.classList.remove("hide-signup-fields");
};

const onSigninClick = () => {
  const transparantTab = document.getElementById("transparant-tab");
  const transparantTabContents = document.getElementById(
    "transparant-tab-contents"
  );
  const welcomeback = document.getElementById("welcome-back");

  const signupFields = document.getElementById("signup-fields");
  const signinFields = document.getElementById("signin-fields");

  transparantTabContents.classList.remove("move-right-animation");

  welcomeback.classList.add("welcome-back");
  welcomeback.classList.add("d-none");
  welcomeback.classList.remove("welcome-back-to-right");

  signinFields.classList.remove("move-input-fields-to-right");
  signupFields.classList.remove("signup-fields");

  transparantTab.classList.remove("move-left-animation");
};
