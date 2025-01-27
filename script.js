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

const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector("#menu-btn");

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    if (sidebar.className.includes("active")) {
        body.style.overflowY = "hidden";
    } else {
        body.style.overflowY = "auto";
    }
});

const newBtn = document.querySelector("#new-btn");
const modal = document.querySelector(".modal-backdrop");
const closeModalBtn = document.querySelector("#close-modal");
const modalForm = document.querySelector("#modal-form");

newBtn.addEventListener("click", () => {
    modal.classList.add("active");
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

modalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        title: e.target.title.value,
        description: e.target.description.value,
    };

    console.log(data);

    // project list append new project
});
