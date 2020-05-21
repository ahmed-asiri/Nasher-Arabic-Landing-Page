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




highlightOnScroll();

scrollDownToElement();