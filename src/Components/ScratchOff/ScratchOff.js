import React, { useRef, useEffect, useContext } from "react";
import canvasScratchCard from "canvas-scratch-card";
import "./ScratchOff.css";
import Image from "../../images/scratch.png";
import { SAYINGS } from "../../STORE";
import Context from "../../Context";

export default function ScratchOff() {
    const state = useContext(Context);
    console.log(state.currentScratchOffSaying);
    const ref = useRef(null);
    let num = Math.random() * Object.keys(SAYINGS).length;
    console.log(num);
    let say = SAYINGS[Math.floor(num)];
    console.log(say);
    useEffect(() => {
        canvasScratchCard.init({
            dom: ref.current,
            r: 20, // radius default 20
            rate: 0.5, // when to call callback 0.1 - 1,
            image: Image, // <img> dom or url
            //fillColor: "l",
            callback: () => {
                //happens on release
                //canvasScratchCard.reset();
            },
        });

        //state.setCurrentScratchSaying(say);
        //console.log(state.currentScratchOffSaying);
    }, []);
    return (
        <section className="scratch-off">
            <div className="container">
                <div
                    className="card"
                    ref={ref}
                    style={{
                        width: "250px",
                        height: "250px",
                        margin: "0 auto",
                    }}
                />
                <div className="words">
                    <h2>{say}</h2>
                </div>
            </div>
        </section>
    );
}
