import React from "react";
import "./styles.css";
import logo_img from "../../assets/logo.png";

import styled from "styled-components";
import img0 from "./images/0.jpg";
import img1 from "./images/1.png";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";

const HomePanel = ({ painel }) => {
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

    return (
        <div className="home_panel">
            <div className="background">
                {painel === 0 ? (
                    <Image0 className="image yellow-image" />
                ) : null}
                {painel === 1 ? (
                    <Image1 className="image red-image" />
                ) : null}
                {painel === 2 ? (
                    <Image2 className="image blue-image" />
                ) : null}
                {painel === 3 ? (
                    <Image3 className="image green-image" />
                ) : null}
                {/* <div className="logo-carousel-container">
                    <img className="logo-carousel-img" src={logo_img} alt="" />
                </div> */}
            </div>
        </div>
    );
};

export default HomePanel;
