import React from "react";
import { forwardRef, useImperativeHandle, useEffect, useRef } from "react";
import {
  getJarvisMarchAnimations,
  getGrahamScanAnimations,
  getQuickhullAnimations,
} from "../Algorithms/jarvisMarch.js";

// Constants
const POINT_COLOR = "lightskyblue";
const LINE_COLOR = "lightskyblue";

var canvasWidth, canvasHeight;
var numberOfPoints = 100;
var points = [];

var globalContext;
var timeouts = [];

// Animation stuff
var animationDuration = 2000;
var animationSpeed = animationDuration / numberOfPoints;

const generateRandomPoints = () => {
  for (let i = 0; i < numberOfPoints; ++i) {
    let randomVec = {
      x: getRandomInt(200, canvasWidth - 200),
      y: getRandomInt(100, canvasHeight - 100),
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

const executeAnimations = (context, animations) => {};

// Algorithm callers
const jarvisMarch = () => {
  // Execute jarvis march
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
    let width = getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
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

    // Main render function
    const render = () => {
      //context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();

      context.fillStyle = POINT_COLOR;
      renderPoints(context);

      context.fill();
      requestId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(requestId);
    };
  });

  return <canvas ref={canvasRef} style={{ width: "100%", height: "1080px" }} />;
});

// Utility function creating an int in the specified range
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default ConvexHullVisualizer;
