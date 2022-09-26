import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import logo_img from "../../assets/logo.png";
import "./styles.css";

const Header = (props) => {
    useEffect(() => {
        window.setTimeout(() => {
            let url = window.location.href.split("/");
            let target = url[url.length - 1].toLowerCase();
            let element = document.getElementById(target);
            if (target === "formacao") {
                console.log('entrou no if de formacao');
                const yOffset = -80;
                const y = element && element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({top: y, behavior: 'smooth'});
            } else {
                element && element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
      }, []);

    return (
        <header className="header flex">
            <div className="logo flex">
                <img src={logo_img} alt="" />
                <a className="titulo"
                    href="/"
                    onClick={e => {
                        let hero = document.getElementById("home");
                        e.preventDefault();
                        hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
                }}>
                    <h1 className="titulo unselectable">Joyce Caçador</h1>
                    <h2 className="subtitulo unselectable">Arquitetura e Urbanismo</h2>
                </a>
            </div>
            <ul className="flex">
                <a className="link"
                    href="/"
                    onClick={e => {
                        let hero = document.getElementById("home");
                        e.preventDefault();
                        hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
                }}>
                    <li className="unselectable">Home</li>
                </a>
                <a className="link"
                    href="/"
                    onClick={e => {
                        let hero = document.getElementById("apresentacao");
                        e.preventDefault();
                        hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}>
                    <li className="unselectable">Serviços</li>
                </a>
                <a className="link"
                    href="/"
                    onClick={e => {
                        let hero = document.getElementById("formacao");
                        e.preventDefault();
                        const y =hero && hero.getBoundingClientRect().top + window.pageYOffset -40;
                        window.scrollTo({top: y, behavior: 'smooth'});
                    }}>
                    <li className="unselectable">Apresentação</li>
                </a>
                <a className="link"
                    href="/"
                    onClick={e => {
                        let hero = document.getElementById("portifolio");
                        e.preventDefault();
                        hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}>
                    <li className="unselectable">Projetos</li>
                </a>
                <a className="link"
                    href="/"
                    onClick={e => {
                        let hero = document.getElementById("contato");
                        e.preventDefault();
                        hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
                }}>
                    <li className="unselectable">Contato</li>
                </a>
            </ul>
        </header>
    );
};

export default Header;
