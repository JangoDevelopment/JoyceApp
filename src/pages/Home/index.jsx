import React from "react";
import "./styles.css";
import Form from "../../components/form_contatos";
import Footer from "../../components/footer";
import HomePanel from "../../components/home_panel";

const Home = () => {
    return (
        <div>
            <HomePanel />
            <Footer />
        </div>
    );
};

export default Home;
