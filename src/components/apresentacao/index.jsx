import React from "react";
import "./styles.css";

const ApresentacaoComponent = (props) => {
    return (
        <div className="apresentacao flex-column">
            <div className="block_1">
                <div className="info">
                    <h1>valores</h1>
                    <p>
                        Apaixonada pelo meu trabalho, acredito que a Arquitetura e o Urbanismo tem o poder de transformar vidas. Minha missão é apresentar o
                        melhor resultado dentro dos parâmetros desejados e buscar sempre as melhores soluções para o cliente.Acredito que um projeto bem pensado
                        em sua essência desenvolve obras sem dores de cabeça.
                    </p>
                </div>
                <div className="background_image"></div>
            </div>
            <div className="block_2">
                <div className="info">
                    <h1>curriculo</h1>
                </div>
                <div className="background_image"></div>
            </div>
        </div>
    );
};

export default ApresentacaoComponent;
