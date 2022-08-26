//function to set background color to class default
const clearGrid = document.querySelector('#clearGrid');
clearGrid.addEventListener('click', ()=> {
    var pixels = document.getElementById('viewPort').getElementsByTagName('div'); 
    gridMaker(Math.sqrt(pixels.length));
});

//function to create the grid
function gridMaker(number) {
    if(document.querySelector('#viewPort')){
        document.querySelector('#viewPort').remove(); 
    }
    const gameConsole = document.querySelector('.gameConsole');
    const gridContainer = document.createElement('div');
    gridContainer.setAttribute('id','viewPort');
    for(i=0; i<number**2;i++){
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        gridContainer.appendChild(pixel);
    };
    gameConsole.appendChild(gridContainer);
    gridContainer.style.gridTemplateColumns = `repeat(${number},1fr)`;
};

gridMaker(16);

//function to take user input and create a grid
const enterButton = document.querySelector('#enter');

enterButton.addEventListener('click',()=> {
    userinput = document.getElementById("gridSize");
    input = Number(userinput.value);
    userinput.value = "";
    
    if (input > 100) {
        console.log('thats too much work');
   } else {
        //create new divs for grid
        gridMaker(input);
    };
});

//function to set initial color as greyscale
greying ()

//setup for grey scale button function
const greyScale = document.querySelector('#greyScale');
greyScale.addEventListener('click', greying);

function greying () {
    defenAllListeners();
    let viewPort = document.getElementById("viewPort");
    viewPort.addEventListener("mouseover", grey);   
};

function grey (event) {
    event.target.style.backgroundColor = "grey";
    event.target.style.opacity = "";
};

//setup for rainbow button function
const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', coloring);

function coloring () {
    defenAllListeners();
    let viewPort = document.getElementById("viewPort");
    viewPort.addEventListener("mouseover", rainbow);
};

function rainbow (event) {
    function random(number) {
        return Math.floor(Math.random() * (number+1));
    };
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    event.target.style.backgroundColor = rndCol;
    event.target.style.opacity = "";
};

//setup for darken button function
const darken = document.querySelector('#darken');
darken.addEventListener('click', darkening);

function darkening () {
    defenAllListeners();
    let viewPort = document.getElementById("viewPort");
    viewPort.addEventListener("mouseover", dark);    
};

function dark (event) {    
        event.target.style.backgroundColor = "blue";
    if (event.target.style.opacity < 0.2) {
        event.target.style.opacity = "0.2";
    } else if (event.target.style.opacity >= 0.2){
        let current = Number(event.target.style.opacity) + 0.2;
        event.target.style.opacity = current;
    };
};

//function to set mouseover to "erase" / set to class default
const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', erasing);

function erasing () {
    defenAllListeners();
    let viewPort = document.getElementById("viewPort");
    viewPort.addEventListener("mouseover", erase);
}

function erase(event) {
    event.target.style.backgroundColor = "";
    event.target.style.opacity = "";
}

//remove interfering event listeners
function defenAllListeners() {
    viewPort.removeEventListener("mouseover", dark);
    viewPort.removeEventListener("mouseover", grey); 
    viewPort.removeEventListener("mouseover", erase); 
    viewPort.removeEventListener("mouseover", rainbow);  
}

