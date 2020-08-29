import React, { Component } from "react";
import PropTypes from "prop-types";
import ConvexHullVisualizer from "./ConvexHullVisualizer";
import Controls from "./Controls";

var numberOfBars = 10;

var algo = 0;

class Main extends Component {
  parentFunction = (data_from_child) => {
    algo = data_from_child;
    const visualizer = this.refs.child;

    switch (data_from_child) {
      case 0:
        visualizer.generateRandomPoints();
        //visualizer.resetArray();
        break;
      case 1:
        visualizer.runJarvisMarch();
        //visualizer.mergeSort();
        break;
      case 2:
        visualizer.runGrahamScan();
        //visualizer.quickSort();
        break;
      case 3:
        visualizer.runQuickHull();
        //visualizer.heapSort();
        break;
      case 4:
        //visualizer.selectionSort();
        break;
      default:
        break;
    }
  };

  updateBars = () => {
    //this.refs.child.setNumberOfBars();
  };

  animationFinished = () => {
    //this.refs.controlChild.enableUI();
  };

  render() {
    return (
      <div>
        <Controls
          ref="controlChild"
          functionCallFromParent={this.parentFunction.bind(this)}
          updateBars={this.updateBars.bind(this)}
        ></Controls>
        <ConvexHullVisualizer ref="child"></ConvexHullVisualizer>
      </div>
    );
  }
}

export default Main;
