import React from "react";
import "./styles.css";
import Form from "../../components/form_contatos";
import Footer from "../../components/footer";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Form titulo="Vamos tomar um café?" />
            <Footer />
        </div>
    );
};

export default Home;
