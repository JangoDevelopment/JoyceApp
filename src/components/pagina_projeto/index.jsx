import React from "react";
import "./styles.css";

import Gallery from "react-photo-gallery";
import projetos from "../../data/projetos";
import useWindowDimensions from "../../hooks/getWindowDimensions";

const PaginaComponente = (props) => {
    const { width } = useWindowDimensions();
    const urlParams = window.location.hash;
    const splicedParams = urlParams.split("/", 4);

    const categoria = projetos[`${splicedParams[2]}`];

    const photos = [
        {
            src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
            width: 1,
            height: 1,
        },
        {
            src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
            width: 3,
            height: 4,
        },
        {
            src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
            width: 1,
            height: 1,
        },
        {
            src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
            width: 1,
            height: 1,
        },
        {
            src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
            width: 1,
            height: 1,
        },
        {
            src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
            width: 1,
            height: 1,
        },
        {
            src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
            width: 1,
            height: 1,
        },
        {
            src: "https://source.unsplash.com/PpOHJezOalU/800x599",
            width: 1,
            height: 1,
        },
        {
            src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
            width: 1,
            height: 1,
        },
    ];

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
            <div className="project_gallery">
                <Gallery photos={photos} direction={"column"} />
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
            <div className="project_gallery">
                <Gallery photos={photos} direction={"column"} />
            </div>
        </div>
    );

    return <div>{width > 768 ? pc_component : mobile_component}</div>;
};

export default PaginaComponente;
