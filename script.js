// for navbar bg color change
window.addEventListener('scroll', function(){
    const navbar = document.getElementById('navbar')
    if(window.scrollY > 100){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
})

window.addEventListener('scroll', function(){
    const inside = document.getElementById('insidee1')
    if(window.scrollY > 1600){
        inside.classList.add('car')
    }else{
        inside.classList.remove('car')
    }
})
window.addEventListener('scroll', function(){
    const inside = document.getElementById('insidee2')
    if(window.scrollY > 1600){
        inside.classList.add('car')
    }else{
        inside.classList.remove('car')
    }
})

//buttons on project
function button(){
    
}