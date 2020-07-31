import React from "react";
import "./styles.css";

import styled from "styled-components";
import img0 from "./images/0.jpg";
import img1 from "./images/1.png";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";

const HomePanel = ({ painel }) => {
    const titulos = [
        { id: 0, content: "inovar", color: "#FEC90E" },
        { id: 1, content: "planejamento", color: "#EA7979" },
        { id: 2, content: "qualidade de vida", color: "#609BA3" },
        { id: 3, content: "funcionalidade", color: "#50967F" },
    ];

    const Image0 = styled.div`
        position: absolute;
        z-index: 2;
        right: 0;
        height: 100vh;
        width: 75vw;
        opacity: 0.7;
        clip-path: polygon(39% 0, 100% 0, 100% 100%, 15% 100%);
        background-image: url(${img0});
        background-repeat: no-repeat;
        background-size: cover;
    `;

    const Image1 = styled.div`
        position: absolute;
        z-index: 2;
        right: 0;
        height: 100vh;
        width: 75vw;
        opacity: 0.8;
        clip-path: polygon(39% 0, 100% 0, 100% 100%, 15% 100%);
        background-color: #fff0f0;
        background-image: url(${img1});
        background-repeat: no-repeat;
        background-size: cover;
    `;

    const Image2 = styled.div`
        position: absolute;
        z-index: 2;
        right: 0;
        height: 100vh;
        width: 75vw;
        opacity: 0.7;
        clip-path: polygon(39% 0, 100% 0, 100% 100%, 15% 100%);
        background-image: url(${img2});
        background-repeat: no-repeat;
        background-size: cover;
    `;

    const Image3 = styled.div`
        position: absolute;
        z-index: 2;
        right: 0;
        height: 100vh;
        width: 75vw;
        opacity: 0.7;
        clip-path: polygon(39% 0, 100% 0, 100% 100%, 15% 100%);
        background-image: url(${img3});
        background-repeat: no-repeat;
        background-size: cover;
    `;

    const Title = styled.h2`
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 80px;
        color: ${titulos[painel].color};
    `;

    return (
        <div className="home_panel">
            <div className="background">
                <div className="overlay flex-column">
                    <h1>arquitetura é</h1>
                    <Title>{titulos[painel].content}</Title>
                </div>
                {painel === 0 ? <Image0 /> : null}
                {painel === 1 ? <Image1 /> : null}
                {painel === 2 ? <Image2 /> : null}
                {painel === 3 ? <Image3 /> : null}
            </div>
            <div className="left_triangle"></div>
        </div>
    );
};

export default HomePanel;
