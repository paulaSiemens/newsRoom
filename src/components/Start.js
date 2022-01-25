import React from "react";
import logo from "../images/logo-brand.png";

export default function Start(){

    // function handleOnClick(){
    //     window.location.href="/login"
    // }

    return (
        <div className="canvas">
            <div className="cont--start">
                <h1>Welcome to</h1>
                <img src={logo} />
                {/* <div className="cont--btn-start">
                    <button>Log in</button>
                    <button>Sign Up</button>
                </div> */}
            </div>
        </div>
    )}