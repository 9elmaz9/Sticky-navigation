const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 03bbb0bfcf59d727aa3626d4fbb3a6d4880d5574
