module.exports = class Canvas {
    constructor(canvas) {
        this.paintContext = canvas.getContext('2d');

        canvas.addEventListener('mousemove', (function(e) {
            console.log(e.pageX, e.pageY);
            this.xCurrent = e.pageX;
            this.yCurrent = e.pageY;
        }).bind(this), false);

        canvas.addEventListener('mousedown', (function(e) {
            this.xStart = this.xCurrent;
            this.yStart = this.yCurrent;

            this.onPaint();

            canvas.addEventListener('mousemove', this.onPaint.bind(this), false);

        }).bind(this), false);

        canvas.addEventListener('mouseup', (function() {
            //TODO: This does not seem to work!!!!
            canvas.removeEventListener('mousemove', this.onPaint, false);
        }).bind(this), false);

        /* Drawing on Paint App */
        this.lineWidth = 5;
        this.lineCap = 'round';
        this.lineJoin = 'round';
        this.color = 'black';
    }

    set lineWidth(lineWidth) {
        this.paintContext.lineWidth = lineWidth;
    }

    set lineCap(lineCap) {
        this.paintContext.lineCap = lineCap;
    }

    set lineJoin(lineJoin) {
        this.paintContext.lineJoin = lineJoin;
    }

    set color(color) {
        this.paintContext.strokeStyle = color;
    }
  
    onPaint() {
        if (Canvas.distance(this.xStart, this.yStart, this.xCurrent, this.yCurrent) < 5) {
            return;
        }
        
        this.drawLine(this.xStart, this.yStart, this.xCurrent, this.yCurrent);

        this.xStart = this.xCurrent;
        this.yStart = this.yCurrent;
    }

    drawLine(x1, y1, x2, y2) {
        console.log("woop", x1, x2, y1, y2);
        console.log(this.paintContext);
        this.paintContext.beginPath();
        this.paintContext.moveTo(x1, y1);
        this.paintContext.lineTo(x2, y2);
        this.paintContext.stroke();
    }

    static distance (xStart, yStart, xCurrent, yCurrent) {
        return Math.sqrt(Math.pow(xStart - xCurrent, 2) + Math.pow(yStart - yCurrent, 2));  // Pythagoras
    }
}