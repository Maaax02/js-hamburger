
let toggler = document.getElementById('toggler');
let unknown = document.getElementById('close');
let hamburger = document.getElementById('hamburger')


toggler.addEventListener('click', function(){
    hamburger.style.display='block';
})

unknown.addEventListener('click', function(){
    hamburger.style.display='none';
})