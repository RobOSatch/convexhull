import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            algo: -1,
        };
    }

    showDescription = (algo) => {
        console.log(algo);

        var elem = document.getElementsByClassName("description");
        elem[0].style.top = "0px";
    };

    render() {
        return (
            <div className="descriptionBox">
                <div className="description">
                    <span>
                        Jarvis March operates in O(n*n). It works by starting at
                        the leftmost point (which is obviously part of the
                        convex hull) and checking every point in the set to
                        determine the point with the greatest angle. This point
                        gets added to the convex hull. The algorithm reapeats
                        this for every new point it finds. The process looks a
                        lot like you're wrapping the set with a ribbon, hence
                        the nickname "Gift wrapping".
                    </span>
                </div>
            </div>
        );
    }
}

export default Footer;
