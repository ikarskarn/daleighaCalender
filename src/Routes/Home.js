import React from "react";
import "./Home.css";
import Context from "../Context";

class Home extends React.Component {
    static contextType = Context;
    render() {
        return (
            <div className="home-content">
                <p>Home page content goes here</p>
            </div>
        );
    }
}

export default Home;
