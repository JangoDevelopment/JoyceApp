import React from "react";
import "./styles.css";

const HomePanel = (props) => {
    return (
        <div className="home_panel">
            <div className="background">
                <div className="overlay flex-column">
                    <h1>arquitetura é</h1>
                    <h2>planejamento</h2>
                </div>
                <div className="image"></div>
            </div>
            <div className="left_triangle"></div>
        </div>
    );
};

export default HomePanel;
