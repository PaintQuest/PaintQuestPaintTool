import Canvas from './canvas';

window.onload = function() {

  var canvasContext = document.querySelector('#paint');
  var sketch = document.querySelector('#sketch');
  var sketch_style = getComputedStyle(sketch);
  canvasContext.width = parseInt(sketch_style.getPropertyValue('width'));
  canvasContext.height = parseInt(sketch_style.getPropertyValue('height'));

  let canvas = new Canvas(canvasContext);

  let xStart, yStart, xCurrent, yCurrent;

/* Mouse Capturing Work */
  canvasContext.addEventListener('mousemove', function(e) {
    xCurrent = e.pageX - this.offsetLeft;
    yCurrent = e.pageY - this.offsetTop;
  }, false);

  canvasContext.addEventListener('mousedown', function(e) {
    xStart = xCurrent;
    yStart = yCurrent;

    onPaint();

    canvasContext.addEventListener('mousemove', onPaint, false);

  }, false);

  canvasContext.addEventListener('mouseup', function() {
    canvasContext.removeEventListener('mousemove', onPaint, false);
  }, false);

  var distance = function(xStart, yStart, xCurrent, yCurrent) {
    return Math.sqrt(Math.pow(xStart - xCurrent, 2) + Math.pow(yStart - yCurrent, 2));  // Pythagoras
  }

  var onPaint = function() {

    if (distance(xStart, yStart, xCurrent, yCurrent) < 5) {
      return;
    }
    
    canvas.drawLine(xStart, yStart, xCurrent, yCurrent);
    xStart = xCurrent;
    yStart = yCurrent;
  };
};
