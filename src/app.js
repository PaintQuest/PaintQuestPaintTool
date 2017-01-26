import Canvas from './canvas';

window.onload = function() {

  var canvasContext = document.querySelector('#paint');
  var sketch = document.querySelector('#sketch');
  var sketch_style = getComputedStyle(sketch);
  canvasContext.width = parseInt(sketch_style.getPropertyValue('width'));
  canvasContext.height = parseInt(sketch_style.getPropertyValue('height'));

  let canvas = new Canvas(canvasContext);
};
