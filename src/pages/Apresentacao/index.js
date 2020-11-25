import React, {useEffect} from "react";
import "./styles.css";
// import Form from "../../components/form_contatos";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ApresentacaoComponent from "../../components/apresentacao";

import PersistentDrawerRight from "../../components/header/responsive";

const Apresentacao = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    })

    return (
        <div className="flex-column">
            <Header />
            <PersistentDrawerRight />
            <ApresentacaoComponent />
            <Footer />
        </div>
    );
};

export default Apresentacao;
