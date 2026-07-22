
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    drawer.classList.add("open");
    overlay.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    drawer.classList.remove("open");
    overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
    drawer.classList.remove("open");
    overlay.classList.remove("show");
});

function openGuide() {
    window.location.href = "createMzigo.html";
}