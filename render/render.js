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
  const clearButton = document.getElementById('clearButton');

  clearButton.addEventListener('click', clearBoard);
  
  function clearBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  function draw(e) {
    if (!isDrawing) return;

    ctx.lineWidth = isEraser ? 20 : 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = isEraser ? "black" : "white";

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  }
});
