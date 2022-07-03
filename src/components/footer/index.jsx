import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaCoffee, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./styles.css";

const Footer = (props) => {
    return (
        <footer className="footer flex">
            <div className="block address flex-column">
                <p>Rua Monsenhor Aníbal de Melo, n 206</p>
                <p>Pedregulho</p>
                <p>Guaratingueta, Sao Paulo</p>
            </div>
            <div className="block contact flex-column">
                <div className="coffee flex link">
                    <p>Vamos tomar um café?</p>
                    <FaCoffee className="coffee_icon" />
                </div>
                <p>arq.joycecacador@gmail.com</p>
                <p>
                    <span>(12)</span> 9 8147 - 0468
                </p>
            </div>
            <div className="block info flex-column">
                <div className="flex icons">
                    <a href="https://www.instagram.com/arq.joycecacador/" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram className="icon link" /></a>
                    <a href="https://www.facebook.com/joyce.cacador" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className="icon link" /></a>
                    <a href="https://www.linkedin.com/in/joyce-ca%C3%A7ador-cavalca-de-barros-bb8393127/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon link" /></a>
                    <a href="https://api.whatsapp.com/send?phone=5512981470468&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os." target="_blank" rel="noopener noreferrer"><FaWhatsapp className="icon link" /></a>
                </div>
                <p>
                    © 2020 - <span className="link">Joyce Caçador</span>
                </p>
                <p>
                    Made with love by <span className="link">Jango</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
