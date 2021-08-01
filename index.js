// import "./node_modules/bootstrap/dist/js/bootstrap";

const menu = document.querySelector("#menu");
const liens = document.querySelectorAll("#menu a");

liens.forEach((lien) => {

    lien.addEventListener("click", () => {

        menu.classList.remove("show");

    });

});

window.addEventListener("click", () => {

    menu.classList.remove("show");

});