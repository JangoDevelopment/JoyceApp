import React from "react";
import "./styles.css";
import PaginaComponente from "../../components/pagina_projeto";
import Footer from "../../components/footer";
import Header from "../../components/header";

import PersistentDrawerRight from "../../components/header/responsive";

const Projeto = (props) => {
    return (
        <div>
            <Header />
            <PersistentDrawerRight />
            <PaginaComponente />
            <Footer />
        </div>
    );
};

export default Projeto;
