

let toggler = document.getElementById('toggler');
let unknown = document.getElementById('close');
let clickCounter = 0;

toggler = addEventListener('click', function(){
    document.getElementById('toggler').style.display='block';
})

unknown = addEventListener('click', function(){
    document.getElementById('close')
    
    clickCounter++;

    if (clickCounter % 2 !==0) {
        document.getElementById('toggler').style.display='none';
    }
    
})