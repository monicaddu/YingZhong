function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);
  
  document.body.style.background = bgColor;
}

// Symmetry corresponding to the number of reflections. Change the number for different number of reflections 
let symmetry = Math.floor(Math.random() * 15);   

let angle = 360 / symmetry;
let saveButton, mouseButton, keyboardButton;
let sw = Math.floor(Math.random() * 25);
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

function setup() { 
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  random_bg_color();
  stroke(Math.random() * 256,Math.random() * 256,Math.random() * 256);

  // Creating the save button for the file
  saveButton = createButton('save');
  saveButton.mousePressed(saveFile);
}

// Save File Function
function saveFile() {
  save('design.jpg');
}

function draw() {
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
    
    if (mouseIsPressed) {

      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        strokeWeight(sw);
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}
