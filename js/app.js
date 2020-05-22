
function highlightOnScroll() {
    let sections = document.querySelectorAll('section');    // Bring all sections so the event listener can loop through it
    document.addEventListener('scroll', function () {   // event on the document, to keep track when the document have been scrolled.
        for (let section1 of sections) {    // detect each section cordinate to the viewport to highlighted
            let sectionCordinate = section1.getBoundingClientRect();    // get the cordinate of element respective to the viewport
            let viewPortHieght = window.innerHeight;    // get the height of the viewport
            navElement = document.querySelector('#' + section1.className);  // i give the section a class name that equal to the id of the corrisponding <li> element in the nav bar
            if ((sectionCordinate.top <= viewPortHieght / 2 && sectionCordinate.top >= 0)
                || sectionCordinate.bottom >= viewPortHieght / 2 && sectionCordinate.bottom <= viewPortHieght) {
                    navElement.classList.add('highlighted');    // make it highlighted if the element on the viewport
            } else if ((sectionCordinate.bottom <= viewPortHieght / 2 && sectionCordinate.bottom >= 0) ||
                (sectionCordinate.top <= viewPortHieght && sectionCordinate.top >= viewPortHieght / 2)) {
                    navElement.classList.remove('highlighted');     // remove highlighted class if the element got out of the viewport
            }
        }
    });
}


function scrollToElement() {
    let ulElement = document.querySelector('#nav-bar ul');
    ulElement.addEventListener('click', function (eve) {
        let liElement; // this is the <li> element that hold the anchor element user pressed
        let navigatedSection; // this the targeted section to scroll into it
        if (eve.target.nodeName === 'A') {
            eve.preventDefault(); // to prevent anchor from refreshing the page as their default behaviour
            liElement = document.querySelector('#' + eve.target.id).parentElement; // the <li> is the parent element of the pressed anchor element (<a>)
            navigatedSection = document.querySelector('.' + liElement.id); // i give the section class equal to the id of the <li> element, to easily determine where is the direction 
            navigatedSection.scrollIntoView(); // to scroll to the element, we can give him object, to say navigate smooth, but Safari and IE doesn't support, so i decide to use the CSS property (scroll-behavior: smooth;) for smooth on any other browser
            setTimeout(function() { // i use the timeout to solve the problem of safari and IE, (any other browser don't actually need this part of code, they work well with-out it)
                let liElements = ulElement.children; 
                for(let li of liElements){
                    if(li.id != liElement.id){
                        li.classList.remove("highlighted");
                    }
                } 
            }, 400);
        }
    });
}



// IIFE function, invoked when it;s loaded, to prevent the submit button from the default action.
(function () {
    let submitBtn = document.querySelector("form input[type=submit]");
    submitBtn.addEventListener('click', function(eve){
        eve.preventDefault();
    });
})();


// THIS VERSION OF CODE WORK FINE ON ALL BROWSERS EXCEPT (Safari and IE)

// function scrollToElementNotSupportSafariAndIE() {
//     let ulElement = document.querySelector('#nav-bar ul');
//     ulElement.addEventListener('click', function (eve) {
//         let liElement;
//         let navigatedSection;
//         if (eve.target.nodeName === 'A') {
//             eve.preventDefault();
//             liElement = document.querySelector('#' + eve.target.id).parentElement;
//             navigatedSection = document.querySelector('.' + liElement.id);
//                 navigatedSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
//         }
//     });
// }

highlightOnScroll();
scrollToElement();