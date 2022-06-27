import React, { useEffect } from "react";
import "./styles.css";
// import Form from "../../components/form_contatos";
import Footer from "../../components/footer";
import HomePanel from "../../components/home_panel";
import Header from "../../components/header";

import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import PersistentDrawerRight from "../../components/header/responsive";
import logo_img from "../../assets/logo.png";

function Example(props) {
    var items = [{ tela: <HomePanel painel={0} /> }, { tela: <HomePanel painel={1} /> }, { tela: <HomePanel painel={2} /> }];

    return (
        <div className="carousel-container">
            <Carousel indicators={false} timeout={500} interval={1800}>
                {items.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Carousel>
            <img className="logo" src={logo_img} alt="" />
        </div>
    );
}

function Item(props) {
    return <Paper>{props.item.tela}</Paper>;
}

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <div className="flex-column">
            <PersistentDrawerRight />
            <Header />
            {Example()}
            <Footer />
        </div>
    );
};

export default Home;
