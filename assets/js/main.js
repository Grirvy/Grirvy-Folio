/*=========== Show SideBar ===========*/

/*======= SIDEBAR SHOW =======*/
/* Validate If Constant Exists */


/*======== SIDEBAR HIDDEN =======*/
/* Validate If Constant Exists */


/*============ About Boxes ============*/

/*============ Project Box 2 ============*/
const projectsBox = document.getElementById("project-box-2");
    const projects = document.getElementById("projects");

    projectsBox.addEventListener("click", function () {
        if (projects.style.display === "none") {
            projects.style.display = "flex";
        

        } else {
            projects.style.display = "none";

        }
    });

/*============ SKILLS TABS ============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills__active')
            })

            target.classList.add('skills__active')

            tabs.forEach(tab => {
                tab.classList.remove('skills__active')
            })

            tab.classList.add('skills__active')
        })
});

/*============= MIXITUP FILTER PORTFOLIO =============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/*============= Link Active Work =============*/
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
};

linkWork.forEach(l=> l.addEventListener("click", activeWork))

/*====== Work Popup =====*/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work__button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
};

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(
".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body span").innerHTML = portfolioItem.querySelector(
".portfolio__item-details").innerHTML;
};

/*============== SERVICES MODAL ==============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modelBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () => {
        modal(i)
    })
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
});

/*============== SWIPER TESTIMONIAL =============*/


/*============== INPUT ANIMATION ===============*/


/*========== SCROLL SECTIONS ACTIVE LINK =========*/


/*================ SHOW SCROLL UP ==============*/

