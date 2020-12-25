import React from "react";
import "./BackgroundHandler.css";
import Context from "../../Context";
import config from "../../config";

class BackgroundHandler extends React.Component {
    static contextType = Context;
    state = {
        error: null,
        currentImage: "not ready",
    };

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/?client_id=${process.env.REACT_APP_API_KEY}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "Accept-Version": "v1",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    return response.json().then((error) => Promise.reject(error));
                }
                return response.json();
            })
            .then((img) => {
                this.setState({
                    currentImage: img.urls.regular,
                });
            })
            .then(console.log(this.currentImage))
            .catch((error) => {
                console.error("Response error: ", error);
            });
    }
    render() {
        return (
            <div className="BackgroundHandler-content">
                <div
                    className="bg-image"
                    style={{ backgroundImage: `url(${this.state.currentImage})` }}
                ></div>
                <div className="cover"></div>
            </div>
        );
    }
}

export default BackgroundHandler;
