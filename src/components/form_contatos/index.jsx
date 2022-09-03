import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import "./styles.css";

const FormContatos = (props) => {
    return (
        <div className="contato_form" id="contato">
            <form className="form flex-column">
                <div>
                    <h1>vamos tomar um café?</h1>
                    <a class='link' href="https://api.whatsapp.com/send?phone=5512981470468&text=Ol%C3%A1!%20Aqui%20%C3%A9%20a%20Joyce%20Ca%C3%A7ador%20-%20Arquiteta%20Urbanista.%20Obrigada%20pelo%20seu%20contato!%20No%20momento%20n%C3%A3o%20consigo%20te%20responder%2C%20mas%20deixa%20aqui%20pra%20mim%20o%20assunto%2C%20e%20assim%20que%20estiver%20dispon%C3%ADvel%2C%20irei%20te%20chamar%20para%20conversarmos%20melhor%2C%20tudo%20bem%3F" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp className="whatsapp link" /> <h2 className="phone">(12) 98147 0468</h2></a>
                    <h2>arq.joycecacador@gmail.com</h2>
                </div>
                <div>
                    <h1>me encontre aqui</h1>
                    <h2>Rua Monsenhor Aníbal</h2>
                    <h2>de Melo, 206 - Pedregulho</h2>
                    <h2>Guaratingueta, SP</h2>
                </div>
                <button className="budget-btn">
                    <h2>
                        <a className="link" href="https://docs.google.com/forms/d/e/1FAIpQLScnzX8qSuC5bx_M9DyP9yLediE7pep1-jcQawgbxtM3M9gnbg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                            Quero um orçamento
                        </a>
                    </h2>
                </button>
                <div className="flex icons">
                    <a href="https://www.instagram.com/arq.joycecacador/" target="_blank" rel="noopener noreferrer"><FaInstagram className="icon link" /></a>
                    <a href="https://www.facebook.com/joyce.cacador" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className="icon link" /></a>
                    <a href="https://www.linkedin.com/in/joyce-ca%C3%A7ador-cavalca-de-barros-bb8393127/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon link" /></a>
                    <a href="https://api.whatsapp.com/send?phone=5512981470468&text=Ol%C3%A1!%20Aqui%20%C3%A9%20a%20Joyce%20Ca%C3%A7ador%20-%20Arquiteta%20Urbanista.%20Obrigada%20pelo%20seu%20contato!%20No%20momento%20n%C3%A3o%20consigo%20te%20responder%2C%20mas%20deixa%20aqui%20pra%20mim%20o%20assunto%2C%20e%20assim%20que%20estiver%20dispon%C3%ADvel%2C%20irei%20te%20chamar%20para%20conversarmos%20melhor%2C%20tudo%20bem%3F" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="icon link" /></a>
                </div>
            </form>
            <div className="background" />
        </div>
    );
};

export default FormContatos;
