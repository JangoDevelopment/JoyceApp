import React, { useState } from "react";
import "./styles.css";

const FormContatos = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Mensagem enviada com sucesso!");
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="contato_form">
            <form className="form flex-column" onSubmit={handleSubmit}>
                <h1>vamos tomar um café?</h1>
                <h2>Nome</h2>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                <h2>Email</h2>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <h2>Mensagem</h2>
                <textarea name="" id="" cols="30" rows="5" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <input className="submit" type="submit" value="Enviar" />
            </form>
            <div className="background" />
        </div>
    );
};

export default FormContatos;
