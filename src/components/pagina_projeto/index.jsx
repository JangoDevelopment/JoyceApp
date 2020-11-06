import React from "react";
import "./styles.css";

import projetos from "../../data/projetos";
import useWindowDimensions from "../../hooks/getWindowDimensions";

const PaginaComponente = (props) => {
    const { width } = useWindowDimensions();
    const urlParams = window.location.hash;
    const splicedParams = urlParams.split("/", 4);

    const categoria = projetos[`${splicedParams[2]}`];

    const projeto = categoria.find((x) => x.id === parseInt(splicedParams[3]));
    console.log("here", projeto);

    const pc_component = (
        <div className="projeto_component flex-column">
            <h1 className="titulo">{projeto.titulo}</h1>
            <div className="banner_principal flex">
                <img src={require(`../../${projeto.capa}`)} className="img_principal" />
                <div className="description">
                    <p className="texto">{projeto.descricao}</p>
                </div>
            </div>
            <div className="additional_info flex">
                <div className="bloco entrega flex">
                    <p className="bloco_titulo">Ano do Projeto</p>
                    <p className="ano">{projeto.ano}</p>
                </div>
                <div className="bloco local flex">
                    <p className="bloco_titulo">Local</p>
                    <p className="bloco_info">{projeto.local}</p>
                </div>
            </div>
        </div>
    );

    const mobile_component = (
        <div className="projeto_component_mobile flex-column">
            <h1 className="titulo">{projeto.titulo}</h1>
            <div className="banner_principal flex">
                <img src={require(`../../${projeto.capa}`)} className="img_principal" />
                <div className="description">
                    <p className="texto">{projeto.descricao}</p>
                </div>
            </div>
            <div className="additional_info flex">
                <div className="bloco entrega flex">
                    <p className="bloco_titulo">Ano do Projeto</p>
                    <p className="bloco_info ano">{projeto.ano}</p>
                </div>
                <div className="bloco local flex">
                    <p className="bloco_titulo">Local</p>
                    <p className="bloco_info">{projeto.local}</p>
                </div>
            </div>
        </div>
    );

    return <div>{width > 768 ? pc_component : mobile_component}</div>;
};

export default PaginaComponente;
