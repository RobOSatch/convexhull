export function getGrahamScanAnimations(points) {
    let animations = [];
    let stack = [];

    var counter = false;

    let lowest = getLowestYPoint(points);
    points.sort(function (a, b) { return getPolarAngle(lowest, a) - getPolarAngle(lowest, b) });

    for (let i = 0; i < points.length; ++i) {
        while (stack.length > 1 && ccw(stack[stack.length - 2], stack[stack.length - 1], points[i]) <= 0) {
            animations.push({
                a: stack[stack.length - 1],
                b: stack[stack.length - 1],
                currBest: points[i],
                hull: stack.slice(0),
            });

            stack.pop();
        }

        if (stack.length > 1) {
            animations.push({
                a: stack[stack.length - 1],
                b: stack[stack.length - 1],
                currBest: points[i],
                hull: stack.slice(0),
            });
        }

        stack.push(points[i]);
    }

    stack.push(stack[0]);
    animations.push({
        a: null,
        b: null,
        currBest: null,
        hull: stack.slice(0),
    });

    return animations;
}

function ccw(a, b, c) {
    let val = (b.y - a.y) * (c.x - b.x) -
        (b.x - a.x) * (c.y - b.y);

    if (val == 0) return 0;

    return (val < 0) ? 1 : -1;
}

function getPolarAngle(a, b) {
    let deltaX = (b.x - a.x);
    let deltaY = (b.y - a.y);

    if (deltaX === 0 && deltaY === 0) return 0;

    return Math.atan2(deltaY, deltaX) * 180 / Math.PI;
}

function getLowestYPoint(points) {
    let lowest = points[0];

    for (let i = 1; i < points.length; ++i) {
        if (points[i].y === lowest.y) {
            if (points[i].x < lowest.x) {
                lowest = points[i];
            }
        } else if (points[i].y > lowest.y) {
            lowest = points[i];
        }
    }

    return lowest;
}