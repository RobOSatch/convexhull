import { getLeftmostPoint, checkLineForPoint } from "./util.js";

export function getJarvisMarchAnimations(points) {
	let animations = [];

	let pointOnHull = getLeftmostPoint(points);
	let endpoint = points[0];
	let convexHull = [];

	let i = 0;
	while (endpoint !== convexHull[0]) {
		convexHull.push(pointOnHull);
		endpoint = points[0];

		animations.push({
			a: convexHull[i],
			b: endpoint,
			currBest: endpoint,
			hull: convexHull.slice(0),
		});

		for (let j = 0; j < points.length; ++j) {
			animations.push({
				a: convexHull[i],
				b: points[j],
				currBest: endpoint,
				hull: convexHull.slice(0),
			});

			if (endpoint === pointOnHull || checkLineForPoint(convexHull[i], endpoint, points[j]) === -1) {
				endpoint = points[j];

				animations.push({
					a: convexHull[i],
					b: points[j],
					currBest: endpoint,
					hull: convexHull.slice(0),
				});
			}
		}

		i += 1;
		pointOnHull = endpoint;
	}

	convexHull.push(convexHull[0]);

	animations.push({
		a: null,
		b: null,
		currBest: null,
		hull: convexHull,
	});

	return animations;
}