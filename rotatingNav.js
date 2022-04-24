const navButtons = document.querySelectorAll(".fa-solid");
const container = document.querySelector(".container");
const nav = document.querySelector(".navList");

navButtons.forEach(button => {
    button.addEventListener("click", () => {
        container.classList.toggle("animate");
        if (button.classList.contains("fa-bars")) {
            button.classList.remove('fa-bars');
            button.classList.add('fa-xmark');
        } else {
            button.classList.add("fa-bars");
            button.classList.remove("fa-xmark");
        }
        nav.classList.toggle("hide");
    })
})