import React, { useRef, useEffect } from 'react';
import { fabric } from 'fabric';

const TechnicalDrawing = ({ drawFunction, dimensions }) => {
  const canvasRef = useRef(null);  

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);

    canvas.clear();

    drawFunction(canvas, dimensions);

    // Make the object non-editable
    canvas.forEachObject(function(obj) { obj.set('selectable', false); });
    canvas.renderAll();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimensions]);

  return <canvas ref={canvasRef} />;
};

export default TechnicalDrawing;
