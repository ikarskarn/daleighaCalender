import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import ScratchOff from "./Components/ScratchOff/ScratchOff";
import Home from "./Routes/Home";
import DateInfo from "./Components/DateInfo/DateInfo";
import Saying from "./Components/Saying/Saying";
import BackgroundHandler from "./Components/BackgroundHandler/BackgroundHandler";
import Context from "./Context";
import config from "./config";

//console.log("key", process.env.REACT_APP_API_KEY);

class App extends React.Component {
    state = {
        error: null,
        currentDate: new Date(),
        currentYear: new Date().getFullYear(),
        currentMonth: new Date().getMonth() + 1,
        currentScratchOffSaying: "",
        currentImage: "origin",
        getNowInfo: (this.setState = {
            currentDate: new Date().getDate(), //To get the Current Date
            currentMonth: new Date().getMonth() + 1, //To get the Current Month
            currentYear: new Date().getFullYear(), //To get the Current Year
        }),
    };

    updateImage = () => {
        this.setState({ currentImage: "what" });
    };
    render() {
        return (
            <main className="App">
                <BackgroundHandler />
                <Context.Provider value={this.state}>
                    <NavBar />
                    <DateInfo />
                    <Saying />
                    <ScratchOff />
                </Context.Provider>
            </main>
        );
    }
}

export default App;
