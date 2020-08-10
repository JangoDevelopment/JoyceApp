import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

import PersistentDrawerRight from "../../components/header/responsive";

import "./styles.css";
import FormContatos from "../../components/form_contatos";

const Contact = () => {
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
