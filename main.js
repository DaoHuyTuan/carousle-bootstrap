//variable
const CLASS_ACTIVE = "active";
const CLASS_CAROUSEL_LEFT = "carousel-item-left";
const CLASS_CAROUSEL_RIGHT = "carousel-item-right";
const CLASS_LEFT = "left";
const CLASS_RIGHT = "right";

//set up dom
let activeSlide;
let nextItem;
const btnNext = document.getElementById("btnNext")
const btnBack = document.getElementById("btnBack")
const firsSlide = document.querySelector(".carousel-main").firstElementChild;
const lastSlide = document.querySelector(".carousel-main").lastElementChild;

//eventlistener


//function controls
const nextSlide = function nextSlide() {
    getCurrentSlide();
    nextItem = activeSlide.nextElementSibling;
    if(nextItem == null) {
        nextItem = firsSlide;
    }
    console.log(nextItem)
    activeSlide.classList.add("left");
    nextItem.classList.add("carousel-item-right");
    nextItem.classList.add("active");
    setTimeout(function() {
        nextItem.classList.remove("carousel-item-right");
    },0.0001)
    setTimeout(function() {
        activeSlide.classList.remove(CLASS_LEFT);
        activeSlide.classList.remove("active");
        nextItem.classList.remove(CLASS_CAROUSEL_RIGHT);
    },500)
}
const backSlide = function backSlide() {
    getCurrentSlide();
    nextItem = activeSlide.previousElementSibling;
    if(nextItem == null) {
        nextItem = lastSlide;
    }
    console.log(nextItem)
    activeSlide.classList.add("right");
    nextItem.classList.add("carousel-item-left");
    nextItem.classList.add("active");
    setTimeout(function() {
        nextItem.classList.remove("carousel-item-left");
    },0.0001)
    setTimeout(function() {
        activeSlide.classList.remove(CLASS_RIGHT);
        activeSlide.classList.remove("active");
        nextItem.classList.remove(CLASS_CAROUSEL_LEFT);
    },500)
}
const getCurrentSlide = function getCurrentSlide() {
    activeSlide = document.querySelector(".carousel-item.active")
}
btnNext.addEventListener("click",nextSlide,false);
btnBack.addEventListener("click",backSlide,false);