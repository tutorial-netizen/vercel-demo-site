const button = document.querySelector("#demo-button");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "It works! Your deployed site is interactive. 🎉";
});
