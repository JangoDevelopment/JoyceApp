import React from "react";
import "./styles.css";

import styled from "styled-components";
import img0 from "./images/0.jpg";
import img1 from "./images/1.png";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";

import b1 from "./images/b1.png";
import b2 from "./images/b2.png";
import b3 from "./images/b3.png";
import b4 from "./images/b4.png";



const HomePanel = ({ painel }) => {
    const titulos = [
        { id: 0, content: "desenhar sonhos", color: "#FEC90E" },
        { id: 1, content: "planejamento", color: "#EA7979" },
        { id: 2, content: "você conectado com seu lar", color: "#609BA3" },
        { id: 3, content: "funcionalidade", color: "#50967F" },
    ];

    const Image0 = styled.div`
        background-image: url(${img0});
    `;

    const Image1 = styled.div`
        background-color: #fff0f0;
        background-image: url(${img1});
    `;

    const Image2 = styled.div`
        background-image: url(${img2});
    `;

    const Image3 = styled.div`
        background-image: url(${img3});
    `;

    const Title = styled.h2`
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 86px;
        color: ${titulos[painel].color};
    `;

    return (
        <div className="home_panel">
            <div className="background">
                <div className="overlay flex-column">
                    <h1 className="unselectable">arquitetura é</h1>
                    <Title className="unselectable titulo">{titulos[painel].content}</Title>
                </div>

                {painel === 0 ? (
                    <div>
                        <img className="b1" src={b1} alt="" />
                        <Image0 className="image" />
                    </div>
                ) : null}
                {painel === 1 ? (
                    <div>
                        <img className="b2" src={b2} alt="" />
                        <Image1 className="image" />
                    </div>
                ) : null}
                {painel === 2 ? (
                    <div>
                        <img className="b3" src={b3} alt="" />
                        <Image2 className="image" />
                    </div>
                ) : null}
                {painel === 3 ? (
                    <div>
                        <img className="b4" src={b4} alt="" />
                        <Image3 className="image" />
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default HomePanel;
