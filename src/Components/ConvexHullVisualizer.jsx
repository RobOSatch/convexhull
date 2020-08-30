import React from "react";
import { forwardRef, useImperativeHandle, useEffect, useRef } from "react";
import {
    getJarvisMarchAnimations,
    getGrahamScanAnimations,
    getQuickhullAnimations,
} from "../Algorithms/jarvisMarch.js";
import { render } from "react-dom";

// Constants
const POINT_COLOR = "cornflowerblue";
const LINE_COLOR = "lightskyblue";
const HULL_COLOR = "royalblue";
const CURR_COLOR = "mediumpurple";
const EXTRA_COLOR = "cornflowerblue";
const AREA_COLOR = "rgb(65,105,225, 0.08)";
const AREA_COLOR_2 = "rgb(100,149,237, 0.08)";

var canvasWidth, canvasHeight;
var numberOfPoints = 50;
var points = [];

var globalContext;
var timeouts = [];

// Animation stuff
var animationDuration = 3000;
var animationSpeed = animationDuration / numberOfPoints;

const generateRandomPoints = () => {
    for (let i = 0; i < numberOfPoints; ++i) {
        let randomVec = {
            x: getRandomInt(canvasWidth / 10, canvasWidth - canvasWidth / 10),
            y: getRandomInt(
                canvasHeight / 10,
                canvasHeight - canvasHeight / 10
            ),
        };
        points.push(randomVec);
    }
};

const renderPoints = (context) => {
    for (let i = 0; i < points.length; ++i) {
        timeouts.push(
            setTimeout(() => {
                let p = points[i];

                for (let j = 0; j < 5; ++j) {
                    timeouts.push(
                        setTimeout(() => {
                            context.beginPath();
                            context.arc(p.x, p.y, j * 3, 0, 2 * Math.PI);
                            context.fill();
                        }, j * animationSpeed)
                    );
                }
            }, (i * animationSpeed) / 10)
        );
    }
};

const simpleDrawPoints = () => {
    globalContext.fillStyle = POINT_COLOR;
    for (let i = 0; i < points.length; ++i) {
        let p = points[i];

        for (let j = 0; j < 5; ++j) {
            globalContext.beginPath();
            globalContext.arc(p.x, p.y, j * 3, 0, 2 * Math.PI);
            globalContext.fill();
        }
    }
};

const drawConvexHull = (convexHull) => {
    globalContext.moveTo(convexHull[0].x, convexHull[0].y);
    for (let i = 1; i < convexHull.length; ++i) {
        globalContext.lineTo(convexHull[i].x, convexHull[i].y);
    }

    globalContext.fillStyle = AREA_COLOR_2;
    globalContext.fill();
};

const executeAnimations = (animations) => {};

const clearTimeouts = () => {
    timeouts.forEach((t) => {
        clearTimeout(t);
    });
    timeouts = [];
};

// Algorithm callers
const jarvisMarch = () => {
    clearTimeouts();

    // Execute jarvis march
    let animations = getJarvisMarchAnimations(points);

    for (let i = 0; i < animations.length; ++i) {
        timeouts.push(
            setTimeout(() => {
                globalContext.clearRect(
                    0,
                    0,
                    globalContext.canvas.width,
                    globalContext.canvas.height
                );

                let currAnim = animations[i];
                globalContext.lineWidth = 10;

                if (currAnim.a !== null) {
                    // draw current comparison
                    globalContext.beginPath();
                    globalContext.strokeStyle = CURR_COLOR;
                    globalContext.moveTo(currAnim.a.x, currAnim.a.y);
                    globalContext.lineTo(currAnim.b.x, currAnim.b.y);
                    globalContext.stroke();

                    // draw current best
                    globalContext.beginPath();
                    globalContext.strokeStyle = EXTRA_COLOR;
                    globalContext.moveTo(currAnim.a.x, currAnim.a.y);
                    globalContext.lineTo(
                        currAnim.currBest.x,
                        currAnim.currBest.y
                    );
                    globalContext.stroke();
                }

                // draw hull so far
                globalContext.beginPath();
                globalContext.strokeStyle = HULL_COLOR;
                drawConvexHull(currAnim.hull);
                globalContext.stroke();

                simpleDrawPoints();

                globalContext.fillStyle = HULL_COLOR;

                globalContext.moveTo(currAnim.hull[0].x, currAnim.hull[0].y);
                for (let i = 0; i < currAnim.hull.length; ++i) {
                    globalContext.beginPath();
                    globalContext.arc(
                        currAnim.hull[i].x,
                        currAnim.hull[i].y,
                        15,
                        0,
                        2 * Math.PI
                    );
                    globalContext.fill();
                }
            }, animationSpeed * i)
        );
    }

    // globalContext.strokeStyle = "mediumpurple";
    // globalContext.lineWidth = 10;

    // globalContext.beginPath();
    // globalContext.moveTo(convexHull[0].x, convexHull[0].y);
    // for (let i = 1; i < convexHull.length; ++i) {
    //     globalContext.lineTo(convexHull[i].x, convexHull[i].y);
    // }

    // globalContext.stroke();
};

const grahamScan = () => {
    // Execute graham scan
};

const quickHull = () => {
    // Execute quickhull
};

const getPixelRatio = (context) => {
    var backingStore =
        context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio ||
        1;

    return (window.devicePixelRatio || 1) / backingStore;
};

const ConvexHullVisualizer = forwardRef((props, ref) => {
    let canvasRef = useRef();

    useImperativeHandle(ref, () => ({
        generateRandomPoints() {
            timeouts.forEach((t) => {
                clearTimeout(t);
            });
            timeouts = [];

            globalContext.clearRect(
                0,
                0,
                globalContext.canvas.width,
                globalContext.canvas.height
            );
            points = [];
            for (let i = 0; i < numberOfPoints; ++i) {
                let randomVec = {
                    x: getRandomInt(200, canvasWidth - 200),
                    y: getRandomInt(200, canvasHeight - 200),
                };
                points.push(randomVec);
            }

            renderPoints(globalContext);
        },
        runJarvisMarch() {
            jarvisMarch();
        },
    }));

    useEffect(() => {
        let canvas = canvasRef.current;
        let context = canvas.getContext("2d");
        globalContext = context;

        let ratio = getPixelRatio(context);
        let width = getComputedStyle(canvas)
            .getPropertyValue("width")
            .slice(0, -2);
        let height = getComputedStyle(canvas)
            .getPropertyValue("height")
            .slice(0, -2);

        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        canvasWidth = canvas.width;
        canvasHeight = canvas.height;

        let requestId;

        // Render Setup
        generateRandomPoints();

        context.beginPath();

        context.fillStyle = POINT_COLOR;
        renderPoints(context);

        context.fill();

        // Main render function
        const render = () => {
            //context.clearRect(0, 0, canvas.width, canvas.height);
            // context.beginPath();
            // context.fillStyle = POINT_COLOR;
            // renderPoints(context);
            // context.fill();
            // requestId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(requestId);
        };
    });

    return (
        <canvas ref={canvasRef} style={{ width: "100%", height: "1080px" }} />
    );
});

// Utility function creating an int in the specified range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default ConvexHullVisualizer;
