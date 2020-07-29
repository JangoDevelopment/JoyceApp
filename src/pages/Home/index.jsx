import React, { useState, useEffect } from "react";
import "./styles.css";
import Form from "../../components/form_contatos";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Form titulo="Vamos tomar um café?" />
        </div>
    );
};

export default Home;
