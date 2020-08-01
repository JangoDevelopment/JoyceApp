import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = (props) => {
    return (
        <header className="header flex">
            <div className="logo flex">
                <img src="" alt="" />
                <Link className="titulo" to={"/"}>
                    <h1 className="titulo unselectable">Joyce Caçador</h1>
                </Link>
            </div>
            <ul className="flex">
                <Link className="link" to={"/"}>
                    <li className="unselectable">Home</li>
                </Link>
                <li className="unselectable">Apresentação</li>
                <li className="unselectable">Portifólio</li>
                <Link className="link" to={"/contato"}>
                    <li className="unselectable">Contato</li>
                </Link>
            </ul>
        </header>
    );
};

export default Header;
