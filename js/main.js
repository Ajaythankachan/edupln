// ----------------------------------------------------------------------------- gsap animations 

let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } })
let flagPoles = CSSRulePlugin.getRule(".card:before");

tl.to('.main-hd', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.2 })
tl.to('.sub-head', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0 }, "-=2")
// tl.to('.contact-bnr-btn', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0 }, "-=4")
// tl.from('.sub-card', { scaleY: 0, stagger: .2 }, "-=2")
// tl.from(flagPoles, { stagger: 1, opacity: 0, transform: 'translateY(100px)' }, "-=2")
// tl.to('.title, .desc', { stagger: .1, duration: 1.2, opacity: 1, y: 0 }, "-=2")
// tl.to('footer', { opacity: 1 }, "-=2")
window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if (this.scrollY <= 10) nav.className = 'navbar-expand-lg navbar absolute-nav'; else nav.className = 'scroll navbar-expand-lg navbar absolute-nav';
};


AOS.init({

});
    $('.country-carousel').owlCarousel({
        loop: true,
    margin: 30,
    nav: false,
    responsive: {
        0: {
        items: 1
            },
    600: {
        items: 3
            },
    1000: {
        items: 5
            }
        }
    })
    $('.course-carousel').owlCarousel({
        loop: true,
    margin: 30,
    nav: true,
    navText: ["<img src='assets/web-img/left-chevron.png'>", "<img src='assets/web-img/right-chevron.png'>"],
        responsive: {
            0: {
            items: 1
            },
        650: {
            items: 2
            },
            768: {
                items: 2
            },
        1000: {
            items: 3
            }
        }
    })
        $('.happy-student-carousel').owlCarousel({
            loop: true,
        autoplay: true,
        autoplay: true,
        autoplayTimeout: 1520,
        smartSpeed: 1500,
        animateIn: 'linear',
        animateOut: 'linear',
        margin: 30,
        nav: false,
        navText: ["<img src='assets/web-img/left-chevron.png'>", "<img src='assets/web-img/right-chevron.png'>"],
            responsive: {
                0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 7
            }
        }
    })

            function truncateText(text, letters = 90) {
                let truncatedText = text.slice(0, letters);
            let truncatedToHTML = `<p class="truncate">${truncatedText}...</p>`;

            return truncatedToHTML;
    }

            /* Select all card text containers */
            let cards = document.getElementsByClassName("aboutservice-p");

            /* Save texts within the cards as plain text */
            let plainText = [];
            for (let i = 0; i < cards.length; i++) {
                plainText[i] = cards[i].innerText;
    }

            /* Save the original card texts */
            let htmlText = [];
            for (let i = 0; i < cards.length; i++) {
                htmlText[i] = cards[i].innerHTML;
    }

            /* Add truncated text inside the cards */
            for (let i = 0; i < cards.length; i++) {
                cards[i].innerHTML = truncateText(plainText[i]);
    }

            /* Add events to all buttons */
            let btns = document.getElementsByClassName("more-icon");

            for (let i = 0; i < cards.length; i++) {
                btns[i].addEventListener("click", function () {

                    var newText = "See Less -";
                    var oldText = "See More +"

                    document.getElementById("more").innerHTML = newText;
                    console.log(newText)
                    /* If the first child in the card text container has 'truncate' class... */
                    if (cards[i].firstChild.className == "truncate") {
                        /* Add their full text */
                        cards[i].innerHTML = htmlText[i];
                        document.getElementById("more").innerHTML = newText;
                    } else {
                        /* Add their truncated text */
                        document.getElementById("more").innerHTML = oldText;
                        cards[i].innerHTML = truncateText(plainText[i]);
                    }
                });
    }



            let card = document.querySelectorAll(".card");
            let contentBox = document.querySelectorAll(".contentBox");

            for (let i = 0; i < card.length; i++) {
                card[i].addEventListener("click", function () {
                    for (let i = 0; i < contentBox.length; i++) {
                        contentBox[i].className = "contentBox";
                    }
                    document.getElementById(this.dataset.id).className = "contentBox active";

                    for (let i = 0; i < card.length; i++) {
                        card[i].className = "card";
                    }
                    this.className = "card active";
                });
    }
// Replace 'your-animation.json' with the path to your Lottie animation file
const animationPath = 'lottie/1.json';

// Replace 'lottie-container' with the id of your container
const container = document.getElementById('lottie-container');

// Load and play the animation
const animation = lottie.loadAnimation({
    container: container,
    renderer: 'svg', // Use 'svg' or 'canvas' as per your preference
    loop: true, // Set to true for looped animations
    autoplay: true, // Set to true to start the animation automatically
    path: animationPath,
});
