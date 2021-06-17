// Sticky nav on scrolling
const nav = document.querySelector("#menuBar");
const NavTop = nav.offsetTop;
let mainNavLinks = document.querySelectorAll("#navCont ul li a");
let mainSections = document.querySelectorAll("section");


function fixnavbar() {
    if (window.scrollY >= NavTop) {
        document.body.style.paddingTop = nav.offsetHeight + "px";
        document.body.classList.add("fixed-nav");
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove("fixed-nav");
    }
}

function currentNavBar() {
    let fromTop = window.scrollY;
    const scrollPosition = document.documentElement.scrollTop;
    mainSections.forEach(section => {

        if (
            scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
            scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
        ) {
            const currentId = section.attributes.id.value;
            removeAllCurrentClasses();
            addCurrentClass(currentId);
        }
    });
}
// remove current class function
const removeAllCurrentClasses = function() {
        mainNavLinks.forEach((el) => {
            el.classList.remove('current');
        });
    }
    // add current class function
const addCurrentClass = function(id) {
    console.log(id);
    const selector = `nav a[href="#${id}"]`;
    document.querySelector(selector).classList.add('current');
}
window.addEventListener("scroll", fixnavbar);
window.addEventListener("scroll", currentNavBar);
// Form 
const dropForm = document.querySelector('#dropdownForm');
document.querySelector('#btm-drop').addEventListener('click', function() {
    if (dropForm.style.display !== "none") {
        dropForm.style.display = "none";
        dropForm.style.height = "0%";
    } else {
        dropForm.style.display = "block";
        dropForm.style.height = "auto";
    }

});
document.querySelector('#close-form').addEventListener('click', function() {
    if (dropForm.style.display !== "none") {
        dropForm.style.display = "none";
    } else {
        dropForm.style.display = "block";
    }

});