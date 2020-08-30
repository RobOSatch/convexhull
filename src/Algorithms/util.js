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

export function getRightmostPoint(points) {
    let rightmost = points[0];

    for (let i = 1; i < points.length; ++i) {
        if (points[i].x > rightmost.x) {
            rightmost = points[i];
        }
    }

    return rightmost;
}

function sqr(x) { return x * x }
function dist2(v, w) { return sqr(v.x - w.x) + sqr(v.y - w.y) }
function distToSegmentSquared(p, v, w) {
    var l2 = dist2(v, w);
    if (l2 == 0) return dist2(p, v);
    var t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
    t = Math.max(0, Math.min(1, t));
    return dist2(p, {
        x: v.x + t * (w.x - v.x),
        y: v.y + t * (w.y - v.y)
    });
}
export function distToSegment(p, v, w) { return Math.sqrt(distToSegmentSquared(p, v, w)); }