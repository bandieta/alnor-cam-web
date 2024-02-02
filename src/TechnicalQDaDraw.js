import { fabric } from 'fabric';
import { zoomToFit, drawLine, normalizeParameters } from './TechnicalHelpers';


const drawShape = (canvas, { a, b, L}) => {

  a = a ? parseFloat(a) : 100;
  b = b ? parseFloat(b) : 100;
  L = L ? parseFloat(L) : 300;
  const p = 25;
  const maxNorm = 800;
  const dX = 120; // space between shapes

  const parameters = { a: a, b: b, L: L };
  const normalizedParams = normalizeParameters(parameters, maxNorm);

  a = normalizedParams.a;
  b = normalizedParams.b;
  L = normalizedParams.L;

  const tunelleft = [
    { x: 0, y: 0 },
    { x: p, y: 0 },
    { x: p, y: b },
    { x: 0, y: b }
  ];

  const tunelcenter = [
    { x: p, y: 0 },
    { x: L - p, y: 0 },
    { x: L - p, y: b },
    { x: p, y: b }
  ];

  const tunelright = [
    { x: L - p, y: 0 },
    { x: L, y: 0 },
    { x: L, y: b },
    { x: L - p, y: b }
  ];

  const tunelBinner = [
    { x: L + dX, y: 0 },
    { x: L + dX + a, y: 0 },
    { x: L + dX + a, y: b },
    { x: L + dX, y: b }
  ];

  const tunelBoutter = [
    { x: L + dX - p, y: -p },
    { x: L + dX + a + p, y: -p },
    { x: L + dX + a + p, y: b + p },
    { x: L + dX - p, y: b + p}
  ];

  const tunnelOptions = { fill: 'transparent', stroke: 'black' };
  
  const drawPolygon = (points) => {
    const polygon = new fabric.Polygon(points.map(({ x, y }) => new fabric.Point(x, y)), {
      ...tunnelOptions
    });
    canvas.add(polygon);
  };


  drawPolygon(tunelleft);
  drawPolygon(tunelcenter);  
  drawPolygon(tunelright);

  drawPolygon(tunelBinner);
  drawPolygon(tunelBoutter);


  drawLine(canvas, -3, -p, -3, b + p);    
  drawLine(canvas, L, -p, L, b + p);

  const textL = new fabric.Text('L', { left: L/2, top: b+dX, fontSize: 30,  fill: 'black'});
  canvas.add(textL);
  drawLine(canvas, 0, b+dX, L , b+dX);
  drawLine(canvas, 0, b+dX-p/2, 0 , b+dX+p/2);
  drawLine(canvas, L, b+dX-p/2, L , b+dX+p/2);


  const textA = new fabric.Text('a', { left: (L + dX)+a/2, top: -dX-40, fontSize: 30,  fill: 'black'});
  canvas.add(textA);
  drawLine(canvas, L + dX, -dX, L+dX+a , -dX);
  drawLine(canvas, L + dX, -dX-p/2, L + dX, -dX+p/2);
  drawLine(canvas, L+dX+a , -dX-p/2, L+dX+a , -dX+p/2);


  const textB = new fabric.Text('b', { left: L+dX/2-20, top: b/2, fontSize: 30,  fill: 'black'});
  canvas.add(textB);
  drawLine(canvas, L+dX/2, 0, L+dX/2 , b);
  drawLine(canvas, L+dX/2-p/2, 0, L+dX/2+p/2, 0);
  drawLine(canvas, L+dX/2-p/2, b, L+dX/2+p/2 , b);



  zoomToFit(canvas)
  // Drawing dimension labels and other details can be done similarly
};

export default drawShape;
