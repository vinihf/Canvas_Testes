function draw() {
    const canvas = document.getElementById("desenho");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.arc(100, 75, 50, 0, 2 * Math.PI);
      ctx.stroke();    }
  }
  window.addEventListener("load", draw);