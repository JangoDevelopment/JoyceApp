import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

const Foo = () => {
    const history = useHistory();

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleSubmit(event) {
        event.preventDefault();
        console.log(form);
        alert("Mensagem Enviada ;D");
        history.push("/");
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    }

    return (
        <div>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>
                        <h1>Vamos tomar um café?</h1>
                    </legend>
                    <h2>Nome*</h2>
                    <input
                        required
                        name="name"
                        type="text"
                        onChange={(e) => handleChange(e)}
                    />
                    <h2>Email*</h2>
                    <input
                        required
                        name="email"
                        type="email"
                        onChange={(e) => handleChange(e)}
                    />
                    <h2>Como posso te ajudar?*</h2>
                    <textarea
                        required
                        name="message"
                        onChange={(e) => handleChange(e)}
                    />
                </fieldset>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Foo;
