// change navbar styles on scroll
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scroll > 0)
})