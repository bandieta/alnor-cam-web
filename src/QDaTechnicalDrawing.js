import React, { Component } from 'react';
import { fabric } from 'fabric';

class QDaTechnicalDrawing extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const canvas = new fabric.Canvas(this.canvasRef.current, {
      width: 1000,
      height: 400,
      selection: false,
      controlsAboveOverlay: true,
      preserveObjectStacking: true,
    });

    const { a, b, L } = this.props;
    const scaleFactor = Math.min(700 / a, 300 / L);

    const rectWidth = a * scaleFactor;
    const rectHeight = b * scaleFactor;
    const bLineStartX = 50 + rectWidth + 30;
    const bLineEndX = bLineStartX + L * scaleFactor;

    const frontRect = new fabric.Rect({
      left: 50,
      top: 50,
      width: rectWidth,
      height: rectHeight,
      fill: 'transparent',
      stroke: 'black',
      selectable: false, // Disable object selection
      hasControls: false, // Disable object controls
      hasBorders: false,  // Disable object borders
    });

    const aLine1 = new fabric.Line([50, 45, 50 + rectWidth, 45], { stroke: 'black', selectable: false });
    const aLabel1 = new fabric.Text(`|--a--| ${a}`, {
      left: 50 + rectWidth / 2,
      top: 25,
      fontSize: 16,
      fill: 'black',
      originX: 'center',
      selectable: false,
    });

    const bLine1 = new fabric.Line([50, 80 + rectHeight, 50 + rectWidth, 80 + rectHeight], {
      stroke: 'black',
      selectable: false,
    });
    const bLabel1 = new fabric.Text(`|--b--| ${b}`, {
      left: 50 + rectWidth / 2,
      top: 95 + rectHeight,
      fontSize: 16,
      fill: 'black',
      originX: 'center',
      selectable: false,
    });

    canvas.add(frontRect, aLine1, aLabel1, bLine1, bLabel1);

    const sideRect = new fabric.Rect({
      left: bLineStartX,
      top: 50,
      width: L * scaleFactor,
      height: rectHeight,
      fill: 'transparent',
      stroke: 'black',
      selectable: false,
      hasControls: false,
      hasBorders: false,
    });

    const bLine2 = new fabric.Line([bLineStartX, 45, bLineEndX, 45], { stroke: 'black', selectable: false });
    const bLabel2 = new fabric.Text(`|--b--| ${b}`, {
      left: bLineStartX + (L * scaleFactor) / 2,
      top: 25,
      fontSize: 16,
      fill: 'black',
      originX: 'center',
      selectable: false,
    });

    const LLine = new fabric.Line([bLineEndX, 80 + rectHeight, bLineEndX, 50], { stroke: 'black', selectable: false });
    const LLabel = new fabric.Text(`|--L--| ${L}`, {
      left: bLineEndX + 20,
      top: 50 + rectHeight / 2,
      fontSize: 16,
      fill: 'black',
      selectable: false,
    });

    canvas.add(sideRect, bLine2, bLabel2, LLine, LLabel);

    canvas.setZoom(1.0); // Initial zoom level

    // Enable panning (moving) of the canvas
    canvas.isDrawingMode = false;
    canvas.selection = true;
    canvas.hoverCursor = 'grab';

    canvas.on('mouse:down', (event) => {
      if (event.target) {
        // If an object is clicked, prevent panning
        canvas.isDragging = false;
      } else {
        // If the canvas is clicked, allow panning
        canvas.isDragging = true;
        canvas.lastPosX = event.e.clientX;
        canvas.lastPosY = event.e.clientY;
      }
    });

    canvas.on('mouse:move', (event) => {
      if (canvas.isDragging) {
        const e = event.e;
        canvas.viewportTransform[4] += e.clientX - canvas.lastPosX;
        canvas.viewportTransform[5] += e.clientY - canvas.lastPosY;
        canvas.requestRenderAll();
        canvas.lastPosX = e.clientX;
        canvas.lastPosY = e.clientY;
      }
    });

    canvas.on('mouse:up', () => {
      canvas.isDragging = false;
    });

    canvas.on('mouse:wheel', (event) => {
      const delta = event.e.deltaY;
      let zoom = canvas.getZoom();
      zoom = zoom + delta / 200;
      if (zoom > 5) zoom = 5;
      if (zoom < 0.5) zoom = 0.5;
      canvas.zoomToPoint({ x: canvas.width / 2, y: canvas.height / 2 }, zoom);
      event.e.preventDefault();
      event.e.stopPropagation();
    });

    canvas.renderAll();
  }

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        style={{ border: '1px solid black' }}
      />
    );
  }
}

export default QDaTechnicalDrawing;
