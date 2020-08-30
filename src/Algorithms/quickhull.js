import { getLeftmostPoint, getRightmostPoint, checkLineForPoint, distToSegment } from "./util.js";

export function getQuickhullAnimations(points) {
	let animations = [];

	let convexHull = [];
	let leftmost = getLeftmostPoint(points);
	let rightmost = getRightmostPoint(points);
	convexHull.push(leftmost);
	convexHull.push(rightmost);

	animations.push({
		a: leftmost,
		b: rightmost,
		currBest: rightmost,
		hull: convexHull.slice(0),
	});

	let S1 = [];
	let S2 = [];
	for (let i = 0; i < points.length; ++i) {
		let orientation = checkLineForPoint(leftmost, rightmost, points[i]);
		if (orientation < 0) {
			S1.push(points[i]);
		}

		if (orientation > 0) {
			S2.push(points[i]);
		}
	}

	findHull(S1, leftmost, rightmost, convexHull, animations);
	findHull(S2, rightmost, leftmost, convexHull, animations);

	// animations.push({
	// 	a: null,
	// 	b: null,
	// 	currBest: null,
	// 	hull: convexHull,
	// });

	return animations;
}

function findHull(S, p, q, convexHull, animations) {
	if (S.length === 0) {
		return;
	}

	let farthest = S[0];
	let bestDist = distToSegment(farthest, p, q);

	// Find farthest point from PQ
	for (let i = 0; i < S.length; ++i) {
		let currDist = distToSegment(S[i], p, q);
		if (currDist > bestDist) {
			farthest = S[i];
			bestDist = distToSegment(farthest, p, q);
		}
	}

	for (let i = 0; i < convexHull.length; ++i) {
		if (convexHull[i] === p) {
			convexHull.splice(i, 0, farthest);
			break;
		}
	}

	animations.push({
		a: p,
		b: q,
		currBest: farthest,
		hull: convexHull.slice(0),
	});

	animations.push({
		a: null,
		b: null,
		currBest: null,
		hull: convexHull.slice(0),
	});

	// Partition
	let left = [];
	let right = [];

	for (let i = 0; i < S.length; ++i) {
		let rightOfPC = checkLineForPoint(p, farthest, S[i]) > 0;
		let leftOfQC = checkLineForPoint(q, farthest, S[i]) < 0;

		if (rightOfPC && leftOfQC) {
			continue;
		} else if (!rightOfPC && S[i] !== p && S[i] !== farthest) {
			left.push(S[i]);
		} else if (!leftOfQC && S[i] !== q && S[i] !== farthest) {
			right.push(S[i]);
		}
	}

	findHull(left, p, farthest, convexHull, animations);
	findHull(right, farthest, q, convexHull, animations);
}