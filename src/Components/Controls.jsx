import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class Controls extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numPoints: 100,
            enabled: [true, true, true, true, true, true, true, true, true],
            sliderEnabled: true,
        };
    }

    childFunction = (algo) => {
        this.props.functionCallFromParent(algo);

        const algoButtons = document.getElementsByClassName("algoBtn");
        var enabled = [];
        const numBars = this.state.numPoints;

        var sliderEnabled = false;

        if (algo !== 0 && algo !== 4) {
            if (!this.state.enabled[0]) {
                for (let i = 0; i < this.state.enabled.length; ++i) {
                    enabled[i] = true;
                    algoButtons[algo - 1].id = "none";
                }
                sliderEnabled = true;
            } else {
                for (let i = 0; i < this.state.enabled.length; ++i) {
                    enabled[i] = false;
                }

                enabled[algo] = true;
                algoButtons[algo - 1].id = "playing";
            }

            this.setState({ numBars, enabled, sliderEnabled });
        }
    };

    enableUI() {
        const buttons = document.getElementsByClassName("algoBtn");

        const enabled = [true];

        for (let i = 0; i < buttons.length; ++i) {
            enabled.push(true);
            buttons[i].id = "none";
        }

        enabled.push(true);

        const numBars = this.state.numPoints;

        this.setState({ numBars, enabled, sliderEnabled: true });
    }

    updateBars = () => {
        this.props.updateBars();
    };

    setNumBars() {
        var slider = document.getElementById("numberOfBars");
        const numBars = slider.value;
        //this.resetArray();
        this.setState({ numBars });
        this.updateBars();
    }

    render() {
        return (
            <div className="controls">
                <button
                    onClick={() => this.childFunction(0)}
                    className="randomizeBtn"
                    disabled={!this.state.enabled[0]}
                >
                    Generate Points
                </button>
                <button
                    onClick={() => this.childFunction(1)}
                    className="algoBtn"
                    id="jarvisBtn"
                    disabled={!this.state.enabled[1]}
                >
                    Jarvis March
                </button>
                <button
                    onClick={() => this.childFunction(2)}
                    className="algoBtn"
                    id="grahamBtn"
                    disabled={!this.state.enabled[2]}
                >
                    Graham Scan
                </button>
                <button
                    onClick={() => this.childFunction(3)}
                    className="algoBtn"
                    id="quickhullBtn"
                    disabled={!this.state.enabled[3]}
                >
                    Quickhull
                </button>
                <button
                    onClick={() => this.childFunction(4)}
                    className="deleteBtn"
                    disabled={!this.state.enabled[4]}
                >
                    <FontAwesomeIcon
                        className="trash"
                        transform="shrink-4 up-3"
                        size="2x"
                        icon={faTrash}
                    />
                </button>
                {/* <br />
        <p>Number of bars: {this.state.numPoints}</p>
        <input
          type="range"
          min="10"
          max="300"
          value={this.state.numPoints}
          disabled={!this.state.sliderEnabled}
          className="slider"
          id="numberOfPoints"
          onChange={() => this.setNumBars()}
        /> */}
            </div>
        );
    }
}

export default Controls;
