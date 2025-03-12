



// home page selector 
let homeMain = document.querySelector("#main-box0")
let homepage = document.querySelector("#header")
let homepageH2 = document.querySelector(".h2-div")
let homepageSocial = document.querySelector(".social-links")

let homebtn = document.querySelector("#homebtnid")

// nav btn
let navbtn1 = document.querySelector(".nav-media")


// in mobile menu bar   
let tempv = true;
let navbar = document.querySelector(".nav-div");
let navlist = document.querySelector("#ul-item")



let menubar = document.querySelector(".menu")
let menubtn = document.querySelector("#menubtn")
menubtn.addEventListener("click", function () {
    if (tempv == true) {
        navbar.classList.add("nav-media")
        // navbar.style.display = ("inline-block");
        navlist.classList.add("navlist-media")
        tempv = false
    } else {
        navbar.classList.add("active")
        navbar.classList.remove("nav-media")
        navlist.classList.remove("navlist-media")
        tempv = true
    }
})

// home btn
// about page selector
let aboutpage = document.querySelector("#about");
let aboutbtn = document.querySelector("#aboutbtnid");
aboutbtn.addEventListener("click", function () {

    aboutbtn.classList.add("active")
    aboutpage.classList.add("section-show")
    homeMain.classList.add("header-d")
    homepage.classList.add("header-top")
    homepageH2.classList.add("h2-d")
    homepageSocial.classList.add("h2-d")

    navlist.classList.remove("navlist-media")
    navbar.classList.remove("nav-media")
    tempv = true

    homebtn.classList.remove("active")

    resumebtn.classList.remove("active")
    portfoliobtn.classList.remove("active")
    contactbtn.classList.remove("active")

    resumepage.classList.remove("section-show")
    portfoliopage.classList.remove("section-show")
    contactpage.classList.remove("section-show")

})
// resume page selector
let resumepage = document.querySelector("#resume")
let resumebtn = document.querySelector("#resumebtnid");
resumebtn.addEventListener("click", function () {

    resumebtn.classList.add("active")
    resumepage.classList.add("section-show")
    homeMain.classList.add("header-d")
    homepage.classList.add("header-top")
    homepageH2.classList.add("h2-d")
    homepageSocial.classList.add("h2-d")

    navlist.classList.remove("navlist-media")
    navbar.classList.remove("nav-media")
    tempv = true

    homebtn.classList.remove("active")

    aboutbtn.classList.remove("active")
    portfoliobtn.classList.remove("active")
    contactbtn.classList.remove("active")


    aboutpage.classList.remove("section-show")
    portfoliopage.classList.remove("section-show")
    contactpage.classList.remove("section-show")

})

// potfolio page selector
let portfoliopage = document.querySelector("#portfolio")
let portfoliobtn = document.querySelector("#portfoliobtnid");
portfoliobtn.addEventListener("click", function () {

    portfoliobtn.classList.add("active")
    portfoliopage.classList.add("section-show")
    homeMain.classList.add("header-d")
    homepage.classList.add("header-top")
    homepageH2.classList.add("h2-d")
    homepageSocial.classList.add("h2-d")

    navlist.classList.remove("navlist-media")
    navbar.classList.remove("nav-media")
    tempv = true

    homebtn.classList.remove("active")

    resumebtn.classList.remove("active")
    aboutbtn.classList.remove("active")
    contactbtn.classList.remove("active")


    aboutpage.classList.remove("section-show")
    resumepage.classList.remove("section-show")
    contactpage.classList.remove("section-show")

})

// contact page 
let contactpage = document.querySelector("#contact")
let contactbtn = document.querySelector("#contactbtnid");
contactbtn.addEventListener("click", function () {

    contactbtn.classList.add("active")
    contactpage.classList.add("section-show")
    homeMain.classList.add("header-d")
    homepage.classList.add("header-top")
    homepageH2.classList.add("h2-d")
    homepageSocial.classList.add("h2-d")

    navlist.classList.remove("navlist-media")
    navbar.classList.remove("nav-media")
    tempv = true

    homebtn.classList.remove("active")

    aboutbtn.classList.remove("active")
    resumebtn.classList.remove("active")
    portfoliobtn.classList.remove("active")

    aboutpage.classList.remove("section-show")
    portfoliopage.classList.remove("section-show")
    resumepage.classList.remove("section-show")

})


