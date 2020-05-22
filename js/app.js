


function highlightOnScroll() {
    let sections = document.querySelectorAll('section');
    document.addEventListener('scroll', function () {
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
// FIRST VERSION, NOT WORKING ON SAFARI AND IE

// function scrollDownToElement() {
//     let ul = document.querySelector('#nav-bar ul');
//     ul.addEventListener('click', function (eve) {
//         let navElement;
//         if (eve.target.nodeName === 'A') {
//             eve.preventDefault();
//             navElement = document.querySelector('#' + eve.target.id).parentElement;
//             document.querySelector('.' + navElement.id).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
//         }
//     });
// }



// function scrollDownToElementTest() {
//     let ul = document.querySelector('#nav-bar ul');
//     ul.addEventListener('click', function (eve) {
//         let navElement;
//         if (eve.target.nodeName === 'A') {
//             eve.preventDefault();
//             navElement = document.querySelector('#' + eve.target.id).parentElement;
//             document.querySelector('.' + navElement.id);
//         }
//     });
// }

// function scrollDownToElementWithoutOptions() {
//     let ul = document.querySelector('#nav-bar ul');
//     ul.addEventListener('click', function (eve) {
//         let navElement;
//         if (eve.target.nodeName === 'A') {
//             eve.preventDefault();
//             navElement = document.querySelector('#' + eve.target.id).parentElement;
//             document.querySelector('.' + navElement.id).scrollIntoView();
//         }
//     });
// }

// function scrollDownToElementWithoutOptionsAndFixingSafariProblem() {
//     let anchElements = document.querySelectorAll('#nav-bar ul a');
//     anchElements[0].parentElement.parentElement.addEventListener('click', function (eve) {
//         let navElement;
//         if (eve.target.nodeName === 'A') {
//             eve.preventDefault();
//             for(let anchElement of anchElements) {
//                 if(anchElement.id === eve.target.id){
//                     navElement = document.querySelector('#' + eve.target.id).parentElement;
//                     document.querySelector('.' + navElement.id).scrollIntoView();
//                     setTimeout(function() {
//                         for(let a of anchElements){
//                             if(a.id != eve.target.id){
//                                 a.parentElement.classList.remove("highilgted");
//                                 console.log('hey');
//                             }
//                         } 
//                     }, 100);
//                 }
//             }
//         }
//     });
// }

// SOLUTIONS HERE FINALLY

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
                                a.parentElement.classList.remove("highilgted");
                                console.log('hey');
                            }
                        } 
                    }, 100);
                }
            }
        }
    });
}

//enhacment version

function scrollDownToElementWithoutOptionsAndFixingSafariProblem2() {
    let ulElement = document.querySelector('#nav-bar ul');
    ulElement.addEventListener('click', function (eve) {
        let liElement;
        let navigatedSection;
        if (eve.target.nodeName === 'A') {
            eve.preventDefault();
            liElement = document.querySelector('#' + eve.target.id).parentElement;
            navigatedSection = document.querySelector('.' + liElement.id);
            navigatedSection.scrollIntoView();
            setTimeout(function() {
                for(let li of ulElement.children){
                    if(li.id != liElement.id){
                        li.classList.remove("highilgted");
                    }
                } 
            }, 100);
        }
    });
}


function scrollDownToElementWithoutOptionsAndFixingSafariProblem3() {
    let ulElement = document.querySelector('#nav-bar ul');
    ulElement.addEventListener('click', function (eve) {
        let liElement;
        let navigatedSection;
        if (eve.target.nodeName === 'A') {
            eve.preventDefault();
            liElement = document.querySelector('#' + eve.target.id).parentElement;
            navigatedSection = document.querySelector('.' + liElement.id);
            setTimeout(() => {
                navigatedSection.scrollIntoView();
            }, 100);
        }
    });
}


highlightOnScroll();

scrollDownToElementWithoutOptionsAndFixingSafariProblem2();