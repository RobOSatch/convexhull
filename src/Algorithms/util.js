// Determines wheater a point M is positioned on the "left" or "right" of AB.
// The parameters need to be point objects containing x and y components.
export function checkLineForPoint(A, B, M) {
    return Math.sign((B.x - A.x) * (M.y - A.y) - (B.y - A.y) * (M.x - A.x));
}

// Returns the leftmost point in the points array
export function getLeftmostPoint(points) {
    let leftmost = points[0];

    for (let i = 1; i < points.length; ++i) {
        if (points[i].x < leftmost.x) {
            leftmost = points[i];
        }
    }

    return leftmost;
}