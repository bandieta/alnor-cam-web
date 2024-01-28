import React, { useRef, useEffect } from 'react';
import { fabric } from 'fabric';

const TechnicalDrawing = ({ drawFunction, dimensions }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);

    // Clear canvas before drawing
    canvas.clear();

    // Execute the drawFunction to draw the tunnel
    drawFunction(canvas, dimensions);

    // Center the drawing on the canvas
    canvas.centerObject(canvas.item(0));
    canvas.renderAll();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimensions]);

  return <canvas ref={canvasRef} />;
};

export default TechnicalDrawing;
