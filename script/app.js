const loginButton = document.querySelector("#submit");

const clickHandler = () => {
  console.log("click");
  location.href = "dashboard.html";
};
loginButton.addEventListener("click", clickHandler);
