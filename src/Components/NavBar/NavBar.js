import React from "react";
import "./NavBar.css";
import Context from "../../Context";

class NavBar extends React.Component {
    static contextType = Context;
    render() {
        return (
            <section className="nav-bar-content">
                <div className="nav-left">
                    <p>Logo</p>
                    <p>Now</p>
                    <p>Calendar</p>
                </div>
                <div className="nav-right">
                    <p>Login</p>
                </div>
            </section>
        );
    }
}

export default NavBar;
