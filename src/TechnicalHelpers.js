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
    const scaleFactor = Math.min(canvas.width / bboxWidth, canvas.height / bboxHeight) / 1.1;

    // Calculate the center point of the bounding box
    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;

    // Apply the scaling factor and center the view
    canvas.viewportTransform = [scaleFactor, 0, 0, scaleFactor, canvas.width / 2 - scaleFactor * centerX, canvas.height / 2 - scaleFactor * centerY];
    canvas.renderAll();
};


const drawLine = (canvas, x1, y1, x2, y2, options = {}) => {
    const defaultOptions = {
        fill: 'transparent',
        stroke: 'black',
        strokeWidth: 1,
    };

    const lineOptions = { ...defaultOptions, ...options };

    const line = new fabric.Line([x1, y1, x2, y2], lineOptions);

    canvas.add(line);

    // Return the created line object if needed
    return line;
};

// const parameters = { a: 500, b: 200, L: 100 };
// const maxNorm = 400;
//
// const normalizedParams = normalizeParameters(parameters, maxNorm);
// console.log(normalizedParams);
function normalizeParameters(params, maxNorm) {
    const scaleFactor = maxNorm / Math.max(...Object.values(params));

    for (let key in params) {
        params[key] *= scaleFactor;
    }

    return params;
}

export {zoomToFit, drawLine, normalizeParameters};
