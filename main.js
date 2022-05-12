//function to set background color to class default
const clearGrid = document.querySelector('#clearGrid');
clearGrid.addEventListener('click', ()=> {
    var pixels = document.getElementById('viewPort').getElementsByTagName('div'); 
    for (i = 0; i < pixels.length; i++) {
        var pixel = pixels[i];
        pixel.style.backgroundColor = "";
        //pixel.style.opacity = 0;
    }
});

//function to create the grid
function gridMaker16x16() {
    for(i=0; i<256;i++){
        const gridContainer = document.querySelector('#viewPort');
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        gridContainer.appendChild(pixel);
    };
};

gridMaker16x16();

//function to take user input and create a grid
const enterButton = document.querySelector('#enter');

enterButton.addEventListener('click',()=> {
    userinput = document.getElementById("gridSize");
    input = Number(userinput.value);
    userinput.value = ""
    
    if (input > 100) {
        console.log('thats too much work');
   } else {
        //remove old grid
        const gridContainer = document.querySelector('#viewPort'); 
        const pixels = document.getElementById('viewPort').getElementsByTagName('div');
        const iterations = pixels.length
        for (i = 0; i < iterations; i++) {
            const pixel = pixels[0];
            pixel.style.backgroundColor = "";
            gridContainer.removeChild(pixel);
            console.log(pixels.length);
        };
        //create new divs for grid
        for(i=0; i<(input**2);i++){
            const gridContainer = document.querySelector('#viewPort');
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            gridContainer.appendChild(pixel);
        };
        document.getElementById("viewPort").style.gridTemplateColumns = `repeat(${input},1fr)`;
    };
    });

//function to set initial color as greyscale
function initialColor () {
    let viewPort = document.getElementById("viewPort");
    viewPort.addEventListener("mouseover", function(e) {
    e.target.style.backgroundColor = "grey";
    });
};

initialColor ();

//setup for grey scale button function
const greyScale = document.querySelector('#greyScale');
greyScale.addEventListener('click', greying);

function greying () {
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

//remove interfering event listeners
rainbowButton.addEventListener('click', ()=> {
    viewPort.removeEventListener("mouseover", dark);
    viewPort.removeEventListener("mouseover", grey);   
});

greyScale.addEventListener('click', ()=> {
    viewPort.removeEventListener("mouseover", dark);
    viewPort.removeEventListener("mouseover", rainbow);  
       
});

darken.addEventListener('click', ()=> {
    viewPort.removeEventListener("mouseover", rainbow);  
    viewPort.removeEventListener("mouseover", grey);
});

//function to set mouseover to "erase" / set to class default
const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', function (e) {       
    let viewPort = document.getElementById("viewPort");
    viewPort.addEventListener("mouseover", function(e) {
        e.target.style.backgroundColor = "";
    });
});