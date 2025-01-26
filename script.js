const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
	body.classList.add(savedTheme);
}

themeToggle.addEventListener("click", () => {
	const isLight = body.classList.toggle("light-theme");
	localStorage.setItem("theme", isLight ? "light-theme" : "");
});
