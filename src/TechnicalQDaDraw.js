import { fabric } from 'fabric';
import { zoomToFit, drawLine } from './TechnicalHelpers';


const drawShape = (canvas, { a, b, L}) => {

  a = a ? parseFloat(a) : 200;
  b = b ? parseFloat(b) : 100;
  L = L ? parseFloat(L) : 1000;
  const p = 25;


  const tunelL = [
    { x: 0 , y: 0 },
    { x: 20 , y: 20 },
    { x: 40 , y: 40 },
    { x: 0 , y: 20 }
  ];

  const tunelab = [
    { x: 0 , y: 0 },
    { x: 20 , y: 20 },
    { x: 40 , y: 40 },
    { x: 0 , y: 20 }
  ];


  
  const tunnelOptions = { fill: 'transparent', stroke: 'black' };
  const drawPolygon = (points) => {
    const polygon = new fabric.Polygon(points.map(({ x, y }) => new fabric.Point(x, y)), {
      ...tunnelOptions,
    });
    canvas.add(polygon);
  };

  drawPolygon(tunelL);
  drawPolygon(tunelab);
  
  zoomToFit(canvas)
  // Drawing dimension labels and other details can be done similarly
};

export default drawShape;
