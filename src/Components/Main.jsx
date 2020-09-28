import React, { Component } from "react";
import PropTypes from "prop-types";
import ConvexHullVisualizer from "./ConvexHullVisualizer";
import Controls from "./Controls";
import Footer from "./Footer";

var numberOfBars = 10;

var algo = 0;

class Main extends Component {
    parentFunction = (data_from_child, state) => {
        algo = data_from_child;
        const visualizer = this.refs.child;

        this.showDescription(state);

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
                visualizer.runQuickhull();
                //visualizer.heapSort();
                break;
            case 4:
                visualizer.runDeletePoints();
                //visualizer.selectionSort();
                break;
            default:
                break;
        }
    };

    emptyCallback = (empty) => {
        this.setEmpty(empty);
    };

    setEmpty = (empty) => {
        this.refs.controlChild.setEmpty(empty);
    };

    updateBars = () => {
        //this.refs.child.setNumberOfBars();
    };

    animationFinished = () => {
        this.refs.controlChild.enableUI();
        this.refs.footerChild.showDescription(false);
    };

    showDescription = (state) => {
        this.refs.footerChild.showDescription(algo, state);
    };

    render() {
        return (
            <div>
                <Controls
                    ref="controlChild"
                    functionCallFromParent={this.parentFunction.bind(this)}
                    updateBars={this.updateBars.bind(this)}
                ></Controls>
                <ConvexHullVisualizer
                    ref="child"
                    emptyCallback={this.emptyCallback.bind(this)}
                    animationFinished={this.animationFinished.bind(this)}
                ></ConvexHullVisualizer>
                <Footer
                    ref="footerChild"
                    showDescription={this.showDescription.bind(this)}
                ></Footer>
            </div>
        );
    }
}

export default Main;
