import React from "react";
import "./Button.scss";

export const button1 = () => {
    return (
        <div className="main_div fw-bold">
            <button>Follow US</button>
        </div>
    );
};

export const button2 = () => {
    return (
        <div>
            <a className="fancy " href=" ">
                <span className="top-key"></span>
                <span className="text">buy now</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
            </a>
        </div>
    );
};

export const button3 = () => {
    return (
        <div>
            <a className="fancy2 " href=" ">
                <span className="top-key"></span>
                <span className="text">shope </span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
            </a>
        </div>
    );
};
