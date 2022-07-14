import React, { useEffect } from "react";
import "./styles.css";
import Header from "../../components/header";

import PersistentDrawerRight from "../../components/header/responsive";

import Home from "../Home";
import Contact from "../Contact";
import Portifolio from "../Portifolio";
import Apresentacao from "../Apresentacao";

function Example(props) {
    return (
        <div className="carousel-container">
            <PersistentDrawerRight />
            <Header />
            <Home />
            <Apresentacao />
            <Portifolio />
            <Contact />
        </div>
    );
}

const SinglePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <div className="flex-column">
            {/* <PersistentDrawerRight />
            <Header /> */}
            {Example()}
            {/* <Footer /> */}
        </div>
    );
};

export default SinglePage;
