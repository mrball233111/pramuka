const toggleBtn = document.getElementById("toggleDarkMode");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const icon = toggleBtn.querySelector("span");
  icon.textContent = body.classList.contains("dark-mode") ? "light_mode" : "dark_mode";
});
