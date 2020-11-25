import React, {useEffect} from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

import PersistentDrawerRight from "../../components/header/responsive";

import "./styles.css";
import FormContatos from "../../components/form_contatos";

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    })

    return (
        <div>
            <Header />
            <PersistentDrawerRight />
            <FormContatos />
            <Footer />
        </div>
    );
};

export default Contact;
