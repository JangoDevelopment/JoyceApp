import React from "react";
import "./styles.css";
// import Form from "../../components/form_contatos";
import Footer from "../../components/footer";
import Header from "../../components/header";
import PortifolioComponent from "../../components/portifolio";

import PersistentDrawerRight from "../../components/header/responsive";

const Portifolio = () => {
    return (
        <div className="flex-column">
            <Header />
            <PersistentDrawerRight />
            <PortifolioComponent />
            <Footer />
        </div>
    );
};

export default Portifolio;
