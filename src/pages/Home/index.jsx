import React from "react";
import "./styles.css";
// import Form from "../../components/form_contatos";
import Footer from "../../components/footer";
import HomePanel from "../../components/home_panel";

const Home = () => {
    return (
        <div className="flex-column">
            <HomePanel painel={0} />
            <HomePanel painel={1} />
            <HomePanel painel={2} />
            <HomePanel painel={3} />
            <Footer />
        </div>
    );
};

export default Home;
