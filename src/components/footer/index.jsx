import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import "./styles.css";

const Footer = (props) => {
    return (
        <footer className="footer flex">
            <div className="block address flex-column">
                <p>Rua das Laranjeiras, n 711</p>
                <p>Bairro do Limoeiro</p>
                <p>Guaratingueta, Sao Paulo</p>
            </div>
            <div className="block contact flex-column">
                <p>Vamos tomar um café?</p>
                <p>fulana@gmail.com</p>
                <p>(12) 9 9187 - 7727</p>
            </div>
            <div className="block info flex-column">
                <div className="flex icons">
                    <AiOutlineInstagram className="icon" />
                    <FaFacebookSquare className="icon" />
                </div>
                <p>© 2020 - Joyce Caçador</p>
                <p>Made with love by Jango</p>
            </div>
        </footer>
    );
};

export default Footer;
