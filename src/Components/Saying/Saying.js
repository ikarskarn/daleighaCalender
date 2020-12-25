import React from "react";
import "./Saying.css";
import Context from "../../Context";

class Saying extends React.Component {
    static contextType = Context;
    render() {
        return (
            <section className="saying-content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </p>
            </section>
        );
    }
}

export default Saying;
