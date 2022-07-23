import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo_img from "../../assets/logo.png";
import "./styles.css";

const Header = (props) => {
    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, []);
    return (
        <header className="header flex">
            <div className="logo flex">
                <img src={logo_img} alt="" />
                <Link className="titulo" to={"/"}>
                    <h1 className="titulo unselectable">Joyce Caçador</h1>
                    <h2 className="subtitulo unselectable">Arquitetura e Urbanismo</h2>
                </Link>
            </div>
            <ul className="flex">
                <Link className="link" to={"/"}>
                    <li className="unselectable">Home</li>
                </Link>
                <Link className="link" to={"/apresentacao"}>
                    <li className="unselectable">Serviços</li>
                </Link>
                <Link className="link" to={"/formacao"}>
                    <li className="unselectable">Apresentação</li>
                </Link>
                <Link className="link" to={"/portifolio"}>
                    <li className="unselectable">Portifolio</li>
                </Link>
                <Link className="link" to={"/contato"}>
                    <li className="unselectable">Contato</li>
                </Link>
            </ul>
        </header>
    );
};

export default Header;
