import React from "react";
import "./styles.css";
// import Form from "../../components/form_contatos";
import Footer from "../../components/footer";
import HomePanel from "../../components/home_panel";

import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

function Example(props) {
    var items = [
        { tela: <HomePanel painel={0} /> },
        { tela: <HomePanel painel={1} /> },
        { tela: <HomePanel painel={2} /> },
        { tela: <HomePanel painel={3} /> },
    ];

    return (
        <Carousel indicators={false} timeout={500} interval={3000}>
            {items.map((item, i) => (
                <Item key={i} item={item} />
            ))}
        </Carousel>
    );
}

function Item(props) {
    return <Paper>{props.item.tela}</Paper>;
}

const Home = () => {
    return (
        <div className="flex-column">
            {/* <HomePanel painel={2} /> */}
            {Example()}
            <Footer />
        </div>
    );
};

export default Home;
