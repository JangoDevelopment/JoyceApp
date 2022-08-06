import React, {useEffect} from "react";
import "./styles.css";
import PaginaComponente from "../../components/pagina_projeto";
import Footer from "../../components/footer";
import Header from "../../components/header_projeto";

import PersistentDrawerRight from "../../components/header_projeto/responsive";

const Projeto = (props) => {

    useEffect(() => {
        window.scrollTo(0,0);
    })
    
    return (
        <div>
            <Header />
            <PersistentDrawerRight />
            <PaginaComponente />
            {/* <Footer /> */}
        </div>
    );
};

export default Projeto;
