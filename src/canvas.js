module.exports = class Canvas {
    constructor(canvas) {
        this.paintContext = canvas.getContext('2d');

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
        this.paintContext.strokeStyle = '#' + color;
    }

    drawLine(x1, y1, x2, y2) {
        this.paintContext.beginPath();
        this.paintContext.moveTo(x1, y1);
        this.paintContext.lineTo(x2, y2);
        this.paintContext.stroke();
    }
}