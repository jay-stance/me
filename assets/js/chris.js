const light_dark = document.getElementById("light_dark");
const main_body = document.getElementById("main_body");

light_dark.addEventListener("click", light_dark_function);

function light_dark_function(){
    if (this.classList.contains("fa-moon")){
        this.classList.remove("fa-moon")
        this.classList.add("fa-sun")
        main_body.classList.remove("white-version")
    } else {
        this.classList.remove("fa-sun")
        this.classList.add("fa-moon")
        main_body.classList.add("white-version")
    }
}