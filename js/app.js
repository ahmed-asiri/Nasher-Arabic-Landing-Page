function scrollDownToElement() {
    let ul = document.querySelector('#nav-bar ul');
    ul.addEventListener('click', function (eve) {
        let navElement;
        if (eve.target.nodeName === 'A') {
            eve.preventDefault();
            navElement = document.querySelector('#' + eve.target.id).parentElement;
            document.querySelector('.' + navElement.id).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        }
    });
}


function highlightOnScroll() {
    document.addEventListener('scroll', function () {
        let sections = document.querySelectorAll('section');
        for (let section1 of sections) {
            let sectionCordinate = section1.getBoundingClientRect();
            let viewPortHieght = window.innerHeight;
            navElement = document.querySelector('#' + section1.className);
            if ((sectionCordinate.top <= viewPortHieght / 2 && sectionCordinate.top >= 0)
                || sectionCordinate.bottom >= viewPortHieght / 2 && sectionCordinate.bottom <= viewPortHieght) {
                    navElement.classList.add('highilgted');
            } else if ((sectionCordinate.bottom <= viewPortHieght / 2 && sectionCordinate.bottom >= 0) ||
                (sectionCordinate.top <= viewPortHieght && sectionCordinate.top >= viewPortHieght / 2)) {
                    navElement.classList.remove('highilgted');
            }
        }
    });
}

function scrollDownToElementTest() {
    let ul = document.querySelector('#nav-bar ul');
    ul.addEventListener('click', function (eve) {
        let navElement;
        if (eve.target.nodeName === 'A') {
            eve.preventDefault();
            navElement = document.querySelector('#' + eve.target.id).parentElement;
            document.querySelector('.' + navElement.id);
        }
    });
}

function scrollDownToElementWithoutOptions() {
    let ul = document.querySelector('#nav-bar ul');
    ul.addEventListener('click', function (eve) {
        let navElement;
        if (eve.target.nodeName === 'A') {
            eve.preventDefault();
            navElement = document.querySelector('#' + eve.target.id).parentElement;
            document.querySelector('.' + navElement.id).scrollIntoView();
        }
    });
}

function scrollDownToElementWithoutOptionsAndFixingSafariProblem() {
    let anchElements = document.querySelectorAll('#nav-bar ul a');
    anchElements[0].parentElement.parentElement.addEventListener('click', function (eve) {
        let navElement;
        if (eve.target.nodeName === 'A') {
            eve.preventDefault();
            for(let anchElement of anchElements) {
                if(anchElement.id === eve.target.id){
                    navElement = document.querySelector('#' + eve.target.id).parentElement;
                    document.querySelector('.' + navElement.id).scrollIntoView();
                    setTimeout(function() {
                        for(let a of anchElements){
                            if(a.id != eve.target.id){
                                a.classList.remove("highilgted");
                            }
                        } 
                    }, 1000);
                }
            }
        }
    });
}


highlightOnScroll();

scrollDownToElementWithoutOptionsAndFixingSafariProblem();