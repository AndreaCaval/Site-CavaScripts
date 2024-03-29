//Get the button
let mybutton = document.getElementById("scroll-up");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener('click', toTop)

function toTop() {
    document.body.scrollTop = -10; // For Safari
    document.documentElement.scrollTop = -100; // For Chrome, Firefox, IE and Opera
}

/*==================== SCROLL REVEAL SECTION ====================*/

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener('scroll', reveal)


//faq wrapper
const rdbtns = document.querySelectorAll('[type="radio"]')

rdbtns.forEach(rdbtn => {
    rdbtn.addEventListener('click', uncheck)
});

function uncheck() {
    if (this.classList.contains('open')) {
        this.checked = false
        this.classList.remove('open')
    } else {
        rdbtns.forEach(rdbtn => {
            rdbtn.classList.remove('open')
        });
        this.classList.add('open')
    }
}



function menuToggle() {
    document.getElementById("myNav").style.width == "100%" ?
        document.getElementById("myNav").style.width = "0%" :
        document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


const SITES = [
    "Zalando",
    "SNS",
    "LVR",
    "Asos",
    "Kith EU",
    "Naked",
    "Office",
    "Offspring",
    "Snipes",
    "Solebox",
    "Supreme",
    "Woodwood",
    "Awlab",
    "Here Store",
    "B4B",
    "Footdistrict",
    "Courir",
    "Onygo",
    "LDLC",
    "NBB"
]

SITES.sort()

SITES.forEach(element => {
    const t = '<h2 class="sites__title reveal fade-bottom">' + element + '</h2>'
    document.querySelector(".sites__container").insertAdjacentHTML("beforeend", t)
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}  
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}