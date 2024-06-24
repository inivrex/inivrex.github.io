//Global Variables Here
const smallProjects = document.getElementById("smallProjects");
const NavMoreLnkBtn = document.getElementById("NavMoreLnkBtn");
const MoreNavWin = document.getElementById("MoreNavWin");
const MoreNavMWin = document.getElementById("MoreNavMWin");
const dateIn = document.getElementById("dateIn");
const TimeIn = document.getElementById("TimeIn");
const section = document.querySelector("section");
const navlinks = document.getElementsByClassName("navlinks");


section.addEventListener("click", () => {
    MoreNavMWin.style.display = "none";
    MoreNavWin.style.height = "0rem";
})
for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", () => {
        MoreNavMWin.style.display = "none";
        MoreNavWin.style.height = "0rem";
    })

}
NavMoreLnkBtn.addEventListener("click", () => {
    if (MoreNavWin.style.height != "10rem") {
        MoreNavWin.style.height = "10rem";
        MoreNavMWin.style.display = "flex";
    } else {
        MoreNavMWin.style.display = "none";
        MoreNavWin.style.height = "0rem";
    }
})
function changeTime() {
    let Fulldate = new Date;
    let date = Fulldate.getDate();
    let month = Fulldate.getMonth() + 1;
    let year = Fulldate.getFullYear();
    let hours = Fulldate.getHours();
    let minutes = Fulldate.getMinutes();
    let seconds = Fulldate.getSeconds();
    let FinalDate = `${date}-${month}-${year}`;
    let FinalTime = `${hours}-${minutes}-${seconds}`;
    dateIn.value = FinalDate;
    TimeIn.value = FinalTime;
}

//Adding Date and time when someone submit query.
setInterval(() => {
    changeTime();
}, 1000);
//Remove the id name from url when someone click on nav links

for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", () => {
        window.addEventListener("hashchange", () => window.history.pushState({}, "", '/'), {});
    });
};

//Setting Images for Web Projects
let ProImgLinksArr = ['https://inivrex.in/Files/BorderMovingAnimation.png', 'https://inivrex.in/Files/LoadingEffect2.png', 'https://inivrex.in/Files/LoadingEffect3.png', 'https://inivrex.in/Files/ContactUs.png', 'https://inivrex.in/Files/FillingColorEffects.png'];
let imgDesProArr = ["Border Moving Animation", "Loading Effect 2", "Loading Effect 3", "Contact us form", "Filling Color Effects"];
let ProImgLinks = document.getElementsByClassName("ProImgLinks");
let imgDesPro = document.getElementsByClassName("imgDesPro");
for (let i = 0; i < ProImgLinks.length; i++) {
    ProImgLinks[i].setAttribute("src", ProImgLinksArr[i]);
    imgDesPro[i].textContent += imgDesProArr[i];
}

// Scroll Navigation Show 
window.addEventListener('scroll', function () {

    MoreNavMWin.style.display = "none";
    MoreNavWin.style.height = "0rem";
    var navbar = document.querySelector('nav');
    var navbarHeight = navbar.offsetHeight;

    if (window.pageYOffset >= navbarHeight + 200) {
        navbar.classList.add('fixed');
        MoreNavWin.style.position = 'fixed';
        MoreNavWin.style.top = '3.7rem';
        document.body.style.marginTop = '8rem';
    } else {
        navbar.classList.remove('fixed');
        MoreNavWin.style.position = 'absolute';
        document.body.style.marginTop = '0rem';
        document.body.style.transition = '0s';
    }
});


//Move effect 
document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll('.scroll-animate');

    function checkVisibility() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        elements.forEach(function (element) {
            var rect = element.getBoundingClientRect();
            if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0) {
                element.classList.add('visible');
            }
        });

        // Reset elements if scroll offset is 0
        if (scrollTop === 0) {
            elements.forEach(function (element) {
                element.classList.remove('visible');
                // Trigger reflow to restart animation
                void element.offsetWidth;
            });
        }
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Initial check
    checkVisibility();
});


// smooth scroll effect 