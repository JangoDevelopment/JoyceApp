import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

import "./styles.css";

const FormContatos = (props) => {
    return (
        <div className="contato_form" id="contato">
            <form className="form flex-column">
                <h1>vamos tomar um café?</h1>
                <a class='link' href="https://api.whatsapp.com/send?phone=5512981470468&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os." target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp className="whatsapp link" /> <h2>(12) 98147 0468</h2></a>
                <h2>arq.joycecacador@gmail.com</h2>
                <br />
                <h1>me encontre aqui</h1>
                <h2>Rua Monsenhor Aníbal</h2>
                <h2>de Melo, 206 - Pedregulho</h2>
                <h2>Guaratingueta, SP</h2>
                {/* <iframe
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d546.7256889675095!2d-45.20377815729114!3d-22.80552525712058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccc44181e159f3%3A0x760a98e63f69e0e1!2sR.%20Monsenhor%20An%C3%ADbal%20de%20Melo%2C%20206%20-%20Pedregulho%2C%20Guaratinguet%C3%A1%20-%20SP%2C%2012511-050!5e0!3m2!1spt-BR!2sbr!4v1602034778017!5m2!1spt-BR!2sbr"
                    width={500}
                    height={200}
                    frameborder="0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"></iframe> */}
                <button className="budget-btn">
                    <h2>
                        <a className="link" href="https://g1.globo.com/" target="_blank" rel="noopener noreferrer">
                            Quero um orçamento
                        </a>
                    </h2>
                </button>
            </form>
            <div className="background" />
        </div>
    );
};

export default FormContatos;
