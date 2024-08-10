const rectangles = [
    { width: 1, height: 1 },
    { width: 5, height: 10 },
    { width: 6, height: 6 },
];

const selectedRectangles = rectangles.filter((rectangle) => 2 * (rectangle.width + rectangle.height) > 10);