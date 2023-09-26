let topBtn = document.querySelector('.top')
let body = document.body;
let docElem = document.documentElement;
let scrollPos;
let DocHeight;
let offset = '';
// calculate docheight and find offset
DocHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if(DocHeight != undefined){
    offset = DocHeight / 4;
}

function styleNavlinks(e){
    let currentBtn = document.querySelectorAll('.styleLink');
    currentBtn[0].className = currentBtn[0].className.replace('styleLink', ' ');
    e.classList.add('styleLink')
    return
}
window.addEventListener('scroll', function(){
    // make to top btn visible on scroll
    scrollPos = body.scrollTop || docElem.scrollTop;
    if (scrollPos > offset) {
        topBtn.classList.add('visible')
    }else{
        topBtn.classList.remove('visible')
    }
    // automatic styling to each navlink when when scroll == section
    navLinks.forEach(function (e){
        if (e.dataset.name === 'about' && scrollPos > 50 ) {
            styleNavlinks(e)
        } else if (e.dataset.name === 'skills' && scrollPos > 400) {
            styleNavlinks(e)
        } else if (e.dataset.name === 'projects' && scrollPos > 820) {
            styleNavlinks(e)
        }else if (e.dataset.name === 'contacts' && scrollPos > 1051) {
            styleNavlinks(e)
        }
    })
});
// Onclick btn take to top
topBtn.addEventListener('click', function(e){
    e.preventDefault();
    docElem.scrollTop = 0;
    navLinks.forEach(function (e){
        if (e.dataset.name === 'about') {
            styleNavlinks(e)
        }
    })
});

const bar = document.getElementById('bar')
const navList = document.querySelector('.navList')
const navContainer = document.querySelector('.navContainer')
const nav = document.querySelector('nav')

bar.addEventListener('click', function () {
    navList.classList.toggle('navListDisplay')
    navContainer.classList.toggle('navContainerDisplay')
    nav.classList.toggle("removeNavShadow")
})

const navLinks = document.querySelectorAll('.navLinks')
const header = document.querySelector('.header')

navLinks.forEach(function (e) {
    e.addEventListener('click', function (e2) {
        //adding the style to a link on each click  
        let currentBtn = document.querySelectorAll('.styleLink');
        currentBtn[0].className = currentBtn[0].className.replace('styleLink', ' ');
        e.classList.add('styleLink')
        // removing the toggle display on each click
        navList.classList.remove('navListDisplay')
        navContainer.classList.remove('navContainerDisplay')
        nav.classList.remove("removeNavShadow")
        e2.preventDefault();
        //getting the height of eachs sectionh header
        const headerHeight = header.getBoundingClientRect().height ;

        //getting the id of each section and the matching links
        const linkId = e2.currentTarget.getAttribute('href').slice(1);
        const matchingId = document.getElementById(linkId)
        let top = matchingId.offsetTop
        console.log(top)
        //executing the scroll
        window.scrollTo({
            left :0, 
            top:top-headerHeight,
        })
    })
})

// SKILLS SECTION SLIDER

const previousBtn = document.querySelector('.left')
const nextBtn = document.querySelector('.right')
const language = document.querySelectorAll('.programs')

language.forEach(function(e,index) {
    e.style.left = `${index*100}%`
})


let counter = 0;
nextBtn.addEventListener('click', function () {
    counter ++
    caousel()
})
previousBtn.addEventListener('click', function () {
    counter--
    caousel()
})

function caousel() {
    if (counter == language.length) {
        counter = 0;
    }
    if (counter<0) {
        counter = language.length-1
    }
    language.forEach(function (e) {
        e.style.transform = `translateX(-${counter * 100}%)`
    })
}

const feedBackBtn = document.getElementById('feedback')

feedBackBtn.addEventListener('click', function(){
    
})