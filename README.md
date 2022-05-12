# etchasketch
Simple project to create the functionality of an Etch-A-Sketch game. 

**Link to project:** https://luisejaar.github.io/etchasketch/

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

I used event listeners to tell when the user is hovering over a tile and remove them / add the appropriate one when the user selects the buttons on the bottom of the page. The color and darkening options were a little difficult as I needed to generate random colors as well as testing the tile transparency for the darkening option.

## Optimizations

- Update the CSS / presentation
- Using objects
- The grid size change needs to alert the user that it can't be larger than 100 vs console log
- Needs to implement separation of concerns

## Lessons Learned:

At the time of creating this project I didn't know about separation of concerns or objects. So would probably have implemented a simple check
with an on / off for each type button on the bottom instead of turning event listeners on / off constantly. This 
