const header=document.querySelector('header')
window.addEventListener('scroll',function(){
    header.classList.toggle('sticky', window.scrollY > 120)
})
let menu=document.querySelector('#menu-icon')
let navlist=document.querySelector('.navlist')

menu.addEventListener('click', function(){
   navlist.classList.toggle('active')
   menu.classList.toggle('bx-x')
  

})
window.onscroll = () =>{
    navlist.classList.remove('active')
}


