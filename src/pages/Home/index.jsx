import React, { useState, useEffect } from "react";
import "./styles.css";

const Home = () => {
    const [contador, setContador] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log(name);
    }, [contador]);

    function aumentar() {
        setContador(contador + 1);
        console.log(contador);
    }

    return (
        <div>
            <h1>Home</h1>
            <h2>{contador}</h2>
            <button onClick={aumentar}>aumentar</button>
            <h2>Nome</h2>
            <input
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
};

export default Home;
