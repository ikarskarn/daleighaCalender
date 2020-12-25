import React from "react";
import "./Saying.css";
import Context from "../../Context";
import { CUSTOM_MESSAGES, RANDOM_MESSAGES } from "../../STORE";

class Saying extends React.Component {
    static contextType = Context;
    getSaying = () => {
        let str = "";
        str = CUSTOM_MESSAGES[1125];
        return str;
    };
    render() {
        return (
            <section className="saying-content">
                <p>{this.getSaying()}</p>
            </section>
        );
    }
}

export default Saying;
