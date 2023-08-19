const config = {
  pen: "White"
}
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("playground");
  const ctx = canvas.getContext("2d");

  canvas.width = 800;
  canvas.height = 600;

  let isDrawing = false;
  let isEraser = false;

  const penButton = document.getElementById("penButton");
  const eraserButton = document.getElementById("eraserButton");

  penButton.addEventListener("click", () => {
    isEraser = false;
  });

  eraserButton.addEventListener("click", () => {
    isEraser = true;
  });

  canvas.addEventListener("mousedown", () => {
    isDrawing = true;
  });

  canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    ctx.beginPath();
  });

  canvas.addEventListener("mousemove", draw);
  const clearButton = document.getElementById("clearButton");

  clearButton.addEventListener("click", clearBoard);

  function clearBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  function draw(e) {
    if (!isDrawing) return;

    ctx.lineWidth = isEraser ? 20 : 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = isEraser ? "black" : config.pen;

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  }



  const colorPicker = document.getElementById('colorPicker');

colorPicker.addEventListener('input', (event) => {
  const selectedColor = event.target.value;
  console.log(selectedColor)
  config.pen = selectedColor
});

colorPicker.addEventListener('change', (event) => {
  const selectedColor = event.target.value;
  console.log(selectedColor)
  config.pen = selectedColor
});


});
//Non DOM

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

import { greet } from '../funcs/run.js';

greet('Dux'); 