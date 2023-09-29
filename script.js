//Header

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle()
})

//Efecto escribiendo

let typed = new Typed('.auto-input',{
    strings: ['Desarrollador Web'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 300,
    loop: false,
})