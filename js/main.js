var overlay = document.querySelector(".overlay");
var modal = document.querySelector(".modal");
var openBtn = document.querySelector(".btn-open");
var closeBtn = document.querySelector(".btn-close");

function openModal() {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

function closeModal() {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);


document.addEventListener("keydown",function(event){
    if (event.key==="Escape"){
        closeModal();
    }
})



var overlay1 = document.querySelector(".overlay1");
var modal1 = document.querySelector(".modal1");
var openBtn1 = document.querySelector(".btn-open1");
var closeBtn1 = document.querySelector(".btn-close1");

function openModal1() {
    modal1.classList.remove("hidden1")
    overlay1.classList.remove("hidden1")
}

function closeModal1() {
    modal1.classList.add("hidden1")
    overlay1.classList.add("hidden1")
    // overlay.classList.add("hidden")
    // modal.classList.add("hidden")

}

openBtn1.addEventListener("click", openModal1);
closeBtn1.addEventListener("click", closeModal1);
overlay1.addEventListener("click", closeModal1);


