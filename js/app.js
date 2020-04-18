// Global variables
let canvas;

// Colors
let canvas_color;

function setup() {
    canvas_color = color("rgb(123, 123, 123)");
    canvas = createCanvas(400, 400);
    canvas.parent("board-section");
}

function draw() {
    background(canvas_color);
}
