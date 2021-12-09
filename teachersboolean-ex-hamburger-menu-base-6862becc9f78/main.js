// let unknown = document.querySelector('.close');
// let hamburger = document.querySelector('.hamburger-menu');

// unknown = addEventListener('click', function(){
//     document.getElementsByClassName('hamburger-menu').styleas
    
// })


let toggler = document.getElementById('toggler');
let unknown = document.getElementById('close');
let hamburger = document.getElementById('hamburger')


toggler = addEventListener('click', function(){
    document.getElementById('hamburger').style.display='block';
})

unknown = addEventListener('click', function(){
    document.getElementById('hamburger').style.display='none';
})