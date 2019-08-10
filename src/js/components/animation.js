import React from 'react';
import '../../css/animation.css';

class Animation extends React.Component {

    componentDidMount() {
        Array
            .from(document.querySelectorAll("span"))
            .reverse()
            .forEach((x) => {
                setTimeout(() => {

                    x.style = `transition: 2.5s ease;opacity:0`;
                }, 1000)
            });

        document
            .querySelector("#title")
            .style = "opacity:0";
        document
            .querySelector("#bulb")
            .style = "opacity:0";

        setTimeout(() => {
            document
                .querySelector("#title")
                .style = "opacity:1;transition:2s ease-in;position:absolute;top:50vh;left:25vw;width:50vw;" +
                    "height:50vh"
        }, 4000);
        setTimeout(() => {
            document
                .querySelector("#bulb")
                .style = "opacity:1;animation : blink 3s;tranisition: 3s ease-in;position:absolute;top:30v" +
                    "h;left:32vw;width:35vw;height:35vh"
        }, 1000);
    }

    render = () => {

        const rball = {
            position: "absolute",
            top: "-8vh",
            left: "-30vw",
            width: "78vw",
            height: "72vw",
            overflow: "hidden"
        };
        const lball = {
            position: "absolute",
            top: "-8vh",
            left: "54vw",
            width: "78vw",
            height: "72vw",
            overflow: "hidden"
        };
        const sdiv = {
            overflow: "hidden",
            position: "realtive"
        }
        const bg = {
            width: "100vw",
            height: "100vh"
        }

        return (
            <div style={sdiv}>
                <img src={require("../../svg/Main_background.svg")} alt="bg" style={bg}/>
                <img src={require("../../svg/Right_ball.svg")} alt="rball" style={rball}/>
                <img src={require("../../svg/Left_ball.svg")} alt="lball" style={lball}/>
                <img src={require("../../svg/Logo_bulb.svg")} alt="logo" id="bulb"/>
                <img
                    src={require("../../svg/logo_text_with_tagline.svg")}
                    alt="title"
                    id="title"/>
                <div className="herosplash1">
                    <div id="herosplash" className="commondiv">
                        <div id="hypno" className="commondiv">
                            <div id="lastdiv" className="commondiv">
                                <span className="startspan">
                                    <span className="startspan">
                                        <span className="startspan">
                                            <span className="startspan">
                                                <span className="startspan">
                                                    <span className="startspan">
                                                        <span className="startspan">
                                                            <span className="startspan">
                                                                <span className="startspan"></span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Animation;