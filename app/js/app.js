//tabs
const tabOver = document.querySelector(".tab.overview");
const tabInt = document.querySelector(".tab.internal");
const tabSur = document.querySelector(".tab.surface");

//mobile tabs
const mTabOver = document.querySelector(".mobile-tab.overview");
const mTabInt = document.querySelector(".mobile-tab.internal");
const mTabSur = document.querySelector(".mobile-tab.surface");

//mobile-borders
const mobileOver = document.querySelector(".border.overview");
const mobileInt = document.querySelector(".border.internal");
const mobileSur = document.querySelector(".border.surface");

//content
const contentOver = document.querySelector(".tab-content.overview");
const contentInt = document.querySelector(".tab-content.internal");
const contentSur = document.querySelector(".tab-content.surface");

//images
const imgOver = document.querySelector(".image.overview")
const imgInt = document.querySelector(".image.internal")
const imgSur = document.querySelector(".image.surface")

//menu toggle
const menuToggle = document.querySelector(".menu")
const overlayMenu = document.querySelector(".overlay-menu")

tabOver.addEventListener("click", function() {
    contentInt.classList.remove("current-tab")
    contentSur.classList.remove("current-tab")
    imgInt.classList.remove("current-image")
    imgSur.classList.remove("current-image")
    tabInt.classList.remove("active")
    tabSur.classList.remove("active")

    contentOver.classList.add("current-tab")
    tabOver.classList.add("active")
    imgOver.classList.add("current-image")
})

tabInt.addEventListener("click", function() {
    contentOver.classList.remove("current-tab")
    contentSur.classList.remove("current-tab")
    imgOver.classList.remove("current-image")
    imgSur.classList.remove("current-image")
    tabOver.classList.remove("active")
    tabSur.classList.remove("active")

    contentInt.classList.add("current-tab")
    tabInt.classList.add("active")
    imgInt.classList.add("current-image")
})

tabSur.addEventListener("click", function() {
    contentOver.classList.remove("current-tab")
    contentInt.classList.remove("current-tab")
    imgInt.classList.remove("current-image")
    tabOver.classList.remove("active")
    tabInt.classList.remove("active")
    mobileOver.classList.remove("active")
    mobileInt.classList.remove("active")
    

    contentSur.classList.add("current-tab")
    tabSur.classList.add("active")
    imgOver.classList.add("current-image")
    imgSur.classList.add("current-image")
    mobileSur.classList.add("active")
})

mTabOver.addEventListener("click", function() {
    contentInt.classList.remove("current-tab")
    contentSur.classList.remove("current-tab")
    imgInt.classList.remove("current-image")
    imgSur.classList.remove("current-image")
    mTabInt.classList.remove("active")
    mTabSur.classList.remove("active")
    mobileInt.classList.remove("active")
    mobileSur.classList.remove("active")


    contentOver.classList.add("current-tab")
    mTabOver.classList.add("active")
    imgOver.classList.add("current-image")
    mobileOver.classList.add("active")
})

mTabInt.addEventListener("click", function() {
    contentOver.classList.remove("current-tab")
    contentSur.classList.remove("current-tab")
    imgOver.classList.remove("current-image")
    imgSur.classList.remove("current-image")
    mTabOver.classList.remove("active")
    mTabSur.classList.remove("active")
    mobileOver.classList.remove("active")
    mobileSur.classList.remove("active")


    contentInt.classList.add("current-tab")
    mTabInt.classList.add("active")
    imgInt.classList.add("current-image")
    mobileInt.classList.add("active")
})

mTabSur.addEventListener("click", function() {
    contentOver.classList.remove("current-tab")
    contentInt.classList.remove("current-tab")
    imgInt.classList.remove("current-image")
    mTabOver.classList.remove("active")
    mTabInt.classList.remove("active")
    mobileOver.classList.remove("active")
    mobileInt.classList.remove("active")
    

    contentSur.classList.add("current-tab")
    mTabSur.classList.add("active")
    imgOver.classList.add("current-image")
    imgSur.classList.add("current-image")
    mobileSur.classList.add("active")
})

menuToggle.addEventListener("click", function() {
    if (overlayMenu.classList.contains("open-menu")) {
        overlayMenu.classList.remove("open-menu")
        menuToggle.style.opacity = 1
    } else {
        overlayMenu.classList.add("open-menu")
        menuToggle.style.opacity = .5 
    }
})



