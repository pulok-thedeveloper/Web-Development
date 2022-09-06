console.log('DOM Events');

function makeRed() {
    document.body.style.backgroundColor = "red";
  }

function makeGreen() {
    document.body.style.backgroundColor = "green";
}

function makePurple() {
    document.body.style.backgroundColor = "Purple";
}

const makeGreenButton =document.getElementById('make-green');
makeGreenButton.onclick = makeGreen;


const makepurple = document.getElementById('make-purple');

makepurple.addEventListener('click', makePurple);


document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor='goldenrod';
} )
