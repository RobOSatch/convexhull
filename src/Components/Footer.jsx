import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            algo: -1,
            algRunning: false,
            text: "sick",
        };
    }

    showDescription = (algo, state) => {
        this.state.algo = algo;

        if (this.state.algRunning !== state) {
            this.state.algRunning = state;

            if (state) {
                var elem = document.getElementsByClassName("description");
                if (elem[0] !== undefined)
                    elem[0].className = "descriptionVisible";

                switch (this.state.algo) {
                    case 1:
                        this.state.text = `Jarvis March works by starting at
                        the leftmost point (which is obviously part of the
                        convex hull) and checking every point in the set to
                        determine the point with the greatest angle. This point is guaranteed to be 
                        part of the convex hull and gets added to our result. The algorithm then repeats this process, starting
                        from that point. Since we are traversing through the entire array once for each of the points, we get a time complexity of O(n^2). The process looks a
                        lot like you're "wrapping" the set with a ribbon, hence
                        the nickname "Gift wrapping algorithm".`;
                        break;
                    case 2:
                        this.state.text = `Graham Scan works by first finding the point with the lowest y coordinate (or the lowest point), 
                        this is the pivot. After that, it sorts the set of points by their polar angle to the pivot. The algorithm then traverses the points, three at a time.
                        These triplets are then checked for the kind of "curve" they form: clockwise or counterclockwise. If there is a counterclockwise turn, we delete
                        the middle point and continue forming the convex hull in this way.`;
                        break;
                    case 3:
                        this.state.text = `Quickhull works much like Quicksort does, as it is fundamentally based on recursion. It also
                        shares Quicksorts time complexity at O(nlogn). First, the algorithm finds the line that
                        stretches from the leftmost to the rightmost point. It separates all points into two groups: Left from that line and right from that line. The recursive step finds
                        the point with the furthest distance from that line and froms a triangle with that point and the original line (that point is part of the convex hull for sure). 
                        All points inside that triangle are discarded. This step gets called recursively until we are done.`;
                        break;
                    default:
                        this.state.text = "ERROR";
                        break;
                }

                this.setState(this.state);
            } else {
                var elem = document.getElementsByClassName(
                    "descriptionVisible"
                );
                if (elem[0] !== undefined) elem[0].className = "description";
            }
        }
    };

    render() {
        var text = this.state.text;
        return (
            <div className="descriptionBox">
                <div className="description">
                    <span>{text}</span>
                </div>
            </div>
        );
    }
}

export default Footer;
