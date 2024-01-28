import { fabric } from 'fabric';

const zoomToFit = (canvas) => {
    const objects = canvas.getObjects();
    
    if (objects.length === 0) {
        return; // No objects to fit
    }

    let minX = Number.MAX_SAFE_INTEGER;
    let minY = Number.MAX_SAFE_INTEGER;
    let maxX = Number.MIN_SAFE_INTEGER;
    let maxY = Number.MIN_SAFE_INTEGER;

    objects.forEach((obj) => {
        const objCoords = obj.getBoundingRect();
        minX = Math.min(minX, objCoords.left);
        minY = Math.min(minY, objCoords.top);
        maxX = Math.max(maxX, objCoords.left + objCoords.width);
        maxY = Math.max(maxY, objCoords.top + objCoords.height);
    });

    const bboxWidth = maxX - minX;
    const bboxHeight = maxY - minY;

    // Calculate the scaling factor to fit the bounding box into the canvas
    const scaleFactor = Math.min(canvas.width / bboxWidth, canvas.height / bboxHeight);

    // Apply the scaling factor
    canvas.zoomToPoint({ x: canvas.width / 2, y: canvas.height / 2 }, scaleFactor);
};

const drawLine = (canvas, x1, y1, x2, y2, options = {}) => {
    // Default options for the line
    const defaultOptions = {
        fill: 'transparent',
        stroke: 'black',
        strokeWidth: 2,
    };

    // Merge default options with provided options
    const lineOptions = { ...defaultOptions, ...options };

    // Create a line object
    const line = new fabric.Line([x1, y1, x2, y2], lineOptions);

    // Add the line to the canvas
    canvas.add(line);

    // Return the created line object if needed
    return line;
};

export default {zoomToFit, drawLine};
