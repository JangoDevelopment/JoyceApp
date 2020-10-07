import React from "react";
import "./styles.css";

import curriculo from "../../data/curriculo.js";

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
                    <div className="scrollable">
                        <section className="curriculo flex-column">
                            <h2 className="section_title">Formação</h2>
                            <div className="curso flex-column">
                                <h3 className="titulo">Graduada em Arquitetura e Urbanismo pela Pontifícia Universidade Católica de Campinas</h3>
                                <h4 className="local">PUC Campinas</h4>
                            </div>
                        </section>
                        <section className="curriculo flex-column">
                            <h2 className="section_title">Cursos</h2>
                            {curriculo.map((curso) => {
                                return (
                                    <div className="curso flex-column">
                                        <h3 className="titulo">{curso.titulo}</h3>
                                        <h4 className="local">{curso.local}</h4>
                                        <h4 className="carga">{curso.carga}</h4>
                                        <h4 className="enfase">{curso.enfase}</h4>
                                    </div>
                                );
                            })}
                        </section>
                    </div>
                </div>
                <div className="background_image"></div>
            </div>
        </div>
    );
};

export default ApresentacaoComponent;
