
// Min Input element
const myInput = document.getElementById('myinput');

// Min Display element
const myDisplay = document.getElementById('mydisplay');


myInput.addEventListener('keyup', (e) => {

    console.log(e);
    myDisplay.innerHTML += e.key

});